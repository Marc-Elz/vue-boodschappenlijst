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
export const editGrocery = grocery => {
    const oldGrocery = getGroceryById(grocery.id);
    oldGrocery.value.name = grocery.name;
    oldGrocery.value.price = grocery.price;
    oldGrocery.value.quantity = grocery.quantity;
};

export const removeGrocery = id => {
    const index = groceries.value.indexOf(getGroceryById(id).value);

    if (index > -1) {
        groceries.value.splice(index, 1);
    }
};
