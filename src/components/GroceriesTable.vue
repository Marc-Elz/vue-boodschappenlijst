<template>
    <table>
        <thead>
            <tr>
                <th>product</th>
                <th>productcost</th>
                <th>quantity</th>
                <th>subtotals</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(product, index) in products" :key="index">
                <td>{{ product.name }}</td>
                <td>{{ product.price }}</td>
                <td><input type="number" v-model.number="product.quantity" min="0" /></td>
                <td>{{ calcSubTotal(product).toFixed(2) }}</td>

                <!--- Have to add the subtotals in the same row-->
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="3">Total</td>
                <td>{{ productTotal }}</td>
            </tr>
        </tfoot>
    </table>
</template>

<script setup>
import {ref, computed} from 'vue';

const products = ref([
    {name: 'Rijst', price: 1.0, quantity: 1},
    {name: 'Brococoli', price: 0.99, quantity: 1},
    {name: 'Koekjes', price: 1.2, quantity: 1},
    {name: 'Noten', price: 2.99, quantity: 1},
]);

const productTotal = computed(() => {
    return products.value.reduce((acc, product) => acc + calcSubTotal(product), 0).toFixed(2);
});

const calcSubTotal = product => {
    return +product.price * +product.quantity;
};
</script>
