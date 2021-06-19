// import { createApp } from 'vue';
// import App from '@/views/layouts/app';
//
// createApp(App).mount('#app');
import { createApp } from 'vue';
import App from '@/views/layouts/app';
import BalmUI from 'balm-ui'; // Official Google Material Components
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus'; // BalmJS Team Material Components
import UiButton from 'balm-ui/components/button';
import $alert from 'balm-ui/plugins/alert';

const app = createApp(App);

app.use(BalmUI); // Mandatory
app.use(BalmUIPlus); // Optional
app.use(UiButton);
app.use($alert);

app.mount('#app');
