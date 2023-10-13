"use strick";
// document.querySelector(".modal").classList.remove("hidden");
// document.querySelector(".overlay").classList.remove("hidden");
const modalEl = document.querySelector(".modal");
const showModal = document.querySelectorAll(".show-modal");
const closeMOdal = document.querySelector(".close-modal");
const overlayEl = document.querySelector(".overlay");

for (let i = 0; i < showModal.length; i++)
  showModal[i].addEventListener("click", function () {
    document.querySelector(".modal").classList.remove("hidden");
    document.querySelector(".overlay").classList.remove("hidden");
  });

document.querySelector(".close-modal").addEventListener("click", function () {
  document.querySelector(".modal").classList.add("hidden");
  document.querySelector(".overlay").classList.add("hidden");
});
document.querySelector(".overlay").addEventListener("click", function () {
  document.querySelector(".modal").classList.add("hidden");
  document.querySelector(".overlay").classList.add("hidden");
});

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Enter" && modalEl.classList.contains("hidden")) {
    document.querySelector(".modal").classList.remove("hidden");
    document.querySelector(".overlay").classList.remove("hidden");
  }
});

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modalEl.classList.contains("hidden")) {
    document.querySelector(".modal").classList.add("hidden");
    document.querySelector(".overlay").classList.add("hidden");
  }
});
