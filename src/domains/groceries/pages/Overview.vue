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
import {computed} from 'vue';
import {getAllGroceries} from '../store.js';

const products = getAllGroceries.value;

const productTotal = computed(() => {
    return products.reduce((acc, product) => acc + calcSubTotal(product), 0).toFixed(2);
});

const calcSubTotal = product => {
    return +product.price * +product.quantity;
};
</script>
