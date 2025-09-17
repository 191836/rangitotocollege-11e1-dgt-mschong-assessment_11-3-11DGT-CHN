document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".show-answer").forEach(button => {
    button.addEventListener("click", () => {
      const answerText = button.getAttribute("data-answer");
      const answerElement = button.nextElementSibling;
      answerElement.textContent = answerText;
      answerElement.classList.remove("hidden");
    });
  });
});