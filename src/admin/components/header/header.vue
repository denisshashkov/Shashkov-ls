<template lang="pug">
  header.header
    .header__container
      .header__container-user
        .header__container__user-icon
           img(src="../../../images/content/myAvatar2.jpg").user__pic-avatar
      h3.header__container__user-title Шашков Денис 
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
      default: false
    }
  },
  computed: {
    showContent() {
      const crazyComparison = 10 > 5;
      return this.hideContent === false && crazyComparison;
    }
  }
};
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

.header {
  background-image: linear-gradient(to top, #3e3e59, #454573);
  width: 100%;
  height: 80px;
  align-items: center;
  display: flex;
}

.user__pic-avatar {
  width: 100%;
  height: 100%;
}

.header__container {
  align-items: center;
  display: flex;
  max-width: 1080px;
  margin: 0 auto;
  width: 95%;
}

.header__container__user-icon {
  display: block;
  width: 45px;
  height: 45px;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 15px;
}

.header__container__user-title {
  color: #ffffff;
  font-family: "Open Sans - Semibold";
  font-size: 18px;
  font-weight: 400;
  margin-right: 25px;
}

.desc {
  @include medium {
    display: none;
  }
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
