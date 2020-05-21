const left = document.querySelector(".reviews__button-left");
const right = document.querySelector(".reviews__button-right");
const items = document.querySelector(".slider__list");


const minRight = 0;
const maxRight = 430;
const step = 430;
let currentRight = 0;

items.style.right = currentRight;

right.addEventListener("click", function() {
    if (currentRight < maxRight) {
        currentRight += step;
        items.style.right = currentRight + "px";
        right.classList.add("no-active");
        left.classList.remove("no-active");
    }
});

left.addEventListener("click", function() {
    if (currentRight > minRight) {
        currentRight -= step;
        items.style.right = currentRight + "px";
        left.classList.add("no-active");
        right.classList.remove("no-active");
    }
});

