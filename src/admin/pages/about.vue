<template lang="pug">
.about-container
  .about-page__title
    h1.page-title Блок <<Обо мне>>
    button.about-page__add-new(
    ) Добавить группу

  .groups
         ul.groups__list       
              li.groups__item.groups__item--addgroup 
                  form.form
                    .form__wrapper
                      .form__header
                        label.form__elem
                          .form__elem-container
                            input(type="text" placeholder="Название новой группы").form__elem-input-header
                            .form__elem-btns
                              button(type="button").button.button--apply
                              button(type="button").button.button--discard 
                      .form__footer
                        label.form__elem
                          .form__elem-container
                            input(type="text" placeholder="Новый навык").form__elem-input-footer
                            td.skill__value-footer
                              input(type="number" min="0" max="100" placeholder="100" value="100").form__elem-input-percent
                            button(type="button").button.button--add +
              -
                var skillsList = [
                    [
                      {type: "Workflow"},
                      [{text:"Git", value:"100"}, {text:"Terminal", value:"90"}, {text:"Gulp", value:"80"}, {text:"Webpack", value:"85"}]
                    ]
                ]
              each skill in skillsList
                li.groups__item.groups__item--group
                  form.form
                    .form__wrapper
                      .form__header
                        label.form__elem
                          .form__elem-container
                            input(type="text" placeholder="Название новой группы" value=`${skill[0].type}`).form__elem-input-header
                            .form__elem-btns
                               button(type="button").button.button--apply
                               button(type="button").button.button--discard
                      .form__container
                        label.form-elem
                          .skill
                            ul.skill__list                        
                              li.skill__item
                                table.skill__table
                                  each row in skill[1]
                                    tr.skill__table-row
                                      td.skill__name 
                                        .skill__name-input-wrapper.no-edit
                                          label.form__elem
                                            input(type="text" placeholder="Навык" value=`${row.text}` readonly).form__elem-input      
                                      td.skill__value 
                                        .skill__name-input-wrapper.no-edit
                                          label.form__elem.form__elem--number   
                                              input(type="number" min="0" max="100" placeholder="100" value=`${row.value}` readonly).form__elem-input-percent
                                      td.skill__percent                                                                                
                                      td.skill__button
                                        button(type="button").button.button--edit
                                      td.skill__button                                      
                                        button(type="button").button.button--delete  
                      .form__footer
                        label.form__elem
                          .form__elem-container
                            input(type="text" placeholder="Новый навык").form__elem-input-footer
                            td.skill__value-footer
                              input(type="number" min="0" max="100" placeholder="100" value="100").form__elem-input-percent
                            button(type="button").button.button--add +          
              -
                var skillsList = [
                    [
                      {type: "Frontend"},
                      [{text:"HTML5", value:"100"}, {text:"CSS", value:"90"}, {text:"JavaScript", value:"80"}, {text:"Jquery и Vue.js", value:"85"}]
                    ]
                ]           
              each skill in skillsList
                li.groups__item.groups__item--group
                  form.form
                    .form__wrapper
                      .form__header
                        label.form__elem
                          .form__elem-container
                            input(type="text" placeholder="Название новой группы" value=`${skill[0].type}`).form__elem-input-header
                            .form__elem-btns
                               button(type="button").button.button--edit
                      .form__container
                        label.form-elem
                          .skill
                            ul.skill__list                        
                              li.skill__item
                                table.skill__table
                                  each row in skill[1]
                                    tr.skill__table-row
                                      td.skill__name 
                                        .skill__name-input-wrapper.no-edit
                                          label.form__elem
                                            input(type="text" placeholder="Навык" value=`${row.text}` readonly).form__elem-input
                                      td.skill__value 
                                        .skill__name-input-wrapper.no-edit
                                          label.form__elem.form__elem--number
                                            input(type="number" min="0" max="100" placeholder="100" value=`${row.value}` readonly).form__elem-input-percent                                                                           
                                      td.skill__button
                                        button(type="button").button.button--edit
                                      td.skill__button                                      
                                        button(type="button").button.button--delete  
                      .form__footer
                        label.form__elem
                          .form__elem-container
                            input(type="text" placeholder="Новый навык").form__elem-input-footer
                            td.skill__value-footer
                              input(type="number" min="0" max="100" placeholder="100" value="100").form__elem-input-percent
                            button(type="button").button.button--add +
       
       
</template>

<script></script>

<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";
@import "../../styles/admin/*pcss";
.skill-container {
  border: 1px solid black;
  padding: 10px;
}

.about-page__title {
  @include small {
    flex-direction: column;
    align-items: end;
  }
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  .page-title {
    @include small {
      margin: 0px 0px 15px 0px;
    }
    margin-bottom: 0;
    margin-right: 60px;
    color: #414c63;
    font-family: "Open Sans";
    font-size: 21px;
    font-weight: 700;
  }
}

