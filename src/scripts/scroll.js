$("[data-scroll-to]").on("click", e => {
  e.preventDefault();

  activemenu.style.height = 0;
  close.style.opacity = 0;
  logo.style.position = 'relative';
  maincontent.classList.remove("lock");

  const $this = $(e.currentTarget);
  const target = $this.attr("data-scroll-to");

  performTransition(target);
})