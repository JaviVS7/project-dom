const d = document;
const ls = localStorage;
export default function darkMode(btn, classDark) {
  const $darkBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]");

  /* let moon = "🌙",
    sun = "☀️"; */

  const darkMode_ = () => {
    $selectors.forEach((elem) => {
      elem.classList.add(classDark);
      $darkBtn.firstElementChild.classList.replace("fa-moon", "fa-sun");
      ls.setItem("theme", "dark");
    });
  };
  const lightMode_ = () => {
    $selectors.forEach((elem) => {
      elem.classList.remove(classDark);
      $darkBtn.firstElementChild.classList.replace("fa-sun", "fa-moon");
      ls.setItem("theme", "light");
    });
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
      if ($darkBtn.firstElementChild.classList.contains("fa-moon")) {
        darkMode_();
      } else {
        lightMode_();
      }
    }
  });

  //To save the value in LocalStorage

  d.addEventListener("DOMContentLoaded", (e) => {
    if (ls.getItem("theme") === null) ls.setItem("theme", "light");
    if (ls.getItem("theme") === "light") lightMode_();
    if (ls.getItem("theme") === "dark") darkMode_();
  });
}
