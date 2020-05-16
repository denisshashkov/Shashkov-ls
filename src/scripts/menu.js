const hamburger = document.querySelector('.hamburger-menu__link'),
      close = document.querySelector('.close-hamburger'),
      activemenu = document.querySelector('.menu-active'),
      menu = document.querySelector('.menu'),
      headerLinksMenu = document.querySelector('.header__links-menu'),
      body = document.querySelector('body');
        

hamburger.addEventListener( 'click', function() {
  close.style.opacity = 1;
  menu.classList.add('menu-active');
  headerLinksMenu.style.display = 'flex';
  body.style.overflow = 'hidden';
})

close.addEventListener('click', function() {
  menu.classList.remove('menu-active');
  close.style.opacity = 0;
  headerLinksMenu.style.display = 'none';
  body.style.overflow = 'visible';
})
