<template>
    <form>
        <ul>
            <li>
                Name:
                <input v-model="groceryCopy.name" placeholder="placeholder" />
            </li>
            <li>
                Price:
                <input type="number" v-model.number="groceryCopy.price" step="0.01" min="0" />
            </li>
            <li>
                Amount:
                <input type="number" v-model.number="groceryCopy.quantity" min="0" />
            </li>
            <button @click.prevent="emit('submitEvent', groceryCopy)">submit</button>
        </ul>
    </form>
</template>

<script setup>
import {ref} from 'vue';

const emit = defineEmits(['submitEvent']);

const {grocery} = defineProps({
    grocery: {
        id: Number,
        name: String,
        price: Number,
        quantity: Number,
    },
});

const groceryCopy = ref({...grocery});
</script>
