import './assets/tailwind.css'
import { createApp } from 'vue'
import App from './App.vue'
import store from './store' // Este é o import correto para o Vuex

const app = createApp(App)

app.use(store) // Registra o Vuex na instância do Vue
app.mount('#app')