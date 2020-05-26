<template lang="pug">
  .root-wrapper-container
    .root-container
      template
          vc-header        
          vc-tabs
          main.content
            .page-container
              router-view
</template>

<script>
import header from "./components/header";
import tabs from "./components/tabs";
export default {
  components: {
    vcHeader: header,
    vcTabs: tabs,
  },
};
</script>

<style lang="pcss">
@import "./default.pcss";
button {
  border-color: rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186);
  border-style: solid;
  border-width: 1px;
  background-color: buttonface;
}
.root-wrapper-container {
  height: 100%;
}
.root-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.admin-wrapper {
  display: flex;
  .maincontent {
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
}

.content {
  background: url("~images/content/admin-back.png") center center/ cover;
  flex: 1;
  padding-top: 60px;
  @include phones {
    padding-top: 30px;
  }
}

.page-container {
  max-width: 1090px;
  margin: 0 auto;
  width: 95%;
}
</style>
