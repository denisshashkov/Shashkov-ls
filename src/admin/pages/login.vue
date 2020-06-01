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
          form.form-wrap
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
                       v-bind:class="{ 'form__input-name--error': validation.hasError('name') }" 
                       ).form__input-name 
                    .form__tooltip(class="showed")
                      .form__tooltip-text(v-bind:class="{'form__tooltip-text--showed': validation.hasError('name')}") {{ validation.firstError('name') }}                     
 
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
                       v-bind:class="{ 'form__input-password--error': validation.hasError('password') }"
                    ).form__input-password
                    .form__tooltip(class="showed")
                      .form__tooltip-text(v-bind:class="{'form__tooltip-text--showed': validation.hasError('password')}") {{ validation.firstError('password') }}
            .form__row-admin
               .form__button
                  button(type="submit").btn-submit отправить 
               
</template>

<script>
import Vue from "vue";
import SimpleVueValidator from "simple-vue-validator";
import axios from "axios";
const baseUrl = "https://webdev-api.loftschool.com/";

const Validator = SimpleVueValidator.Validator;
Vue.use(SimpleVueValidator);
export default {
  mixins: [SimpleVueValidator.mixin],

  validators: {
    name: function(value) {
      return Validator.value(value)
        .required("Поле обязательно для заполнения")
        .minLength(4, "Должно быть мин. 4 символов");
    },
    password: function(value) {
      return Validator.value(value)
        .required("Поле обязательно для заполнения")
        .minLength(4, "Должно быть мин. 4 символов");
    }
  },

  data: () => ({
    user: {
      name: "",
      password: ""
    }
  }),

  methods: {
    login() {
      console.log(this.user);
    },
    close() {
      location.href = localStorage.getItem("homePage");
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