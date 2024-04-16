/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import Landing from './components/Landing.vue'
import Theme from './components/Theme.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Landing }, 
    { path: '/theme/:id', component: Theme },
  ] 
})

// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)
app.use(router)
app.mount('#app')
