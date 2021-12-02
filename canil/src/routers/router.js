import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import login from '../components/Login.vue'
import main from '../components/Main.vue'
import animais from '../components/Animais'
import funcionarios from '../components/Funcionarios'
import donos from '../components/Donos'
import estoqueprodutos from '../components/EstoqueProdutos.vue'



const routes = [
  { path: '/login', name: 'Login', component: login },
  { path: '/main', name: 'Main', component: main },
  { path: '/animais', name: 'Animais', component: animais},
  { path: '/funcionarios', name: 'Funcionarios', component: funcionarios},
  { path: '/donos', name: 'Donos', component: donos},
  { path: '/estoqueprodutos', name: 'EstoqueProdutos', component: estoqueprodutos},



]

const router = new VueRouter({
  mode: 'history',
  base: '',
  routes
})
export default router