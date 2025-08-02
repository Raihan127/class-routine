const buttons = document.querySelectorAll("nav button");
const days = document.querySelectorAll(".day");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    buttons.forEach((b) => b.classList.remove("active"));
    // Add active to clicked button
    btn.classList.add("active");

    const dayId = btn.getAttribute("data-day");

    // Show selected day and hide others with fade effect
    days.forEach((day) => {
      if (day.id === dayId) {
        day.classList.add("active");
      } else {
        day.classList.remove("active");
      }
    });
  });
});