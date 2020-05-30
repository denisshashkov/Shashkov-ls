<template lang="pug">
section.reviews
          .reviews__title
            .title
              h2 Блок «Отзывы»
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

                .form__row-review.form__row--btn           
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
                      button(type="submit").btns-block
                        .text__button Править
                        .button--edit 
                      button(type="reset").btns-block  
                        .text__button Удалить
                        .button--discard                         
                      
</template>

<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";
@import "../../styles/blocks/form.pcss";
@import "../../styles/blocks/adminreviews.pcss";
</style>
