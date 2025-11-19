import { createApp } from 'vue'
import App from './App.vue'
import IEatPlanes from './components/IEatPlanes.vue'

app = createApp(App)
app.mount('#app')
app.component('i-eat-planes', IEatPlanes)
