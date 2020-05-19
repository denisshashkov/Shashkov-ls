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
  import user from './user.vue';
  import svgIcon from './svg-icons/svg-icons.vue';

  export default {
    props: {
      review: {
        type: Object
      }
    },
    components: {
      user,
      svgIcon
    }
  }
</script>  

