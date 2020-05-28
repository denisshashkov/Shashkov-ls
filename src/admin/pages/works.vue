<template lang="pug">
   section.works
          .works__title
            .title
              h2 Блок «Работы»
          form.form-edit.form-edit--works
            .form-edit__title-box
              h3.form-edit__title Редактирование работы
            .form-edit__wrapper

              .form-edit__left
                .image-load
                  .image-title__wrapp
                    .image-load__title Перетащите или загрузите для загрузки изображения
                  .image-button__wrapp  
                    button(type="button").image-load__button Загрузить
                     .image-edit
                  .image-edit__image
                    img(src='../../images/content/works/works4.png' alt="Изображение работы").image-edit__icon  
                    button(type="button").image-edit__button Изменить превью
                  
              .form-edit__right
                form.form-works
                  .form__wrapper
                   .form__row-works
                    label.form__block-works
                       span.form__block-title-works Название
                       .form__block-container
                         input(
                         type="text"
                         name="title"
                         placeholder="Дизайн сайта для автосалона Porshe"
                         id="name"
                           ).form__input-works
       
                    label.form__block-works
                      span.form__block-title-works Ссылка
                      .form__block-container
                        input(
                          type="text"
                          name="link"
                          placeholder="https://www.porshe-pulkovo.ru"
                          id="link"
                          ).form__input-works

                .form__row-works
                  label.form__block-area 
                    span.form__block-title-works Описание
                    .form__block-container
                      textarea(
                        name="description"
                        placeholder="Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей"
                        type="textarea"
                        id="description"
                        ).form__input-textarea-works

                .form__row-works
                      label.form__block-works
                         span.form__block-title-works Добавление тэга
                         .form__block-container
                          input(type="text"
                           placeholder="JQuery, Vue.js, HTML5"        
                           ).form__input-works
                          ul.form__list.form__list--tags
                            - var tagList = ['JQuery', 'Vue.js', 'HTML5'];
                            - for (i=0; i<tagList.length; i++)
                              li.form__item-works #{tagList[i]}
                                  button(type="button").button--discard-skills        

                .form__row-works
                        .form__elem-container
                          button(type="button").button.button--cancel Отмена
                          button(type="submit").button.button--save Сохранить         
               
          -
            var worksList = 
            [
              {
                "id": 1,
                "title": "Сайт школы образования",
                "skills": "",
                "photo": "works3.png",
                "link": "https://www.loftschool.ru",
                "desc": "Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!"
              },
              {
                "id": 2,
                "title": "Сайт школы образования",
                "skills": "",
                "photo": "works1.png",
                "link": "https://www.loftschool.ru",
                "desc": "Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!"
              },
              {
                "id": 3,
                "title": "Сайт школы образования",
                "skills": "",
                "photo": "works2.png",
                "link": "https://www.loftschool.ru",
                "desc": "Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!"
              },   
              {
                  "id": 4,
                  "title": "Сайт школы образования",
                  "skills": "",
                  "photo": "works4.png",
                  "link": "https://www.loftschool.ru",
                  "desc": "Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!"
                }
            ];
          .works__listwrapper
            ul.works__list 
              li.works__item.works__item--add
                .btn-container
                  .btn-container__add
                    .btn-container__add-button +
                    .btn-container__add-title Добавить работу
              each work in worksList            
                li.works__item
                  .works__image
                    img(src=`../../images/content/works/${work.photo}` alt="Изображение работы").works__icon 
                    .works__tags
                      ul.works__tag-list
                        li.works__tag-item                     
                          .works__tag #{work.skills}
                  .works__description 
                    .works__description-box
                      .works__title #{work.title}
                      .works__text #{work.desc}
                      a(href="#").works__link #{work.link}
                    .btns-wrap
                      .btns(data-text="Править")
                        button(type="button").button.button--edit                         
                      .btns(data-text="Удалить")
                        button(type="button").button.button--discard                         

</template>

<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";
@import "../../styles/blocks/formworksadmin.pcss";
@import "../../styles/blocks/adminworks.pcss";
</style>
