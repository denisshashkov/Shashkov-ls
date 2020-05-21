<template lang="pug">
  <components class="icon" v-bind:is="SvgIcon"></components>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: "user-full",
      validator: (value) =>
        ["arrow-left", "arrow-right", "quote", "user-full"].includes(value),
    },
  },
  components: {
    Quote: () => import("./icon/quote.vue"),
    UserFull: () => import("./icon/user-full.vue"),
    ArrowRight: () => import("./icon/arrow-right.vue"),
    ArrowLeft: () => import("./icon/arrow-left.vue"),
  },
  computed: {
    SvgIcon() {
      return this.icon;
    },
  },
};
</script>

<style lang="postcss" scoped>
.icon {
  width: 100%;
  height: auto;
  fill: currentcolor;
}
</style>
