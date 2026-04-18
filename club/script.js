const btn = document.getElementById("registerBtn");
const toast = document.getElementById("toast");
const seatsNote = document.getElementById("seatsNote");

btn.addEventListener("click", () => {
  btn.classList.add("done");
  btn.querySelector(".btn-text").textContent = "Registered!";
  btn.querySelector(".btn-arrow").textContent = "✓";
  seatsNote.textContent = "See you there 👋";

  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3500);
});