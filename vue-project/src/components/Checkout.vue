<template>
    <div>
      <h1>Carrito de compras</h1>
      <div v-for="product in cart" :key="product.id">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p>Precio: {{ product.price }}</p>
        <button @click="removeFromCart(product)">Eliminar del carrito</button>
      </div>
      <p>Total: {{ total }}</p>
      <button @click=" goToList()">Volver</button>
    </div>
  </template>
  

  <script>
  import { defineComponent } from 'vue';
  import { useStore } from '../store';
  import { useRouter } from 'vue-router';
  
  export default defineComponent({
    name: 'Checkout',
    setup() {
      const store = useStore()
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
        cart: store.cart,
        total: store.total,
        removeFromCart(product) {
          this.total -= product.price;
          store.removeFromCart(product)
        },
        goToList
      }
    }
  })
  </script>