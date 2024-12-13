import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useProductStore = defineStore("productStore", {
  //defining initial state
  state: () => ({
    categories: [],
    products: [],
  }),
  //defining actions
  actions: {
    //defining asynchronous functions for API call
    async fetchCategories() {
      try {
        const fetchResponse = await axios.get("http://localhost:3000/shop");
        this.categories = fetchResponse.data;
      } catch (err) {
        console.error("Failed to fetch categories", err);
      }
    },

    async fetchProducts() {
      try {
        const fetchResponse = await axios.get(
          "http://localhost:3000/shop-item"
        );
        this.products = fetchResponse.data;
      } catch (err) {
        console.error("Failed to fetch categories", err);
      }
    },

    //adding new category
    async createCategory(category) {
      try {
        const fetchResponse = axios.post(
          "http://localhost:3000/shop",
          category
        );
        this.categories.push((await fetchResponse).data);
      } catch (error) {
        console.log("Failed to create category", error);
      }
    },

    //deleting category by ID
    async deleteCategory(categoryId) {
      try {
        await axios.delete(`http://localhost:3000/shop/${categoryId}`);
        this.categories = this.categories.filter(
          (category) => category.id !== categoryId
        );
      } catch (err) {
        console.log("failed to delete category", err);
      }
    },

    //create new product
    async createProduct(product, category) {
      try {
        const categoryProduct = [...category, ...items[product]];
        const response = await axios.post(
          `http://localhost:3000/shop-item`,
          categoryProduct
        );
        this.products.push([
          ...response.data
            .filter((c) => c.id === categoryProduct.id)
            .map((p) => p),
        ]);
      } catch (err) {
        console.log(err);
      }
    },

    //update product
    async updateProduct(product) {
      try {
        const response = await axios.put(
          `http://localhost:3000/shop-item/${product.id}`,
          product
        );
        const index = this.products.findIndex((p) => p.id === product.id);
        if (index !== -1) {
          this.products[index] = response.data;
        }
      } catch (err) {
        console.error("Failed to update product");
      }
    },
  },
});
