<template>
  <Header></Header>
  <router-view />
</template>

<script>
import './assets/main.css'
import Home from './view/Home.vue';
import Publicaciones from './view/Publicaciones.vue';
import Perfil from './view/Perfil.vue';
import Nosotros from './view/Nosotros.vue';
import Importante from './view/Importante.vue';
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
    Home,
    Nosotros,
    Importante,
    Publicaciones,
    Perfil
  }
}
</script>

<style>
  #app{
    display:flex;
    flex-direction: column;
  }
  
  button{
    margin: 5px 0;
    padding: .2rem .3rem;
    border: 1px solid var(--color-6);
    border-radius: 8px;
    background-color: var(--color-6);
    color: white;
  }

  button:hover{
    border-radius: 8px;
    background-color: transparent;
    color: white;
  }
</style>
