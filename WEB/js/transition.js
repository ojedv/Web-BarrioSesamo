// transition.js
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a[href]").forEach(link => {
    const url = link.getAttribute("href");
    if (
      url &&
      !url.startsWith("#") &&
      !url.startsWith("mailto:") &&
      !url.startsWith("tel:") &&
      !link.hasAttribute("target")
    ) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const screen = document.getElementById("transitionScreen");
        screen.classList.add("show");
        setTimeout(() => {
          window.location.href = url;
        }, 600);
      });
    }
  });
});
