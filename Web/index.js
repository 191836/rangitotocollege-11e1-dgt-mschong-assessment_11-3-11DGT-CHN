function toggleAnswer(id) {
  const el = document.getElementById(id);
  el.style.display = (el.style.display === "none" || el.style.display === "")
    ? "block"
    : "none";
}



