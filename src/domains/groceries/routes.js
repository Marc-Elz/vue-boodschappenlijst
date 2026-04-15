import Create from './pages/Create.vue';
import Edit from './pages/Edit.vue';
import Overview from './pages/Overview.vue';

export const routes = [
    {path: '/groceries/overview', component: Overview},
    {path: '', component: Overview},
    {path: '/groceries/create', component: Create},
    {path: '/groceries/:id', component: Edit},
];
