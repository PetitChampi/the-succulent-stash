<template>
  <ul class="succ-product-grid">
    <li :class="{ sale: plant.isOnSale }" class="succ-card" v-for="plant in plants">
      <img :src="plant.imgUrl" :alt="plant.name" class="succ-card--thumbnail">
      <h3 class="succ-card--heading">{{ plant.name }}</h3>
      <span>{{ plant.price.toFixed(2) }} €</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['plants']
}
</script>