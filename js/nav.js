const toggle = document.querySelector("[data-menu-toggle]");
const overlay = document.querySelector("[data-overlay]");
const page = document.body.dataset.page;
document.querySelectorAll("[data-nav] a").forEach((link) => {
  const href = link.getAttribute("href");
  if (
    href === `${page}.html` ||
    (page === "home" && href === "index.html")
  ) {
    link.classList.add("is-active");
  }
});
function setOpen(open) {
  document.body.classList.toggle("nav-open", open);
  if (toggle) {
    toggle.setAttribute("aria-expanded", String(open));
  }
}
toggle?.addEventListener("click", () => {
  setOpen(!document.body.classList.contains("nav-open"));
});
overlay?.addEventListener("click", () => setOpen(false));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setOpen(false);
});