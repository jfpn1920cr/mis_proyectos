import { createRouter, createWebHistory } from 'vue-router';
import Home from './view/Home.vue';
import Publicaciones from './view/Publicaciones.vue';
import Perfil from './view/Perfil.vue';
import Nosotros from './view/Nosotros.vue';
import UserIndivual from './view/UserIndivual.vue';
import Importante from './view/Importante.vue';
import Registrar from './view/Registrar.vue';
import Suscripcion from './view/Suscripcion.vue';
import Publicar from './view/Publicar.vue';
import Login from './view/Login.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/publicaciones', component: Publicaciones },
  { path: '/perfil', component: Perfil },
  { path: '/login', component: Login },
  { path: '/nosotros', component: Nosotros },
  { path: '/importante', component: Importante },
  { path: '/registrar', component: Registrar },
  { path: '/publicar', component: Publicar },
  { path: '/suscripcion', component: Suscripcion },
  { path: '/perfil/user', component: UserIndivual }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
