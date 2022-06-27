import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Logo from '@/components/Logo.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const app = createApp(App);

// app.component("Logo",Logo);

// app.use(router);
// app.mount("#app")
// 可以簡寫成
app.component("Logo",Logo).use(router).mount('#app')
// createApp(App).use(router).mount('#app')