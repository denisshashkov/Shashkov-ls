<template lang="pug">
.login
      .login__content
        form(@submit.prevent="submitAdmin").login__form#login
          .login__close
            button(type="button").login__close-btn
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
                       v-model="name"
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
                       v-model="password"
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
const Validator = SimpleVueValidator.Validator;
Vue.use(SimpleVueValidator);

export default {
  mixins: [SimpleVueValidator.mixin],
  data: () => ({
    name: "",
    password: ""
  }),
  validators: {
    name: function(value) {
      return Validator.value(value)
        .required("Поле обязательно для заполнения")
        .minLength(5, "Должно быть мин. 5 символов");
    },

    password: function(value) {
      return Validator.value(value)
        .required("Поле обязательно для заполнения")
        .minLength(6, "Должно быть мин. 6 символов");
    },
    methods: {
      submitAdmin: function() {
        if (this.$validate()) {
          console.log("Валидация прошла успешно!!!");
        }
      }
    }
  }
};
</script>
<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";
@import "../../styles/blocks/form.pcss";
@import "../../styles/blocks/formTooltip.pcss";

.login {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("../../images/content/maunt.jpg") center center / cover
    no-repeat;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.6;
    background: #364d5e;
  }
}

.login__content {
  position: relative;
  @include phones {
    height: 100%;
    width: 100%;
  }
}

.login__form {
  width: 563px;
  height: 520px;
  padding: 50px 77px 60px;
  background: #fff;
  @include phones {
    width: 100%;
    padding-right: 7%;
    padding-left: 7%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

.login__close {
  position: absolute;
  right: 30px;
  top: 30px;
}

.login__close-btn {
  width: 20px;
  height: 20px;
  background: svg-load("../../images/icons/remove.svg", fill=rgba(black, 0.7))
    center center no-repeat;
  border: none;
  &:hover {
    width: 23px;
    height: 23px;
    transition: 0.3s;
  }
}

.login__title-box {
  text-align: center;
  margin-bottom: 40px;
}

.form__input-name,
.form__input-password {
  background: svg-load(
      "../../images/icons/Avatar.svg",
      fill=#b8bbc3,
      width=29px,
      height=35px
    )
    no-repeat;

  &:hover {
    background: svg-load(
        "../../images/icons/Avatar.svg",
        fill=#5500f2,
        width=26px,
        height=30px
      )
      no-repeat;
  }

  &--error {
    background: svg-load(
        "../../images/icons/Avatar.svg",
        fill=red,
        width=26px,
        height=30px
      )
      no-repeat;
  }
}

.form__input-password {
  background: svg-load(
      "../../images/icons/key.svg",
      fill=#b8bbc3,
      width=29px,
      height=35px
    )
    no-repeat;
  &:hover {
    background: svg-load(
        "../../images/icons/key.svg",
        fill=#5500f2,
        width=26px,
        height=30px
      )
      no-repeat;
  }

  &--error {
    background: svg-load(
        "../../images/icons/key.svg",
        fill=red,
        width=26px,
        height=30px
      )
      no-repeat;
  }
}

.form__input-name:hover {
  border-bottom-color: #5500f2;
  transition: 0.5s;
}

.form__input-password:hover {
  border-bottom-color: #5500f2;
  transition: 0.5s;
}

.form__input-name,
.form__input-password {
  @include iphone {
    width: 260px;
  }
  position: relative;
  padding: 5px 5px 5px 50px;
  width: 410px;
  height: 45px;
  border-bottom: 2px solid #b8bbc3;
  border-top: none;
  border-left: none;
  border-right: none;
  color: #464d62;
  font-family: "Open Sans";
  font-size: 18px;
  font-weight: 700;

  &--error {
    border-bottom: 2px solid red;
    transition: 0.5s;
  }
}

.form__row-admin {
  display: flex;
  justify-content: center;
  margin-bottom: 35px;
  &:last-child {
    margin-bottom: 0;
  }
}

.btn-submit {
  @include small {
    width: 259px;
    height: 60px;
    border-radius: 30px 0;
  }

  width: 347px;
  height: 80px;
  border-radius: 40px 5px;
  color: #ffffff;
  font-family: "Open Sans";
  font-size: 18px;
  font-weight: 600;
  background-image: linear-gradient(to right, #9300e8 0%, #4a00ed 100%);

  &:hover {
    background-image: linear-gradient(to left, #bb00ff 0%, #5900ff 100%);
  }
}
</style>
