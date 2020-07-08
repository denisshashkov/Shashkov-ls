<template lang="pug" src="./works-item.pug"></template>
<script src="./works-item.js"></script>
<style lang="postcss" scoped>
.btn {
  &--edit {
    background-image: svg-load(
      "../../../images/icons/pencil.svg",
      fill=blue,
      height=17px
    );
    background-position: center right;
    padding-right: 30px;
  }
  &--cross {
    background-image: svg-load(
      "../../../images/icons/cross.svg",
      fill=#bf2929,
      height=17px
    );
    background-position: center right;
    padding-right: 30px;
  }
}
</style>