<template lang="pug">
  .user-component
    .avatar
      img(:src="pic")
    .name {{name}}
</template>

<script>
export default {
  props: ["name", "pic"],
};
</script>

<style lang="pcss" scoped>
.user-component {
  display: flex;
  align-items: center;
  margin-right: 25px;
}
.avatar {
  border-radius: 50%;
  overflow: hidden;
  width: 50px;
  height: 50px;
  margin-right: 15px;
}
.name {
  font-size: 18px;
  color: #fff;
}
</style>
