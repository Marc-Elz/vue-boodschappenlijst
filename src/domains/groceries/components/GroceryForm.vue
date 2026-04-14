<template>
    <form>
        <ul>
            <li>
                Name:
                <input v-model="groceryCopy.grocery.name" placeholder="placeholder" />
            </li>
            <li>
                Price:
                <input type="number" , step="0.01" min="0" />
            </li>
            <li>
                Amount:
                <input type="number" v-model.number="groceryCopy.quantity" min="0" />
            </li>
            <button @click="$emit(submitEvent)">submit</button>
        </ul>
    </form>
    Watchers:
    <br />
    Copy:
    {{ groceryCopy }}
    <br />
    Props:
    {{ props }}
</template>

<script setup>
import {ref, toRaw} from 'vue';
// props
const props = defineProps({
    grocery: {
        type: Object,
    },
});

// Grocery
console.log('form for grocery:');
console.log(props);
// maak een copy (shallow copy voldoende?)

//const groceryCopy = ref(Object.assign({}, props));
const groceryCopy = ref(structuredClone(toRaw(props)));

// PlaceholderValue should be dynamic, either it is an edited item or a new item.
// Maar denk moet me eerst focussen op he adden van gegevens

defineEmits(['submit']);

// defineProps + defineEmits / defineModel

const submitEvent = () => {
    emit('submit', groceryCopy);
};
</script>
