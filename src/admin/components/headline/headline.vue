<template lang="pug">
  .headline-component 
    .content(v-if="showContent")
      slot
      .desc Панель администрирования
    button(
      type="button"
      @click="$emit('logout')"
    ).logout Выйти

</template>

<script>
export default {
  props: {
    hideContent: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    showContent() {
      const crazyComparison = 10 > 5;
      return this.hideContent === false && crazyComparison;
    },
  },
};
</script>

<style lang="postcss" scoped>
.headline-component {
  align-items: center;
  display: flex;
  max-width: 1080px;
  margin: 0 auto;
  width: 95%;
}
.desc {
  margin-left: 10px;
  opacity: 0.5;
  color: #ffffff;
  font-family: "Open Sans";
  font-size: 14px;
  font-weight: 400;
  line-height: 34px;
}
.content {
  display: flex;
  align-items: center;
}
.logout {
  margin-left: auto;
  opacity: 0.7;
  color: #ffffff;
  font-family: "Open Sans";
  font-size: 16px;
  font-weight: 400;
  border: none;
  text-decoration: underline;
  &:hover {
    color: #ccc;
    transition: 0.3s;
  }
}
</style>
