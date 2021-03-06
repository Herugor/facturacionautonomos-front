import Vue from 'vue'
import Router from 'vue-router'
import invoiceList from '@/components/invoiceList'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TablaFacturas',
      component: invoiceList
    }
  ]
})