.about-page__add-new {
  color: #383bcf;
  font-family: "Open Sans - Semibold";
  font-size: 16px;
  font-weight: 600;
  display: flex;
  background: none;
  border: none;
  &:before {
    content: "+";
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-image: linear-gradient(to right, #006aed, #3f35cb);
    line-height: 20px;
    color: #fff;
    margin-right: 13px;
    flex-shrink: 0;
    flex-basis: 20px;
  }
}

.groups__list {
  @include tablets {
    justify-content: center;
  }
  display: flex;
  flex-wrap: wrap;
}

.groups__item {
  @include tablets {
    margin-right: 25px;
    &:last-child {
      margin-right: 0;
    }
  }
  @include medium {
    width: 100%;
    margin-right: 0;
    margin-bottom: 25px;
  }
  width: 45%;
  height: 390px;
  &:first-child {
    @include tablets {
      display: none;
    }
    margin-right: 25px;
    margin-bottom: 25px;
  }
}

.skill__table {
  width: 100%;
}

.skill__item {
  @include medium {
    display: flex;
    justify-content: center;
  }
}

.form {
  height: 100%;
  background-color: #fff;
  padding: 30px 20px;
}

.form__elem-container {
  @include medium {
    justify-content: space-between;
  }
  display: flex;
  align-items: baseline;
  width: 100%;
}

.form__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.form__header {
  border-bottom: 1px solid #dddedf;
  & .form__elem-container {
    @include tablets {
      justify-content: space-between;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & .form__elem-input {
    min-width: 273px;
  }
}

.form__elem-input {
  @include desktop {
    margin: 0px 0px 14px 0px;
  }
  @include tablets {
    width: 150px;
  }
  padding: 5px 0;
  margin: 0px 40px 14px 0px;
  border: none;
  background: none;
  font-size: 16px;
  font-weight: 700;
  color: #414c63;

  &-header {
    @include tablets {
      width: 150px;
      border: none;
    }
    border-bottom: 1px solid;
    padding: 5px 30px 5px 0px;
    margin-bottom: 14px;
    border-top: none;
    border-left: none;
    border-right: none;
    background: none;
    font-size: 16px;
    font-weight: 700;
    color: #414c63;
  }
  &-footer {
    @include tablets {
      width: 180px;
    }
    border-bottom: 1px solid;
    padding: 6px 0px 7px 20px;
    border-top: none;
    border-left: none;
    border-right: none;
    background: none;
    font-size: 16px;
    font-weight: 700;
    color: #414c63;
    margin-right: 10px;
    width: 218px;
  }
}

.form__elem-input-percent {
  padding: 5px 0px;

  border: none;
  background: none;
  font-size: 16px;
  font-weight: 700;
  color: #414c63;

  width: 43px;
}

.form__footer {
  align-self: flex-end;

  & .form__elem-input:first-child {
    margin-right: 10px;
    padding-left: 20px;
  }

  .form {
    display: flex;
    & .form__elem-input {
      margin-right: 0;
      width: 65px;
    }
  }
}

.skill__value {
  @include desktop {
    margin-right: 10px;
  }
}

.skill__name {
  margin-right: 50px;
}

.skill__value,
.skill__value-footer {
  @include desktop {
    margin-right: 10px;
  }
  display: flex;
  margin-right: 50px;
}

.skill__value-footer {
  border-bottom: 1px solid;
}

.skill__value:after,
.skill__value-footer:after {
  content: "%";
  padding-right: 10px;
  font-size: 16px;
  font-weight: 400;
  color: #414c63;
  height: 31px;
  display: flex;
  align-items: center;
}

.button {
  cursor: pointer;
  padding: 0;
  border: none;

  &--apply {
    background: svg-load(
        "../../images/icons/tick.svg",
        fill=#00d70a,
        width=100%,
        height=100%
      )
      center center no-repeat;
    width: 17px;
    height: 17px;
    margin-right: 20px;
  }

  &--discard {
    background: svg-load("../../images/icons/Cross.svg", fill=#bf2929) center
      center no-repeat;
    width: 17px;
    height: 17px;
  }
  &--edit {
    background: svg-load("../../images/icons/pencil.svg", fill=#414c63) center
      center no-repeat;
    width: 17px;
    height: 17px;
    opacity: 0.5;
  }
  &--delete {
    background: svg-load("../../images/icons/trash.svg", fill=#414c63) center
      center no-repeat;
    width: 17px;
    height: 17px;
    opacity: 0.5;
    margin-left: 18px;
  }
  &--add {
    font-size: 30px;
    width: 40px;
    height: 40px;
    background-image: linear-gradient(90deg, #006aed, #3f35cb);
    color: #fff;
    border-radius: 50%;
  }
}

.form-edit {
  background-color: @fff;
  padding: 30px 20px;
  box-shadow: 0 0 8px 0px #1f232d;
  margin-bottom: 32px;

  margin-right: 0;
}

.form-edit__title-box {
  border-bottom: 1px solid #1f232d;
  padding-bottom: 30px;
  margin-bottom: 50px;
}

.form-edit__wrapper {
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
</style>
