import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import Home from "@/pages/Home.vue";
import OreGeneration from "@/pages/OreGeneration.vue";
import Ingots from "@/pages/Ingots.vue";
import AlloySmelter from "@/pages/AlloySmelter.vue";
import SmithingTemplate from "@/pages/SmithingTemplate.vue";
import WeaponsAndTools from "@/pages/WeaponsAndTools.vue";
import Armors from "@/pages/Armors.vue";

const routes = [
    { path: '/Home', component: Home },
    { path: '/OreGeneration', component: OreGeneration },
    { path: '/Ingots', component: Ingots },
    { path: '/AlloySmelter', component: AlloySmelter },
    { path: '/SmithingTemplate', component: SmithingTemplate },
    { path: '/WeaponsAndTools', component: WeaponsAndTools },
    { path: '/Armors', component: Armors },
    { path: '/:pathMatch(.*)*', redirect: '/Home' },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App);
app.use(router);
app.mount('#app');
