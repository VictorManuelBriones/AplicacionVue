import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue, IconsPluging } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueRouter from 'vue-router'

import List from './components/List'
import Detail from './components/Detail'


Vue.use(VueRouter)

Vue.use(BootstrapVue)
Vue.use(IconsPluging)

Vue.config.productionTip = false
 const routes =[
   {path:'/', component:List},
   {path:'/detail/:id', component:Detail}
 ]

 const router = new VueRouter({
   mode: "history",
   routes
 })
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
