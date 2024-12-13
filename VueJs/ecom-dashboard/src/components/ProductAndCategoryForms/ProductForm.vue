<template>
    <!-- Form for Title, ImgUrl, Id -->
    <v-form>
      <v-text-field label="Title" variant="outlined" class="custom-input" v-model="newProduct.title"></v-text-field>
      <v-text-field label="ImgUrl" variant="outlined" class="custom-input" v-model="newProduct.imgUrl"></v-text-field>
      <v-text-field label="Id" variant="outlined" class="custom-input" v-model="newProduct.id"></v-text-field>
      <v-text-field label="Price" variant="outlined" class="custom-input" v-model="newProduct.price"></v-text-field>
      <v-btn class="mt-2" type="button" block @click="addProduct">Submit</v-btn>
    </v-form>
  
    <!-- Table with Edit/Delete Actions -->
    <v-simple-table class="custom-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Img</th>
          <th>Id</th>
          <th>Price</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="product.id">
          <td>{{ product.title }}</td>
          <td><img :src="product.imgUrl" alt="Product Image" class="product-img" /></td>
          <td>{{ product.id }}</td>
          <td>{{ product.price }}</td>
          <!-- Edit Button -->
          <td><v-btn @click="editProduct(index)" color="primary" small>Edit</v-btn></td>
          <!-- Delete Button -->
          <td><v-btn @click="deleteProduct(index)" color="red" small>Delete</v-btn></td>
        </tr>
      </tbody>
    </v-simple-table>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const products = ref([
    { id: 1, title: 'Product 1', imgUrl: 'https://via.placeholder.com/150', price: '$10.00' },
    { id: 2, title: 'Product 2', imgUrl: 'https://via.placeholder.com/150', price: '$20.00' },
    { id: 3, title: 'Product 3', imgUrl: 'https://via.placeholder.com/150', price: '$30.00' },
  ]);
  
  // Model for adding a new product
  const newProduct = ref({
    title: '',
    imgUrl: '',
    id: '',
    price: '',
  });
  
  // Add new product to the table
  const addProduct = () => {
    if (newProduct.value.title && newProduct.value.imgUrl && newProduct.value.id && newProduct.value.price) {
      products.value.push({
        ...newProduct.value,
      });
      // Reset form fields after adding
      newProduct.value = { title: '', imgUrl: '', id: '', price: '' };
    } else {
      alert('Please fill in all fields.');
    }
  };
  
  // Edit an existing product
  const editProduct = (index) => {
    const product = products.value[index];
    // Set the form values to the product details for editing
    newProduct.value = { ...product };
    // Optionally, you could open a modal for editing or update the product directly in the table
  };
  
  // Delete a product from the table
  const deleteProduct = (index) => {
    products.value.splice(index, 1); // Remove the product at the specified index
  };
  </script>
  
  <style scoped>
  /* Custom style for the form inputs */
  .custom-input .v-input__control {
    height: 50px; 
  }
  
  .custom-input .v-input__control input {
    height: 100%;
    padding: 8px; 
  }
  
  /* Table styling */
  .custom-table {
    width: 100%;  /* Make sure the table uses 100% of the container width */
    border-collapse: collapse;
    margin-top: 2rem;
  }
  
  .custom-table thead th {
    background-color: #007bff;
    color: #ffffff; 
    text-align: left; 
    padding: 10px;
    font-weight: bold; 
  }
  
  .custom-table tbody td {
    text-align: left; 
    border-top: 1px solid #ddd; 
    padding: 10px;
  }
  
  .custom-table tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  .custom-table tbody tr:hover {
    background-color: #e2e6ea;
  }
  
  .custom-table img {
    border-radius: 5px;
    width: 50px;  /* Ensure image is sized properly */
    height: auto;
  }
  
  /* Add spacing and margins between form and table */
  .custom-table + .v-btn {
    margin-top: 20px;
  }
  
  /* Responsive design: Ensure table is responsive for smaller screens */
  @media (max-width: 768px) {
    .custom-table thead th, .custom-table tbody td {
      padding: 8px;
    }
  
    .custom-table img {
      width: 40px;
    }
  }
  </style>
  