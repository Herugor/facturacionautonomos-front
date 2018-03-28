import Vue from 'vue'
import 'vuetify/dist/vuetify.min.css'
import Router from 'vue-router'
import toolbar from '@/components/toolbar'
// import Vuetify from 'vuetify'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Toolbar',
      component: toolbar
    }
  ]
})
