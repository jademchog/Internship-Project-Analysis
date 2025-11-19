import { createApp } from 'vue'
import App from './App.vue'
import IEatPlanes from './components/IEatPlanes.vue'

app = createApp(App)
app.component('i-eat-planes', IEatPlanes)
app.mount('#app')

