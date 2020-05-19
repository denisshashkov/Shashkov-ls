<template lang="pug">
  div(:class="classes")
    img(:src="image.src" :alt="`Изоражение автора отзыва: ${image.alt}`")
</template>

<script>
  export default {
    props: {
      image: Object,
      size: {
        type: String,
        default: 'small',
        validator: value => ['small', 'medium', 'large'].includes(value)
      }
    },
    computed: {
      classes () {
        return `avatar avatar--${this.size}`;
      }
    }
  }
</script>  

<style lang="postcss">
  .avatar {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    background-size: cover;
    background-position: center center;

    img {
      max-width: initial;
      width: 100%;
      Object-fit: cover;
    }
  }

  .avatar--small {
    width: 45px;
    height: 45px;
  }

  .avatar--medium {
    width: 50px;
    height: 50px;
  }

  .avatar--large {
    width: 75px;
    height: 75px;
  }
</style>  