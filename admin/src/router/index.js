import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello from '@/components/Hello'
import login from '@/pages/login/login2'
import layout from '@/layout'
import register from '@/components/register'
import clients from '@/pages/see_clients/clients'
import needAttention from '@/components/needAttention'
import contacts from '@/components/contacts'
import escalated from '@/components/escalated'

Vue.use(Router)
Vue.use(BootstrapVue)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',name: 'login',component: login
    },
    {
      path: '/register',name: 'register',component: register
    },
    {
      path: '/home',name: 'layout',component: layout,
      children: [
        {
          path: '/listing',
          component: HelloWorld
        },
        {
          path: '/add',
          component: Hello
        },
        {
          path: '/contacts',name: 'contacts',component: contacts
        },
        {
          path: '/clients',name: 'clients',component: clients,
          children: [
            {
              path: '/needAttention',
              component: needAttention
            },
            {
              path: '/escalated',
              component: escalated
            }
          ]
        }
      ]
    }
  ]
})
