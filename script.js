(() => {
  "use strict";
  const button = document.querySelector(".menu-button");
  const menu = document.querySelector("#mobile-nav");
  const closeMenu = () => {
    button.setAttribute("aria-expanded", "false");
    menu.hidden = true;
  };
  button.addEventListener("click", () => {
    const open = button.getAttribute("aria-expanded") !== "true";
    button.setAttribute("aria-expanded", String(open));
    menu.hidden = !open;
  });
  menu
    .querySelectorAll("a")
    .forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !menu.hidden) {
      closeMenu();
      button.focus();
    }
  });
  const desktop = window.matchMedia("(min-width: 761px)");
  desktop.addEventListener("change", (event) => {
    if (event.matches) closeMenu();
  });
  document.documentElement.classList.add("js");
  if ("IntersectionObserver" in window) {
    const links = [...document.querySelectorAll(".nav a")];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            links.forEach((link) => {
              if (link.hash === "#" + entry.target.id)
                link.setAttribute("aria-current", "location");
              else link.removeAttribute("aria-current");
            });
          }
        });
      },
      { rootMargin: "-15% 0px -65% 0px", threshold: 0 },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((section) => observer.observe(section));
  }
  document.querySelector("#year").textContent = new Date().getFullYear();
})();
