let windowWidth = null;

(() => {
  const get = () => {
    windowWidth = document.querySelector('body').clientWidth;
  };

  get();

  window.addEventListener('resize', () => get())
})();


const parallax = document.querySelectorAll('.parallax');


Array.from(parallax).forEach((parallax, index) => {


  const layers = parallax.children;
  const parent = parallax.parentNode;
  const parentOffsetTop = parent.offsetTop

  function moveLayersDependsOnScroll(wScroll) {

    Array.from(layers).forEach(layer => {
      const divider = layer.dataset.speed;
      const strafe = wScroll * divider / 10;

      layer.style.transform = `translateY(-${strafe}%)`;
    });
  }

  window.addEventListener('scroll', e => {
    const wScroll = window.pageYOffset;

    if (windowWidth > 768 && wScroll - parentOffsetTop >= 0) {
      moveLayersDependsOnScroll(wScroll - parentOffsetTop);
    }
  })
});