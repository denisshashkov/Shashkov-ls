<template lang="pug">
  .user
    .user__column
      avatar(:image="avatarImage" size="large")
    .user__column
      .user__row.user__name {{ review.author }}
      .user__row.user__occ(v-if="review.occ") {{ review.occ }}
</template>

<script>
  import avatar from './avatar.vue';

  export default {
    props: {
      review: Object,
    },
    components: {
      avatar
    },
    computed: {
      avatarImage () {
        return {
          src: this.review.photo,
          alt: this.review.author
        }
      }
    }
  }
</script>

<style lang="postcss">
  

  .user {
    display: flex;
    align-items: center;
    line-height: 1;

    &__column:not(:last-child) {
      margin-right: 15px;
      @media screen and (min-width: 640px) {
        margin-right: 30px;
      }
    }

    &__row:not(:last-child) {
      margin-bottom: 10px
    }

    &__name {
      font-size: 18px;
      font-weight: 700;
    }

    &__occ {
      color: rgba($text-color, .3);
      font-size: 16px;
      font-weight: 600;
    }
  }
</style>  