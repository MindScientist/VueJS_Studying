const app = Vue.createApp({
  data() {
    return {
      myName: 'Alex',
      myAge: 40,
      imageUrl: 'https://ru.vuejs.org/images/logo.png'
    }
  },
  methods: {
    getName() {
      return this.myName;
    },
    getAge() {
      return this.myAge;
    },
    outputAgePlus5Years() {
      return this.getAge() + 5;
    },
    outputFavouriteNumber() {
      return 'Favorite Number: ' + Math.random();
    }
  }
});

app.mount('#assignment');