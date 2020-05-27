<template lang="pug">
section.reviews
          .reviews__title
            .title
              h2.title Блок «Отзывы»
          form.form-edit.form-edit--reviews
            .form-edit__title-box
              h3.form-edit__title Новый отзыв
            .form-edit__wrapper
              .form-edit__left
                .avatar__block-form
                  .avatar__image-form

                .avatar-load
                  .avatar-load__image
                  button(type="button").button.avatar-load__button Добавить фото
                
                 
              .form-edit__right
                form.form-review
                  .form__wrapper
                   .form__row-review
                    label.form__block-review
                       span.form__block-title-review Имя автора
                       .form__block-container
                         input(
                         type="text"
                         name="username"
                         placeholder="Ковальчук Дмитрий"
                         id="username"
                           ).form__input-review
       
                    label(for="input__email").form__block-review
                      span.form__block-title-review Титул автора 
                      .form__block-container
                        input(
                          type="email"
                          name="email"
                          placeholder="Основатель Loftschool"
                          id="email"
                          ).form__input-review 

                .form__row-review
                  label(for="input__comments").form__block-area 
                    span.form__block-title-review Отзыв
                    .form__block-container
                      textarea(
                        name="comments"
                        placeholder="Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!"
                        type="textarea"
                        id="comments"
                        ).form__input-textarea-review

                .form__row-review.form__row--btns
                      label(data-text="").form__elem
                        .form__elem-container
                          button(type="button").button.button--cancel Отмена
                          button(type="submit").button.button--save Сохранить         
               
          -
            var reviewList =
              [
                {
                  "id": 1,
                  "name": "Владимир Сабанцев",
                  "titul": "Преподаватель",
                  "photo": "vladimir3.png",
                  "text": "Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах"
                },
                {
                  "id": 2,
                  "name": "Ковальчук Дмитрий",
                  "titul": "Основатель LoftSchool",
                  "photo": "dima2.png",
                  "text": "Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!"
                },
                {
                  "id": 3,
                  "name": "Владимир Сабанцев",
                  "titul": "Преподаватель",
                  "photo": "vladimir3.png",
                  "text": "Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах"
                },
                {
                  "id": 4,
                  "name": "Ковальчук Дмитрий",
                  "titul": "Основатель LoftSchool",
                  "photo": "dima2.png",
                  "text": "Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!"
                }
              ];
              
          .reviews__listwrapper
            ul.reviews__list
              li.reviews__item.reviews__item--add
                .btn-container
                  .btn-container__add
                    .btn-container__add-button +
                    .btn-container__add-title Добавить отзыв
              each review in reviewList            
                li.reviews__item
                  .reviews__autor
                    .reviews__autor-left
                      .avatar
                        .avatar__block
                          img(src=`../../images/content/${review.photo}` alt="Аватар").avatar__image
                    .reviews__autor-right
                      .reviews__name #{review.name}
                      .reviews__titul #{review.titul}                  
                  .reviews__description 
                    .reviews__text #{review.text}
                    .btns-wrap
                      .btns(data-text="Править")
                        button(type="button").button.button--edit                         
                      .btns(data-text="Удалить")
                        button(type="button").button.button--discard 
</template>

<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";
@import "../../styles/blocks/form.pcss";
.reviews__title {
  margin-bottom: 62px;
}

.avatar__block-form {
  width: 200px;
  height: 200px;
  background-color: #dee4ed;
  border-radius: 50%;
  position: relative;
  margin-bottom: 20px;
}

.avatar__block {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: relative;
  margin-bottom: 20px;
  overflow: hidden;
}

.avatar__image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.avatar__image-form {
  width: 85px;
  height: 113px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  background: svg-load(
      "../../images/icons/user.svg",
      fill=#fff,
      width=85px,
      height=113px
    )
    center center no-repeat;
}

.avatar-load__button {
  border: none;
  color: #383bcf;
  font-family: "Open Sans - Semibold";
  font-size: 16px;
  font-weight: 600;
}

.reviews-edit {
  background-color: #fff;
  width: 100%;
  box-shadow: 0 0 8px 0px;
}

.reviews__list {
  margin-right: -35px;
  display: flex;
  flex-wrap: wrap;
}

