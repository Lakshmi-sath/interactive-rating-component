const homeContainer = document.querySelector(".container");
const thanksContainer = document.querySelector(".thanks-container");

const submitButton = document.getElementById("submit-btn");

const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

submitButton.addEventListener("click", () => {
	thanksContainer.removeAttribute("hidden");
	homeContainer.style.display = "none";
});

rates.forEach((rate) => {
	rate.addEventListener("click", () => {
		rating.innerHTML = rate.innerHTML;
	});
});
