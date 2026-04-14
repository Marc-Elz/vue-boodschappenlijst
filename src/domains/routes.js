import Create from './pages/Create.vue';
import Edit from './pages/Edit.vue';
import Overview from './pages/Overview.vue';

export const routes = [
    {path: '/grocery/', component: Overview},
    {path: '/grocery/create', component: Create},
    {path: '/grocery/edit', component: Edit},
];
