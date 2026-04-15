<template>
    <div>Create</div>
    <GroceryForm @submitEvent="updateGrocery" :grocery="grocery" />
</template>

<script setup>
import {addGrocery} from '../store';

import GroceryForm from '../components/GroceryForm.vue';

const updateGrocery = newGrocery => {
    console.log('Handling adding of new grocery:');
    console.log(newGrocery);
    addGrocery(newGrocery);
};

const grocery = {id: 7, name: '', price: 0, quantity: 0};
</script>
