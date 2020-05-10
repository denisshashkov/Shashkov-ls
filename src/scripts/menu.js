import Vue from 'vue'

new Vue({
  el:"#app",
  data: {
    changed:false,
  },
  methods: {
    handleOpen() {
      this.changed=!this.changed
    }
  }
});

