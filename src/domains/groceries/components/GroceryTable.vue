<template>
    <table>
        <thead>
            <tr>
                <th>id</th>
                <th>product</th>
                <th>productcost</th>
                <th>quantity</th>
                <th>subtotals</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(product, index) in products" :key="product.id">
                <td>{{ product.id }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.price }}</td>
                <td><input type="number" v-model.number="product.quantity" min="0" /></td>
                <td>{{ calcSubTotal(product).toFixed(2) }}</td>
                <button @click="redirectToPage(product.id)">Edit</button>
                <button @click="removeGrocery(product.id)">Delete</button>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="4">Total</td>
                <td>{{ productTotal }}</td>
            </tr>
        </tfoot>
    </table>
</template>

<script setup>
import {computed} from 'vue';
import {getAllGroceries, removeGrocery} from '../store.js';
import {useRouter} from 'vue-router';

const products = getAllGroceries.value;
const router = useRouter();

const productTotal = computed(() => {
    return products.reduce((acc, product) => acc + calcSubTotal(product), 0).toFixed(2);
});

const calcSubTotal = product => {
    return +product.price * +product.quantity;
};

const redirectToPage = id => {
    console.log(id);
    router.push('/groceries/' + id);
};
</script>
