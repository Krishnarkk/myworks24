<template>
  <v-app>
    <v-app-bar :elevation="1">
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>Application Bar</v-app-bar-title>

      <v-spacer></v-spacer>
      <v-btn text @click="goToProductForm">Product Form</v-btn>
      <v-btn text @click="goToCategoryForm">Category Form</v-btn>
    </v-app-bar>

    <v-main>
      <h1>Welcome to the Product App</h1>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goToProductForm = () => {
  router.push("/product-form");
};

const goToCategoryForm = () => {
  router.push("/category-form");
};
</script>

