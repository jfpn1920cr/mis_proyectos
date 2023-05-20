<template>
    <div class="content-button">
      <h1>Lista de productos</h1>
    <button class="pago" @click="goToCheckout()">Ir a pagar</button>
  </div>
  <div class="content-cards">
    <div class="card" v-for="product in products" :key="product.id">
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
      <div class="content-button-card">
        <button @click="goToDetails(product)">Leer más</button>
        <button @click="addToCart(product)">Agregar al carrito</button>
      </div>
    </div>
  </div>
</template>
  
<style>
.content-cards {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  gap: 3px;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  background-color: rgb(23, 47, 68);
  border: 1px solid white;
  border-radius: 12px;
  width: 150px;
  height: 200px;
}

.content-button {
  display: flex;
  justify-content: center;
  align-items: center;
}

.pago{
  height: 30px;
  margin-left: 10px;
}

</style>

<script>

import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from '../store'

export default defineComponent({
  name: 'ProductsList',
  setup() {
    const store = useStore();
    const router = useRouter();

    const goToDetails = (product) => {
      store.product = [];
      store.product.push(product);
      router.push({
        path: '/products',
        query: {
          product: JSON.stringify(store.product)
        }
      })
    }

    const goToCheckout = () => {
      router.push({
        path: '/checkout',
        query: {
          cart: JSON.stringify(store.cart)
        }
      })
    }
    return {
      products: store.products,
      addToCart(product) {
        store.addToCart(product);
      },
      goToCheckout,
      goToDetails
    }
  }
})
</script>
  