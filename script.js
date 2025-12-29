document.querySelectorAll(".folder").forEach(folder => {
  folder.addEventListener("mouseenter", () => {
    folder.style.filter = "brightness(1.04)";
  });

  folder.addEventListener("mouseleave", () => {
    folder.style.filter = "brightness(1)";
  });
});
