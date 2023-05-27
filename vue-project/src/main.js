import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { useStore } from './store'

const pinia = createPinia();
const app = createApp(App)
app.use(pinia)
app.use(router)
app.provide('store', useStore())
app.mount('#app')

