const string = "Шашков Денис";
const str = string.split("");
const el = document.getElementById('str');
(function animate() {
  str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);
  const running = setTimeout(animate, 400);
})();