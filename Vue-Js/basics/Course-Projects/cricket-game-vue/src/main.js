import { createApp } from 'vue'
import App from './App.vue'
import ScoreCard from './components/ScoreCard.vue'
import GameButtons from './components/GameButtons.vue'
import InstantVisuals from './components/InstantVisuals.vue'
import BowlingLoader from './components/BowlingLoader.vue'

const app = createApp(App)

app.component('score-card',ScoreCard);
app.component('game-buttons',GameButtons);
app.component('instant-visuals',InstantVisuals);
app.component('bowling-loader', BowlingLoader);

app.mount('#app')
