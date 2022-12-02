const d = document,
  html = document.documentElement,
  w = window;
export default function scrollButton(btn) {
  const $scrollBtn = d.querySelector(btn);
  w.addEventListener("scroll", (e) => {
    if (html.scrollTop > 800) {
      // w.pageYOffset
      $scrollBtn.classList.remove("hidden");
    } else $scrollBtn.classList.add("hidden");
    // console.log(html.scrollTop);
  });

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      w.scrollTo({
        // Object
        behavior: "smooth",
        top: 0,
        left: 0,
      });
    }
  });
}
