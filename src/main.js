import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


//CSS de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

//JS de Bootstrap
import 'bootstrap'

//CSS de Fontawesome
import '@fortawesome/fontawesome-free/css/all.min.css'

import './assets/css/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')


