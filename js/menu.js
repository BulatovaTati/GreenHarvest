(() => {
  const c = document.querySelector(".js-menu-container"),
    o = document.querySelector(".js-open-menu"),
    s = document.querySelector(".js-close-menu"),
    r = document.querySelectorAll(".menu-nav-link"),
    e = () => {
      const t = o.getAttribute("aria-expanded") === "true" || !1;
      o.setAttribute("aria-expanded", !t), c.classList.toggle("is-open");
      const n = t ? "enableBodyScroll" : "disableBodyScroll";
    };
  r.forEach((t) => t.addEventListener("click", e)),
    o.addEventListener("click", e),
    s.addEventListener("click", e),
    window.matchMedia("(min-width: 768px)").addEventListener("change", (t) => {
      t.matches &&
        (c.classList.remove("is-open"), o.setAttribute("aria-expanded", !1));
    });
})();
