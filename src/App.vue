<script setup>
import {ref} from 'vue';
import {RouterLink, RouterView} from 'vue-router';

const products = ref([
    {name: 'Rijst', price: 1.0, quantity: 1},
    {name: 'Brococoli', price: 0.99, quantity: 1},
    {name: 'Koekjes', price: 1.2, quantity: 1},
    {name: 'Noten', price: 2.99, quantity: 1},
]);
</script>

<template>
    <RouterLink to="/grocery/" v-model="products">Overview Page</RouterLink>
    <RouterLink to="/grocery/edit">Edit Page</RouterLink>
    <RouterView />
</template>
