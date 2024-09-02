import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';

const app = createApp(App);

//Pinia
const pinia = createPinia();

app.use(router);

//Usar pinia
app.use(pinia);

app.mount('#app');
