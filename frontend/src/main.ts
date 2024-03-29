import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from '~/router';

// Import Quasar
import { Quasar } from 'quasar';
import quasarIconSet from 'quasar/icon-set/fontawesome-v6';

// Import icon libraries
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css';

// Import Quasar css
import 'quasar/src/css/index.sass';

const app = createApp(App);
const pinia = createPinia();

app.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
    iconSet: quasarIconSet,
    config: {
        brand: {
            primary: '#00e3d9',
        },
    },
});
app.use(pinia);
app.use(router);

app.mount('#app');
