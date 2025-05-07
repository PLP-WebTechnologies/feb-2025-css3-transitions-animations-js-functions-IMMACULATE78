document.getElementById("animateBtn").addEventListener("click", function() {
  const box = document.getElementById("box");
  box.classList.toggle("animated");

  if (box.classList.contains("animated")) {
    localStorage.setItem("boxState", "animated");
  } else {
    localStorage.removeItem("boxState");
  }
});

window.onload = function() {
  if (localStorage.getItem("boxState") === "animated") {
    document.getElementById("box").classList.add("animated");
  }
};
