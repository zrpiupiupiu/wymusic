import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import getVant from './plugins';



const app=createApp(App);
getVant(app);

createApp(App).use(router).use(store).mount('#app')
