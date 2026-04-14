<script setup>
import {RouterLink, RouterView} from 'vue-router';
</script>

<template>
    <RouterLink to="/groceries/overview">Overview Page</RouterLink>
    <RouterLink to="/groceries/edit">Edit Page</RouterLink>
    <RouterView />
</template>
