<template>
    <div>Edit</div>
    <div>Currently editing {{ $route.params.id }}</div>
    <GroceryForm @submitEvent="handeSubmit" :grocery="selectedGrocery" />
</template>

<script setup>
import {getGroceryById, editGrocery} from '../store';
import GroceryForm from '../components/GroceryForm.vue';
import {useRoute, useRouter} from 'vue-router';
import {computed, watch} from 'vue';

const route = useRoute();
const router = useRouter();

const paramsId = route.params.id;
const selectedGrocery = getGroceryById(paramsId);

const handeSubmit = changedGrocery => {
    editGrocery(changedGrocery);
    router.push('/groceries/overview');
};
</script>
