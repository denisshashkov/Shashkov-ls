<template lang="pug">
.login
      .login__content
        form(@submit.prevent="login").login__form#form
          .login__close
            button(
              @click="close"
              type="button").login__close-btn
          .login__title-box
            h1.login__title Авторизация
          .form-wrap
            .form__row-admin           
               label(for="input__name").form__block
                span.form__block-title Логин
                .form__block-container
                    input(
                       type="text"
                       name="name"
                       placeholder="Terminator_2000"
                       id="input__name"
                       v-model="user.name"
                       v-bind:class="{ 'form__input-name--error': validation.hasError('user.name') }" 
                       ).form__input-name 
                    .form__tooltip(class="showed")
                      .form__tooltip-text(v-bind:class="{'form__tooltip-text--showed': validation.hasError('user.name')}") {{ validation.firstError('user.name') }}                     
 
            .form__row-admin
               label(for="input__password").form__block
                span.form__block-title Пароль
                .form__block-container
                    input(
                       type="Password"
                       name="password"
                       placeholder="*************"
                       id="input__password"
                       v-model="user.password"
                       v-bind:class="{ 'form__input-password--error': validation.hasError('user.password') }"
                    ).form__input-password
                    .form__tooltip(class="showed")
                      .form__tooltip-text(v-bind:class="{'form__tooltip-text--showed': validation.hasError('user.password')}") {{ validation.firstError('user.password') }}
            .form__row-admin
               .form__button
                  button(type="submit").btn-submit отправить 
               
</template>

<script>
import Vue from "vue";
import SimpleVueValidator from "simple-vue-validator";
import { mapActions } from "vuex";

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
    vcTooltip: () => import("../components/tooltip/tooltip.vue")
  },

  methods: {
    ...mapActions("tooltip", ["showTooltip"]),
    login: async function() {
      if (await this.$validate()) {
        try {
          const {
            data: { token }
          } = await this.$axios.post("/login", this.user);

          localStorage.setItem("token", token);

          this.$axios.defaults.headers["Authorization"] = `Bearer ${token}`;

          this.$router.replace("/");
        } catch ({ message }) {
          this.showTooltip({ message, type: "error" });
        }
      }
    },
    close() {
      location.href = localStorage.getItem("landingPage");
    }
  }
};
</script>
<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";
@import "../../styles/blocks/form.pcss";
@import "../../styles/blocks/formTooltip.pcss";
@import "../../styles/admin/login.pcss";
</style>
