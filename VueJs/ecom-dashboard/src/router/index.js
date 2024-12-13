import { createRouter, createWebHistory } from "vue-router";
import ProductForm from "@/components/ProductAndCategoryForms/ProductForm.vue";
import CategoryForm from "@/components/ProductAndCategoryForms/CategoryForm.vue";

const routes = [
  {
    path: "/product-form", 
    name: "ProductForm",
    component: ProductForm, 
  },
  {
    path:"/category-form",
    name:"CategoryForm",
    component:CategoryForm
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
