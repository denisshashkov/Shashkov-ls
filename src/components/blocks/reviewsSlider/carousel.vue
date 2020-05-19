<template lang="pug">
  carousel(
    :perPageCustom="[[0, 1], [769, 2]]"
    :navigationEnabled="true"
    :paginationEnabled="false"
    @pageChange="pageChange"
  ).reviews-carousel__list
    slide(v-for="review in reviews" :key="review.id").reviews-carousel__item
    quote(:review="review")
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel';
  import Quote from './quote.vue';

  export default {
    components: {
      Carousel,
      Slide,
      Quote
    },
    props: {
      reviews: {
        type: Array,
        default: []
      }
    },
    data: () => ({
      slidesPerPage: 2
    }),
    watch: {
      slidesPerPage() {
        this.$eventBus.$emit('pages', this.pages);
      },
      reviews() {
        this.$eventBus.$emit('pages', this.pages);
        this.calcSlidesPerPage(this);
      }
    },
    computed: {
      pages() {
        return Math.ceil((this.reviews.length - 1) / this.slidesPerPage);
      },
    },
    methods: {
      pageChange(number) {
        this.$eventBus.$emit('activePage', number);
      },
      calcSlidesPerPage() {
        this.slidesPerPage = (window.innerWidth <= 768) ? 1 : 2;
      }
    },
    mounted() {
      window.addEventListener('resize', this.calcSlidesPerPage);
    }
  };
</script>  


  