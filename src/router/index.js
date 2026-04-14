import {createRouter, createMemoryHistory} from 'vue-router';
import {routes} from '../domains/routes.js';

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
});
