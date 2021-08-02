import { createApp } from 'vue'
import App from './App.vue'
import ActiveElement from './components/ActiveElement.vue';
import KnowledgeBase from './components/KnowledgeBase.vue';
import KnowledgeGrid from './components/KnowledgeGrid.vue';
import KnowledgeElement from './components/KnowledgeElement.vue';
import BaseCardSlot from './components/BaseCardSlot.vue';

const app = createApp(App);
app.component('active-element', ActiveElement);
app.component('knowledge-base', KnowledgeBase);
app.component('knowledge-grid', KnowledgeGrid);
app.component('knowledge-element', KnowledgeElement);
app.component('base-cardslot',BaseCardSlot);

app.mount('#app');