.reviews__item {
  @include iphone {
    margin-right: 0;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 340px;
  background-color: #fff;
  box-shadow: 0 0 8px 0px;
  margin-right: 30px;
  margin-bottom: 30px;
  padding: 20px;

  &:last-child {
    margin-right: 0;
  }

  &.reviews__item--add {
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
    padding: 77px 95px;
    &:hover {
      background-image: linear-gradient(to left, #006aed 0%, #3f35cb 100%);
      cursor: pointer;
    }
  }
}

.btn-container__add-title {
  color: #ffffff;
  font-family: "Open Sans";
  font-size: 18px;
  font-weight: 700;
  text-align: center;
}

.btn-container__add-button {
  width: 150px;
  height: 150px;
  border: 2px solid #ffffff;
  border-radius: 50%;
  color: #fff;
  font-size: 72px;
  font-weight: 300;
  align-items: center;
  display: flex;
  justify-content: center;
}

.reviews__autor {
  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 0 12px;
  padding-bottom: 30px;
  margin-bottom: 30px;

  border-bottom: 1px solid rgba(65, 76, 99, 0.3);
}

.reviews__autor-left {
  & .avatar {
    padding: 0;
  }
}

.reviews__autor-right {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
}

.reviews__name {
  font-size: 18px;
  font-weight: 900;
}

.reviews__titul {
  font-size: 16px;
  font-weight: 600;
  color: rgba(65, 76, 99, 0.3);
}

.reviews__description {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;

  & .btns-wrap {
  }
}

.reviews__text {
  font-size: 16px;
  font-weight: 600;

  line-height: 30px;

  margin-bottom: 60px;
}

.form-edit {
  background-color: #fff;
  padding: 40px 20px;
  box-shadow: 0 0 8px 0px;
  margin-bottom: 32px;
  margin-right: 0;
  &__left {
    @include medium {
      margin-right: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 40px;
    }
    text-align: center;
    margin-right: 30px;
  }
}

.form-edit__title-box {
  border-bottom: 1px solid rgba(65, 76, 99, 0.3);
  padding-bottom: 30px;
  margin-bottom: 40px;
}

.form-edit__wrapper {
  @include medium {
    flex-direction: column;
  }
  padding: 0 10px;
  display: flex;
}

.form-edit__side {
  flex: 1;

  &.form-edit__side--left {
    display: flex;
    flex-direction: column;

    margin-right: 29px;
  }
}

.form__block-title-review {
  opacity: 0.5;
  color: #464d62;
  font-size: 16px;
  font-weight: 600;
  line-height: 30px;
}

.form__input-review {
  @include ipad-pro {
    width: 240px;
  }
  @include tablets {
    width: 300px;
    margin-bottom: 30px;
  }
  @include medium {
    width: 100%;
  }
  position: relative;
  padding: 5px 5px 5px 2px;
  width: 290px;
  height: 45px;
  border-bottom: 2px solid #b8bbc3;
  background: none;
  border-top: none;
  border-left: none;
  border-right: none;
  color: #464d62;
  font-family: "Open Sans";
  font-size: 18px;
  font-weight: 700;
}

.form-edit__right {
  @include medium {
    width: 100%;
  }
}
.form__input-textarea-review {
  @include ipad-pro {
    width: 520px;
  }
  @include tablets {
    width: 100%;
    height: 150px;
    font-size: 16px;
    line-height: 22px;
  }

  position: relative;
  padding: 5px 20px 5px 20px;
  width: 615px;
  height: 130px;
  resize: none;
  color: #464d62;
  font-family: "Open Sans";
  font-size: 18px;
  font-weight: 700;
  line-height: 36px;
  border: 1px solid;
}

.form__row-review {
  @include tablets {
    flex-direction: column;
  }

  display: flex;

  margin-bottom: 30px;
  &:last-child {
    margin-bottom: 0;
  }
}

.form__row--btns {
  @include tablets {
    align-items: flex-end;
  }
  display: flex;
  justify-content: flex-end;
}

.form__block-review {
  @include tablets {
    margin-right: 0;
  }
  display: flex;
  flex-direction: column;
  margin-right: 35px;
  &:last-child {
    margin-right: 0;
  }
}
.button--cancel {
  @include iphone {
    margin-right: 20px;
  }
  margin-right: 59px;
  border: none;
  color: #383bcf;
  font-size: 16px;
  font-weight: 600;
}

.button.button--save {
  @include iphone {
    padding: 15px 35px;
  }
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 900;
  color: #fff;
  padding: 20px 50px;
  border-radius: 30px 30px;
  background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
  &:hover {
    background-image: linear-gradient(to left, #006aed 0%, #3f35cb 100%);
  }
}

.btns-wrap {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.button--edit {
  background: svg-load("../../images/icons/pencil.svg", fill=#243ED7) center
    center no-repeat;
  width: 17px;
  height: 17px;
  opacity: 0.5;
  border: none;
}

.button--discard {
  background: svg-load("../../images/icons/Cross.svg", fill=#bf2929) center
    center no-repeat;
  width: 17px;
  height: 17px;
  border: none;
}

.btns {
  cursor: pointer;
  display: flex;
  align-items: center;

  &:before {
    content: attr(data-text);
    display: block;
    font-size: 16px;
    font-weight: 600;
    color: #c9cad0;
    margin-right: 11px;
  }
}
</style>
