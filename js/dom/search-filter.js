const d = document;
export default function searchFilter(input, selector) {
  const $cardArray = d.querySelectorAll(selector);
  d.addEventListener("keyup", (e) => {
    if (e.target.matches(input)) {
      $cardArray.forEach((elem) =>
        elem.textContent.toLowerCase().includes(e.target.value)
          ? elem.classList.remove("filter")
          : elem.classList.add("filter")
      );
    }
  });
}
