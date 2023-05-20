<template>
    <div>
        <h1>{{ product.name }}</h1>
        <p>{{ product.description }}</p>
        <p>Precio: {{ product.price }}</p>
        <button @click="addToCart(product)">Agregar al carrito</button>
        <button @click=" goToList()">Volver</button>
    </div>
  </template>

  <script>
  import { defineComponent } from 'vue'
  import { useStore } from '../store'
  import { useRouter } from 'vue-router'

  export default defineComponent({
    name: 'ProductDetail',
    setup() {
      const store = useStore();
      const product = store.product[0];
      const router = useRouter();

      const goToList = ()=> {
      router.push({
        path: '/',
        query: {
          cart: JSON.stringify(store.cart)
        }
      })
    }

      return {
        product,
        addToCart(product) {
          store.addToCart(product)
        },
        goToList
      }
    }
  })
  </script>