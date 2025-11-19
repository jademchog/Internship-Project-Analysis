import { createApp } from 'vue'
import App from './App.vue'
import IEatPlanes from './components/IEatPlanes.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const vuetify = createVuetify({
    components,
    directives,
  })

const app = createApp(App)
app.component('i-eat-planes', IEatPlanes)
app.use(vuetify)
app.mount('#app')
