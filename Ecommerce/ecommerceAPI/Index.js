const mongoose = require("mongoose");
const express = require("express");

//uri connection
const uri =
  "mongodb+srv://krishna:Up2m50s0LrUa5HBh@cluster0.56mab.mongodb.net/";
const dbname = "ecommerce";
const cors = require("cors");
// mongoose status connected to database
mongoose
  .connect(uri, { dbName: dbname })
  .then(() => {
    console.log("mongoDB connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

mongoose.connection.on("connected", () => {
  console.log("mongoose connected to DB");
});

mongoose.connection.on("error", () => {
  console.log(error.message);
});

mongoose.connection.on("disconnected", () => {
  console.log("mongoose connection got disconnected");
});

//initializing express app
const app = express();
app.use(cors());

//initialize sever
app.listen(3000, () => {
  console.log("server listening on port 3000");
});

//importing schema model
const ProductCategory = require("./models");
const SignUp = require("./SignupModel");
const ShopItems = require("./shopProductModel");

//parsing the data when being communicated with express to mongoDB
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
//adding user to Ecommerce DB

// check qs ,urlencoded,body  in request
app.post("/user", (request, response) => {
  email = request.body.email;
  password = request.body.password;
  displayName = request.body.displayName;

  //constructor based Schema
  let newSignUp = new SignUp({
    displayName: displayName,
    email: email,
    password: password,
  });
  newSignUp
    .save()
    .then((user) => {
      response.send(user);
    })
    .catch((err) => console.log(err));
});

app.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const resp = await SignUp.findOne({ email, password });
    res.status(200).send({
      status: "success",
      message: "sign in successful",
      resp,
    });
  } catch (err) {
    console.log("Sign in failed", err);
  }
});

//get call for categories
app.get("/shop", async (req, res) => {
  try {
    const categories = await ProductCategory.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//post call for product categories
app.post("/shop", async (req, res) => {
  try {
    const { title, id, imageUrl } = req.body;
    let productCategory = new ProductCategory({ title, id, imageUrl });
    productCategory.save().then((category) => {
      res.status(200).send({
        status: "success",
        message: "category added successfully",
        category,
      });
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//delete call for product categories
app.delete("/shop/:id", async (req, res) => {
  console.log(req.params);
  const category = await ProductCategory.deleteOne({ id: req.params.id });
  console.log(category);
  if (!category) {
    return next(
      res.status(204).json({
        status: "success",
        message: "No product category found with that ID",
        data: null,
      })
    );
  }
  res.status(200).json({
    status: "success",
    message: "category deleted successfully",
    data: null,
  });
});

//update
// app.post("/shop-item", async (req, res) => {
//   try {
//     const categoryProduct = req.body;
//     const categoryExists = await ShopItems.findOne({ id: categoryProduct.id });
//     if (!categoryExists) {
//       let products = new ShopItems(categoryProduct);
//       products
//         .save()
//         .then((resp) => {
//           console.log(resp);
//           res.send(resp);
//         })
//         .catch((err) => console.log("not able to create product"));
//     } else {
//       console.log("product category already exists");

//       const { id, items } = req.body; //destructure properties
//       const product = items[0]; //assuming you are sending one product at a time
//       //$ represents match
//       //$set for setting the existing one
//       const update = {
//         $set: {
//           "items.$": product, //aggregation
//         },
//       };
//       let newProducts = ShopItems.updateOne(
//         { id: id, "items.id": product.id },
//         update,
//         {
//           upsert: false, //if upsert true==> add new record
//           //instead of changing title
//           arrayFilters: [{ "items.id": product.id }],
//         }
//       )
//         .then((resp) => {
//           console.log(resp);
//           res.send(resp);
//         })
//         .catch((err) => console.log("not able to create product"));
//     }
//   } catch (err) {
//     console.error(err);
//   }
// });


app.post("/shop-item", async (req, res) => {
  try {
    const categoryProduct = req.body;
    const categoryExists = await ShopItems.findOne({ id: categoryProduct.id });

    if (!categoryExists) {
      // Category doesn't exist, create a new one
      const products = new ShopItems(categoryProduct);
      await products.save(); // Use await for better handling of async operations
      console.log("New product category created:", products);
      res.status(201).send(products); // Return a 201 created status
    } else {
      // Category exists, update the items within the category
      console.log("Product category already exists");

      const { id, items } = categoryProduct;
      const product = items[0]; // Assuming only one product is being sent for update

      // Define the update operation
      const update = {
        $set: {
          "items.$": product, // Replace the item that matches the condition
        },
      };

      // Perform the update using the updateOne with arrayFilters
      const updatedCategory = await ShopItems.updateOne(
        { id: id, "items.id": product.id }, // Match the category and item id
        update, // Update operation
        {
          upsert: false, // Do not insert a new document if no match is found
          arrayFilters: [{ "items.id": product.id }], // Array filter to match specific item
        }
      );

      // Check if any modifications were made
      if (updatedCategory.nModified > 0) {
        console.log("Product updated:", updatedCategory);
        res.status(200).send(updatedCategory); // Send the updated category in response
      } else {
        console.log("No updates made, the item might not exist in the category.");
        res.status(400).send({
          message: "No updates were made. Ensure the item exists in the category.",
        });
      }
    }
  } catch (err) {
    console.error("Error processing request:", err);
    res.status(500).send({
      message: "Server error",
      error: err.message,
    });
  }
});


//get call for shop products

app.get("/shop-item", async (req, res) => {
  const shopItems = await ShopItems.find();
  res.status(200).send({
    status: "success",
    results: shopItems.length,
    data: {
      shopItems,
    },
  });
});

//nodejs process for running ot to get exit
process.on("SIGINT", async () => {
  await mongoose.connection.close();
  process.exit(0);
});

//mongoose is interface between nodejs and mongo DB Mongo DB is unstructured
//nodejs completely asynchronous (for machine calculation)
//express for server communication from nodejs (Virtual machine)
