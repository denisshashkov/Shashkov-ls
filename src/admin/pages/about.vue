<template lang="pug">
.about-container
  .about-page__title
     h2.about-page__title-text Блок «Обо мне»
     button.about-page__add-new(
    ) Добавить группу

  .groups
         ul.groups__list       
              li.groups__item.groups__item--addgroup

                 .card 
                  .card__wrapper
                      form.form__header
                        label.form__elem
                          .form__elem-container
                            input(type="text" placeholder="Название новой группы").form__elem-input-header
                            .form__elem-btns
                              button(type="submit").button.button--apply
                              button(type="reset").button.button--discard 
                      form.form__footer
                        label.form__elem
                          .form__elem-container
                            input(type="text" placeholder="Новый навык").form__elem-input-footer
                            td.skill__value-footer
                              input(type="number" min="0" max="100" placeholder="100" value="100").form__elem-input-percent
                            button(type="submit").button.button--add +  

              -
                var skillsList = [
                    [
                      {type: "Workflow"},
                      [{text:"Git", value:"100"}, {text:"Terminal", value:"90"}, {text:"Gulp", value:"80"}, {text:"Webpack", value:"85"}]
                    ]
                ]
              each skill in skillsList
                li.groups__item.groups__item--group
                  .card
                    .card__wrapper
                      form.form__header
                         label.form-elem
                          .form__elem-container
                            input(type="text" placeholder="Название новой группы" value=`${skill[0].type}`).form__elem-input-header
                            .form__elem-btns
                               button(type="submit").button.button--apply
                               button(type="reset").button.button--discard


                      form.card-skills             
                          .skills
                            ul.skill__list  
                               each row in skill[1]                      
                                li.skill__item
                                  label.skill__name
                                    input(type="text" placeholder="Навык" value=`${row.text}` readonly).form__elem-input
                                  label.skill__value
                                    input(type="number" min="0" max="100" placeholder="100" value=`${row.value}` readonly).form__elem-input-percent
                                  .skill__button
                                      button(type="submit").button.button--edit 
                                      button(type="reset").button.button--delete

                               
                      form.form__footer
                        label.form__elem
                          .form__elem-container
                            input(type="text" placeholder="Новый навык").form__elem-input-footer
                            td.skill__value-footer
                              input(type="number" min="0" max="100" placeholder="100" value="100").form__elem-input-percent
                            button(type="submit").button.button--add +          
              -
                var skillsList = [
                    [
                      {type: "Frontend"},
                      [{text:"HTML5", value:"100"}, {text:"CSS", value:"90"}, {text:"JavaScript", value:"80"}, {text:"Jquery и Vue.js", value:"85"}]
                    ]
                ]           
              each skill in skillsList
                li.groups__item.groups__item--group
                  .card
                    .card__wrapper
                      form.form__header
                        label.form__elem
                          .form__elem-container
                            input(type="text" placeholder="Название новой группы" value=`${skill[0].type}`).form__elem-input-header
                            .form__elem-btns
                               button(type="submit").button.button--edit

                      form.card-skills             
                          .skills
                            ul.skill__list  
                               each row in skill[1]                      
                                li.skill__item
                                  label.skill__name
                                    input(type="text" placeholder="Навык" value=`${row.text}` readonly).form__elem-input
                                  label.skill__value
                                    input(type="number" min="0" max="100" placeholder="100" value=`${row.value}` readonly).form__elem-input-percent
                                  .skill__button
                                      button(type="submit").button.button--edit 
                                      button(type="reset").button.button--delete         
                      

                      form.form__footer
                         label.form__elem
                          .form__elem-container
                          
                            input(type="text" placeholder="Новый навык").form__elem-input-footer
                            td.skill__value-footer
                              input(type="number" min="0" max="100" placeholder="100" value="100").form__elem-input-percent
                            button(type="submit").button.button--add +
       
       
</template>

<script></script>

<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";
@import "../../styles/admin/*pcss";
@import "../../styles/blocks/adminabout.pcss";
</style>
