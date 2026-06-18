const toggleButtons = document.querySelectorAll(".toggle-btn");

toggleButtons.forEach((button) => {
  const detailsId = button.getAttribute("aria-controls");
  const details = document.getElementById(detailsId);

  details.style.display = "none";

  button.addEventListener("click", () => {
    if (details.style.display === "none") {
      details.style.display = "block";
      button.setAttribute("aria-expanded", "true");
      button.textContent = "See less";
    } else {
      details.style.display = "none";
      button.setAttribute("aria-expanded", "false");
      button.textContent = "See more";
    }
  });
});