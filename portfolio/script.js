const toggle = document.getElementById("modeToggle");

toggle.addEventListener("click", () => {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
toggle.textContent = "☀️";
document.body.style.background = "#121212";
document.body.style.color = "white";
}
else{
toggle.textContent = "🌙";
document.body.style.background = "#f5f5f5";
document.body.style.color = "#333";
}

});