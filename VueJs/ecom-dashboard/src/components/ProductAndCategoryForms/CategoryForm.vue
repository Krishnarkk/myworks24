<template>
  <!-- Container Row for id and title fields -->
  <v-row>
    <v-col cols="12" md="6">
      <v-text-field label="id" variant="outlined"></v-text-field>
    </v-col>
    <v-col cols="12" md="6">
      <v-text-field label="title" variant="outlined"></v-text-field>
    </v-col>
    <v-col cols="12" md="6">
      <v-text-field label="routename" variant="outlined"></v-text-field>
    </v-col>
    <v-col cols="12" md="6">
      <v-text-field label="subid" variant="outlined"></v-text-field>
    </v-col>
  </v-row>

  <!-- Single Field Rows for the remaining fields -->

  <v-text-field label="name" variant="outlined"></v-text-field>
  <v-text-field label="imgurl" variant="outlined"></v-text-field>
  <v-text-field label="price" variant="outlined"></v-text-field>
  <v-btn block>Submit</v-btn>
  
</template>

<script setup></script>
