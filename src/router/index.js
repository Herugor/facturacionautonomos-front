import Vue from 'vue'
import Router from 'vue-router'
import invoiceList from '@/components/invoiceList'
import invoiceForm from '@/components/invoiceForm'
import invoiceView from '@/components/invoiceView'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'invoiceList',
      component: invoiceList
    },
    {
      path: '/add',
      name: 'invoiceForm',
      component: invoiceForm
    },
    {
      path: '/view',
      name: 'invoiceView',
      component: invoiceView
    }
  ]
})
