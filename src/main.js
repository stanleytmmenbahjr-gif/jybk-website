import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import router from './router'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

createApp(App).use(router).mount('#app')
