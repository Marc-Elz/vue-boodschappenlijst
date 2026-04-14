<template>
    <div>Edit</div>
    <GroceryForm @submitEvent="handeSubmit" :grocery="getGroceryById[0]" />
</template>

<script setup>
import {getGroceryById} from '../store';

import GroceryForm from '../components/GroceryForm.vue';
const handeSubmit = newGrocery => {
    console.log(newGrocery);
    // updateGrocery function?
};

// Edit page should show a list of all groceries with an edit button v-for so that the user can select
// Later i can make that be its own separate page which just evoks Edit.vue, Create.vue o
</script>
