<script setup>
import {RouterLink, RouterView} from 'vue-router';
</script>

<template>
    <nav>
        <RouterLink to="/groceries/overview">Overview Page</RouterLink>
        <RouterLink to="/groceries/create">Create Page</RouterLink>
    </nav>
    <main>
        <RouterView />
    </main>
</template>
