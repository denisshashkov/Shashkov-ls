<template lang="pug">
section.tabs-container-wrap
  .tabs-container           
   .tabs-component
      ul.tabs  
        li.tab(
          v-for="tab in tabs" 
          :key="tab.id"
          :class="{'active' : tab.id === activeTabId}"
        )
          button(
            type="button"
            @click="changeTab(tab)"
            :class="{'active' : tab.id === activeTabId}"
          ).btn {{tab.title}}

</template>
<script>
const tabs = [
  { id: 0, title: "Обо мне", link: "/about" },
  { id: 1, title: "Работы", link: "/works" },
  { id: 2, title: "Отзывы", link: "/reviews" },
];
export default {
  data() {
    return {
      tabs,
      activeTabId: 0,
    };
  },
  methods: {
    changeTab(tab) {
      this.activeTabId = tab.id;
      this.$emit("change", tab);
    },
  },
};
</script>

<style lang="postcss" scoped>
.tabs {
  display: flex;
  height: 77px;
}
.active {
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: #383bcf;
    width: 125px;
    height: 3px;
  }
}
.tab {
  display: flex;
  position: relative;
  justify-content: center;
  width: 125px;
}

.tabs-container {
  max-width: 1080px;
  margin: 0 auto;
  width: 95%;
  &-wrap {
    height: 77px;
    background-color: #ffffff;
    width: 100%;
  }
}

.btn {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  border: none;
  color: #414c63;
  font-family: "Open Sans";
  font-weight: 400;
  &.active {
    color: #383bcf;
    font-weight: 600;
    transition: 0.3s;
  }
}
</style>
