// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
import 'vue-select/dist/vue-select.js'

Vue.config.productionTip = false
Vue.component('v-select', vSelect)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  mounted: function () {
    console.log('mounted from main.js')
  },
  created: function () {
    console.log('created from main.js')
  },
  template: '<App/>'
})
