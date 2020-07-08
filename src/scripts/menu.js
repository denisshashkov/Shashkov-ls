import Vue from 'vue';

const mobileMenuBtn = document.querySelector('#mobile-nav');

new Vue({
  el: "#navigation_menu",
  template: "#navigation",

  data() {
    return {
      menuList: [{
          text: 'Главная',
          href: 'section_1'
        },
        {
          text: 'Обо мне',
          href: 'section_2'
        },
        {
          text: 'Навыки',
          href: 'section_3'
        },
        {
          text: 'Работы',
          href: 'section_4'
        },
        {
          text: 'Отзывы',
          href: 'section_5'
        },
        {
          text: 'Связаться',
          href: 'section_6'
        }
      ],
      showMenu: false
    }
  },

  methods: {
    scrollToSection(href) {
      this.showMenu = false;
      const section = document.getElementById(href);
      section.scrollIntoView({
        behavior: "smooth"
      });
    }
  }

});

new Vue({
  el: "#navigation_menu--footer",
  template: "#navigation--footer",

  data() {
    return {
      menuList: [{
          text: 'Главная',
          href: 'section_1'
        },
        {
          text: 'Обо мне',
          href: 'section_2'
        },
        {
          text: 'Навыки',
          href: 'section_3'
        },
        {
          text: 'Работы',
          href: 'section_4'
        },
        {
          text: 'Отзывы',
          href: 'section_5'
        },
        {
          text: 'Связаться',
          href: 'section_6'
        }
      ],
      showMenu: false
    }
  },

  methods: {
    scrollToSection(href) {
      this.showMenu = false;
      const section = document.getElementById(href);
      section.scrollIntoView({
        behavior: "smooth"
      });
    }
  }
});


// мобильное меню


const listItem = {
  template: "#list-item",
  props: {
    item: Object,
    showMenu: Boolean
  }
}


const menuMobileVue = new Vue({
  el: "#navigation_menu--mobile",
  template: "#navigation--mobile",

  components: {
    listItem
  },

  data() {
    return {
      menuList: [{
          text: 'Главная',
          href: 'section_1'
        },
        {
          text: 'Обо мне',
          href: 'section_2'
        },
        {
          text: 'Навыки',
          href: 'section_3'
        },
        {
          text: 'Работы',
          href: 'section_4'
        },
        {
          text: 'Отзывы',
          href: 'section_5'
        },
        {
          text: 'Связаться',
          href: 'section_6'
        }
      ],
      showMenu: false
    }
  },

  methods: {
    scrollToSection(href) {
      this.showMenu = false;
      const section = document.getElementById(href);
      section.scrollIntoView({
        behavior: "smooth"
      });
    }
  }
});



mobileMenuBtn.addEventListener('click', e => {
  e.preventDefault();
  menuMobileVue.$data.showMenu = true;
});


const scrollButton = document.querySelector('.mountains__button-btn');

scrollButton.addEventListener('click', e => {
  scrollButton.scrollIntoView({
    behavior: "smooth",
  });
  scrollButton.classList.add('noActive')
});