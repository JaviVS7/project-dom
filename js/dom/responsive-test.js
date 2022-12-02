const d = document;
export default function responsiveTester(idForm) {
  const $form = d.getElementById(idForm);

  let tester; // Importat when you work with window.open() and window.close()

  d.addEventListener("submit", (e) => {
    if (e.target === $form) {
      e.preventDefault();
      // alert("Send");
      tester = window.open(
        $form.address.value,
        "tester",
        `innerWidth = ${$form.width.value}, innerHeight = ${$form.height.value}`
      );
    }
  });
  d.addEventListener("click", (e) => {
    if (e.target === $form.Close) {
      tester.close(); //tester salva la referencia de la ventana que se abrio mediante window.open()
    }
  });
}
//end
