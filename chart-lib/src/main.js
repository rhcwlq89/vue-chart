import { createApp } from 'vue'
import App from './App.vue'
import ChartPlugin from './plugins/ChartPlug.js';

const app = createApp(App);
app.use(ChartPlugin);
app.mount('#app')
