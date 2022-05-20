import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from '@/router'
import * as ModalDialogs from 'vue-modal-dialogs'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(ModalDialogs)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
