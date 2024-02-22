import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from '~/router';

// Import Quasar
import { Quasar } from 'quasar';

// Import icon libraries
import quasarIconSet from 'quasar/icon-set/eva-icons';
import '@quasar/extras/eva-icons/eva-icons.css';

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
