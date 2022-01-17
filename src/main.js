import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome,faSearch,faSortAmountUpAlt,faUserCircle,faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHome,faSearch,faSortAmountUpAlt,faUserCircle  ,faAngleRight)



Vue.component('font-awesome-icon', FontAwesomeIcon)

import './assets/tailwind.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
