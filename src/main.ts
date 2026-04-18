import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { vAnimate } from './directives/vAnimate';

import './styles/index.css';

const app = createApp(App);

app.directive('animate', vAnimate);

app.use(router);

app.mount('#app');
