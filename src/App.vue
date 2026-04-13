<script setup>
import {ref, computed} from 'vue';

const products = ref([
    {name: 'Rijst', price: 1.0, quantity: 1},
    {name: 'Brococoli', price: 0.99, quantity: 1},
    {name: 'Koekjes', price: 1.2, quantity: 1},
    {name: 'Noten', price: 2.99, quantity: 1},
]);

const productSubTotals = computed(() => {
    const subTotalArray = [];
    for (const key in products.value) {
        subTotalArray.push(computeSubTotal(products.value[key]));
    }
    console.log(subTotalArray);
    return subTotalArray;

    const subTotals = new Map();
    for (const key in products.value) {
        subTotals.set(key, computeSubTotal(products.value[key]));
    }
    console.log('subtotal: ' + subTotals.get(0));

    console.log(Array.from(subTotals.values()));
    console.log(subTotals.size);

    return subTotals;
});

const productTotal = computed(() => {
    return Array.from(productSubTotals)
        .reduce((acc, subtotal) => acc + subtotal, 0)
        .toFixed(2);
});

const computeSubTotal = product => {
    return (+product.price * +product.quantity).toFixed(2);
};
</script>

<template>
    <table>
        <tr>
            <th>product</th>
            <th>productcost</th>
            <th>quantity</th>
            <th>subtotals</th>
        </tr>
        <tr v-for="(product, index) in products" :key="index">
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td><input type="number" v-model="product.quantity" min="0" value="0" /></td>

            <!--- Have to add the subtotals in the same row-->
        </tr>
        <td v-for="(subTotal, index) in productSubTotals" :key="index">
            {{ subTotal }}
        </td>
        <tr>
            <td colspan="3">Total</td>
            <td>{{ productTotal }}</td>
        </tr>
    </table>
</template>
