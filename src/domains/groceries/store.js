import {ref, computed} from 'vue';

const groceries = ref([
    {id: 0, name: 'Rijst', price: 1.0, quantity: 1},
    {id: 1, name: 'Brococoli', price: 0.99, quantity: 1},
    {id: 2, name: 'Koekjes', price: 1.2, quantity: 1},
    {id: 3, name: 'Noten', price: 2.99, quantity: 1},
]);

export const getAllGroceries = computed(() => groceries.value);
export const getGroceryById = id => computed(() => groceries.value.find(grocery => grocery.id == id));

export const addGrocery = grocery => groceries.value.push(grocery);
