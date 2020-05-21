<template lang="pug">
  ul.controls
    li(@click="$emit('previous')").controls__item
      Btn(onlyIcon rounded iconStart="arrow-left" :disabled="hasPrevious") Arrow left
    li(@click="$emit('next')").controls__item
      Btn(onlyIcon rounded iconStart="arrow-right" :disabled="hasNext") Arrow right
</template>

<script>
import Btn from "./button.vue";

export default {
  props: {
    hasPrevious: {
      type: Boolean,
      default: true,
    },
    hasNext: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    Btn,
  },
};
</script>

<style lang="postcss">
.controls {
  display: flex;
  justify-content: center;
  align-items: center;

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__item + &__item {
    margin-left: 1rem;
  }
}
</style>
