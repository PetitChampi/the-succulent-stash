<template>
  <div class="succ-container succ-section">
    <h1 class="succ-heading">Product grid</h1>
    <div class="succ-section">
      <ProductGrid
        :plants="plants"
      />
    </div>
  </div>
</template>

<script>
import ProductGrid from './components/ProductGrid.vue'

export default {
  name: 'App',
  components: {
    ProductGrid
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      plants: [
        {
          name: 'adromischus cristatus zeyheri',
          imgUrl: 'imgs/plants/adromischus-cristatus-zeyheri.jpg',
          price: 4.25,
          isOnSale: true
        },
        {
          name: 'adromischus filicaulis',
          imgUrl: 'imgs/plants/adromischus-filicaulis.jpg',
          price: 3.95,
          isOnSale: false
        },
        {
          name: 'adromischus marlothii',
          imgUrl: 'imgs/plants/adromischus-marlothii.jpg',
          price: 3,
          isOnSale: true
        },
        {
          name: 'adromischus triflorus',
          imgUrl: 'imgs/plants/andromischus-triflorus-calico-hearts.jpg',
          price: 4.1,
          isOnSale: false
        },
        {
          name: 'adromischus cristatus',
          imgUrl: 'imgs/plants/andromiscus-cristatus.jpg',
          price: 5.3,
          isOnSale: false
        }
      ],
      showCheaperPlants: true
    }
  },
  methods: {
    toggleCheaperPlants() {
      this.showCheaperPlants = !this.showCheaperPlants
    }
  },
  computed: {
    plantsUnder4Euro() {
      return this.plants.filter(plant => plant.price < 4)
    }
  }
}
</script>

<style>
  @import url("../../assets/styles/css/index.css");
</style>
