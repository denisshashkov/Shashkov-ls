<template lang="pug">
  .root-wrapper-container
    .root-container
      template
        header.header-container
          headline()
            user(
              name="Владимир Астаханов"
              :pic="`${require('../images/content/user.jpg')}`"
            )
        section.tabs-container-wrap
          .tabs-container
            tabs
        main.content-container
          .about-container
            router-view
</template>

<script>
import headline from "./components/headline";
import user from "./components/user";
import tabs from "./components/tabs";
export default {
  components: {
    headline,
    user,
    tabs,
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

.header-container {
  background-image: linear-gradient(to top, #3e3e59, #454573);
  width: 100%;
  height: 80px;
  align-items: center;
  display: flex;
}

.content-container {
  background: url("~images/content/admin.png") center center no-repeat / cover;
  flex: 1;
  padding-top: 60px;
  @include phones {
    padding-top: 30px;
  }
}
.page-title {
  margin-bottom: 60px;
  font-size: 21px;
  font-weight: bold;
}

.tabs-container {
  max-width: 1080px;
  margin:0 auto;
  width: 95%;

&-wrap {
height: 77px;
background-color: #ffffff;
width: 100%;
}
}

.content-container {
  background: url("~images/content/admin-back.png")center center/cover;
}

.about-container {
  max-width: 1090px;
  margin: 0 auto;
  width: 95%;
}
</style>
