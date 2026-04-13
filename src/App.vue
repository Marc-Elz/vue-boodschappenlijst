<script setup>
import {ref, computed} from 'vue'

const products = ref([
    {name: "Rijst", price: 1.0}, 
    {name: "Brococoli", price: 0.99},
    {name: "Koekjes", price: 1.20},
    {name: "Noten", price: 2.99}
])

const productSubtotals = computed(() => {
    return products.value.price * products.value.quantity
});

</script>

<template>
    
    <table>
        <th> <td>product</td><td>productcost</td><td>quantity</td><td>cost</td> </th>
        <tr v-for="(product, index) in products" :key="index">
            <td>{{ product.name }} </td>
            <td>{{product.price}} </td>
            <td><input type="number" min="0" value="0"></td>
            <td>{{ productSubtotals[index] }}</td>
        </tr>
    </table>
</template>
