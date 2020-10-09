const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", function(event) {
	modal.classList.add("is-open")
}) 

close.onclick = function () {
	modal.classList.remove("is-open");
}

new WOW().init();