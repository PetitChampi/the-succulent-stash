Vue.createApp({
  data() {
    return {
      plants: [
        {
          name: 'adromischus cristatus zeyheri',
          imgUrl: '../assets/imgs/plants/adromischus-cristatus-zeyheri.jpg',
          price: 4.25,
          isOnSale: true
        },
        {
          name: 'adromischus filicaulis',
          imgUrl: '../assets/imgs/plants/adromischus-filicaulis.jpg',
          price: 3.95,
          isOnSale: false
        },
        {
          name: 'adromischus marlothii',
          imgUrl: '../assets/imgs/plants/adromischus-marlothii.jpg',
          price: 3,
          isOnSale: true
        },
        {
          name: 'adromischus triflorus',
          imgUrl: '../assets/imgs/plants/andromischus-triflorus-calico-hearts.jpg',
          price: 4.1,
          isOnSale: false
        },
        {
          name: 'adromischus cristatus',
          imgUrl: '../assets/imgs/plants/andromiscus-cristatus.jpg',
          price: 5.3,
          isOnSale: false
        }
      ],
      showCheaperPlants: false
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
}).mount('#app')