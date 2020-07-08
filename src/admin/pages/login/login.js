import Vue from "vue";
import SimpleVueValidator from "simple-vue-validator";
import {
  mapActions
} from "vuex";

const Validator = SimpleVueValidator.Validator;
Vue.use(SimpleVueValidator);
export default {
  mixins: [SimpleVueValidator.mixin],

  validators: {
    "user.name"(value) {
      return Validator.value(value)
        .required("Поле обязательно для заполнения")
        .minLength(4, "Должно быть мин. 4 символов");
    },
    "user.password"(value) {
      return Validator.value(value)
        .required("Поле обязательно для заполнения")
        .minLength(4, "Должно быть мин. 4 символов");
    }
  },

  data() {
    return {
      user: {
        name: "shashkov",
        password: "nastia6886"
      }
    };
  },
  components: {
    vcTooltip: () => import("../../components/tooltip/tooltip.vue")
  },

  methods: {
    ...mapActions("tooltip", ["showTooltip"]),
    login: async function () {
      if (await this.$validate()) {
        try {
          const {
            data: {
              token
            }
          } = await this.$axios.post("/login", this.user);

          localStorage.setItem("token", token);

          this.$axios.defaults.headers["Authorization"] = `Bearer ${token}`;

          this.$router.replace("/");
        } catch ({
          message
        }) {
          this.showTooltip({
            message: "Нет такого пользователя",
            type: "error"
          });
        }
      }
    },
    close() {
      location.href = localStorage.getItem("landingPage");
    }
  }
};