import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome,faSearch,faSortAmountUpAlt,faUserCircle,faAngleRight,faSignOutAlt,faTimes,faBars} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import "./vee-validate";

library.add(faHome,faSearch,faSortAmountUpAlt,faUserCircle  ,faAngleRight,faSignOutAlt,faTimes,faBars)



Vue.component('font-awesome-icon', FontAwesomeIcon)

import './assets/tailwind.css'
require('./API/interceptor')

Vue.config.productionTip = false

store.dispatch('getCurrentUser').then(() => {
  
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app');
});
