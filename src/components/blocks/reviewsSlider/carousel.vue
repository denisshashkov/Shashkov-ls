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
import { Carousel, Slide } from "vue-carousel";
import Quote from "./quote.vue";

export default {
  components: {
    Carousel,
    Slide,
    Quote,
  },
  props: {
    reviews: {
      type: Array,
      default: [],
    },
  },
  data: () => ({
    slidesPerPage: 2,
  }),
  watch: {
    slidesPerPage() {
      this.$eventBus.$emit("pages", this.pages);
    },
    reviews() {
      this.$eventBus.$emit("pages", this.pages);
      this.calcSlidesPerPage(this);
    },
  },
  computed: {
    pages() {
      return Math.ceil((this.reviews.length - 1) / this.slidesPerPage);
    },
  },
  methods: {
    pageChange(number) {
      this.$eventBus.$emit("activePage", number);
    },
    calcSlidesPerPage() {
      this.slidesPerPage = window.innerWidth <= 768 ? 1 : 2;
    },
  },
  mounted() {
    window.addEventListener("resize", this.calcSlidesPerPage);
  },
};
</script>

<style lang="postcss">
@import "../../../styles/mixins.pcss";

.reviews-carousel__list {
  display: flex;
  will-change: transform;
  transition: transform 0.3s;
  max-width: 1000px;
  height: 100%;
  margin-left: 2.5%;

  @include phones {
    &:before {
      content: "";
      width: 30px;
      height: 26px;
      display: block;
      position: absolute;
      top: 0;
      left: -40px;
      background: svg-load("quote.svg", fill=rgba($text-color, 0.05)) center
        center / contain no-repeat;
    }
  }
}

.reviews-carousel__item {
  flex-shrink: 0;
  padding-right: 40px;
  width: 50%;

  &:last-child {
    margin-right: 0;
  }

  @include tablets {
    padding-right: 20px;
  }

  @include phones {
    padding-right: 0;
  }
}

.VueCarousel-navigation {
  display: none;
}
</style>
