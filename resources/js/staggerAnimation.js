window.addEventListener("load", () => {
  const items = document.querySelectorAll(".animate-up-stagger");
  items.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.2}s`; // delay based on index
    el.classList.add("animate-up-stagger-active"); // trigger animation
  });
});