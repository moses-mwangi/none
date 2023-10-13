"use strick";
// document.querySelector(".modal").classList.remove("hidden");
// document.querySelector(".overlay").classList.remove("hidden");
const showModal = document.querySelectorAll("show-modal");

document.querySelector(".show-modal").addEventListener("click", function () {
  document.querySelector(".modal").classList.remove("hidden");
  document.querySelector(".overlay").classList.remove("hidden");
});
