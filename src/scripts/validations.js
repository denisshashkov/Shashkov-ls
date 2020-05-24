import Vue from "vue";
import SimpleVueValidator from 'simple-vue-validator';
const Validator = SimpleVueValidator.Validator;
Vue.use(SimpleVueValidator);


export default {
  mixins: [SimpleVueValidator.mixin],
}

new Vue({
  el: "#form",
  components: {},
  data: () => ({
    username: '',
    email: '',
    comments: ''
  }),
  validators: {
    username: function (value) {
      return Validator.value(value).required('Поле обязательно для заполнения').minLength(5, 'Должно быть мин. 5 символов')
    },

    email: function (value) {
      return Validator.value(value).required('Поле обязательно для заполнения').minLength(6, 'Должно быть мин. 6 символов')
    },

    comments: function (value) {
      return Validator.value(value).required('Поле обязательно для заполнения').minLength(8, 'Должно быть мин. 8 символов')
    },
  },
  methods: {
    submit: function () {
      this.$validate()
        .then(function (success) {
          if (success) {
            alert("Validation succeeded!");
          }
        });
    },
  }
})