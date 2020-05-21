<template lang="pug">
  .quote
    .quote__icon
      svg-icon(icon="quote")
    .quote__inner
      .quote__text
        p {{ review.text }}
      .quote__user
        user(:review="review")
</template>

<script>
import user from "./user.vue";
import svgIcon from "./svg-icons/svg-icons.vue";

export default {
  props: {
    review: {
      type: Object,
    },
  },
  components: {
    user,
    svgIcon,
  },
};
</script>

<style lang="postcss">
@import "../../../styles/mixins.pcss";

.quote {
  height: 100%;
  position: relative;
  display: flex;

  &__icon {
    width: 100%;
    margin-right: 1rem;
    max-width: 80px;
    color: rgba($text-color, 0.05);

    @include tablets {
      max-width: 30px;
    }
  }

  @include phones {
    padding-left: 0;
  }

  &__text {
    margin-bottom: 30px;
    color: rgba($text-color, 0.5);
    font-weight: 600;
    line-height: 30px;

    @include tablets {
      font-size: 16px;
      line-height: 24px;
      padding: 0px 70px;
    }

    @include iphone {
      padding: 0px 40px;
    }
  }
}
</style>
