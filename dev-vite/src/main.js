import { createApp } from 'vue';
import App from './App.vue';
import './index.css';

import { BIconBookmarkCheck, BIconChatDotsFill, BIconCircleHalf } from 'bootstrap-icons-vue';

const app = createApp(App);

app.component('BIconBookmarkCheck', BIconBookmarkCheck);
app.component('BIconChatDotsFill', BIconChatDotsFill);
app.component('BIconCircleHalf', BIconCircleHalf);

app.mount('#app');
