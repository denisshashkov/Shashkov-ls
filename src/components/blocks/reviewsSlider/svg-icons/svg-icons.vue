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
        ["arrow-left", "arrow-right", "user-full"].includes(value),
    },
  },
  components: {
    Quote: () => import("./icons/quote.vue"),
    UserFull: () => import("./icons/user-full.vue"),
    ArrowRight: () => import("./icons/arrow-right.vue"),
    ArrowLeft: () => import("./icons/arrow-left.vue"),
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
