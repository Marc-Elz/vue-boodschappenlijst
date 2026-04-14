<script setup>
import GroceriesTable from './components/GroceriesTable.vue';
import {ref} from 'vue';
const products = ref([
    {name: 'Rijst', price: 1.0, quantity: 1},
    {name: 'Brococoli', price: 0.99, quantity: 1},
    {name: 'Koekjes', price: 1.2, quantity: 1},
    {name: 'Noten', price: 2.99, quantity: 1},
]);
</script>

<template>
    <GroceriesTable v-model="products" />
</template>
