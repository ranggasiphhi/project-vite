import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import store from '@/state/store'
// import BootstrapVue from 'bootstrap-vue'

import "@/assets/scss/app.scss";

const app = createApp(App);
app.use(store);
app.use(router);
// app.use(BootstrapVue);


app.mount('#app');
