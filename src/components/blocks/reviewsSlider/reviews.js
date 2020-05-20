import Vue from 'vue';
import axios from 'axios';
import ReviewsCarousel from './carousel.vue'
import Controls from './controls.vue'

Vue.prototype.$eventBus = new Vue();

new Vue({
  el: '#reviews',
  data: {
    reviews: [],
    activePage: 0,
    pages: 0
  },
  components: {
    ReviewsCarousel,
    Controls
  },
  methods: {
    previous() {
      document.querySelector('.VueCarousel-navigation-prev').click();
    },
    next() {
      document.querySelector('.VueCarousel-navigation-next').click();
    }
  },
  created() {
    axios.get('https://webdev-api.loftschool.com/reviews/174')
      .then(reviews => {
        return reviews.data.map(review => {
          return (review.photo = 'https://webdev-api.loftschool.com/' + review.photo) && review
        });
      })
      .then(reviews => this.reviews = reviews);
  },
  mounted() {
    this.$eventBus.$on('activePage', number => {
      this.activePage = number;
    });
    this.$eventBus.$on('pages', number => {
      this.pages = number;
    });
  }
})