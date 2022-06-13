const app = Vue.createApp({
  data() {
    return {
      myName: 'Alex',
      age: 40,
      imageUrl: 'https://ru.vuejs.org/images/logo.png'
    }
  },
  methods: {
    getName() {
      return this.myName;
    },
    getAge() {
      return this.age;
    },
    outputName() {
      return 'My name is ' + this.getName();
    } ,
    outputAge() {
      return 'I\'m  ' + this.getAge() + ' years old';
    },
    outputAgePlus5Years() {
      return 'In 5 years I\'ll be ' + (this.getAge() + 5) + ' years old';
    },
    outputFavouriteNumber() {
      return 'Favorite Number: ' + Math.random();
    }
  }
});

app.mount('#assignment');