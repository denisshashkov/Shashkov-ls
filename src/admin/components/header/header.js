import {
  mapActions
} from "vuex";

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
  },
  methods: {
    ...mapActions("user", ["logoutUser"]),
    async logout() {
      await this.logoutUser();
      await this.$router.replace("/login");
    }
  }
};