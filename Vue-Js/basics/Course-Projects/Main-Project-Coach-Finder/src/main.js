import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import AppCard from './components/UI/AppCard.vue';
import AppSmallCard from './components/UI/AppSmallCard.vue';
import AppButton from './components/UI/AppButton.vue';
import AppIconButton from './components/UI/AppIconButton.vue';
import store from './store/index.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faPhone,faTwitter, faFacebook, faStackOverflow, faGithub } from "@fortawesome/free-solid-svg-icons";
// import { faTwitter, faFacebook, faStackOverflow, faGithub } from '@fortawesome/free-brands-svg-icons'
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// library.add(faPhone,faTwitter, faFacebook, faStackOverflow, faGithub);
library.add(faUserSecret,faTrashAlt)

const app = createApp(App)
app.component('app-card', AppCard);
app.component('app-small-card', AppSmallCard);
app.component('app-button', AppButton);
app.component('icon-button', AppIconButton);
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);
app.use(store);

app.mount('#app');
