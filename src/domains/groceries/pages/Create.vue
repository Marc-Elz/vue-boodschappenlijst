<template>
    <div>Create</div>
    <GroceryForm @submitEvent="handeSubmit" :grocery="grocery" />
</template>

<script setup>
import {addGrocery} from '../store';

import GroceryForm from '../components/GroceryForm.vue';
const handeSubmit = newGrocery => {
    console.log('Handling adding of new grocery:');
    console.log(newGrocery);
    addGrocery(newGrocery);
};

const grocery = {id: undefined, name: '', price: 0, amount: 0};
</script>
