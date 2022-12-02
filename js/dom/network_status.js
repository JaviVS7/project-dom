const d = document,
  w = window,
  n = navigator;
export default function networkStatus() {
  const isOnLine = () => {
    const $div = d.createElement("div"); // Creamos un div y guardamos su referencia
    if (n.onLine) {
      // propiedad del navigator
      $div.textContent = "Back online"; //Agregamos texto al div
      $div.classList.add("online"); //Agregamos y Removemos la clase CSS
      $div.classList.remove("offline");
    } else {
      $div.textContent = "No Conection";
      $div.classList.add("offline");
      $div.classList.remove("online");
    }

    d.body.insertAdjacentElement("afterbegin", $div); // Insertamos el div como ultimo elemento del body
    setTimeout(() => d.body.removeChild($div), 3000); // Romovemos el div pasados 3 seg
  };
  w.addEventListener("online", (e) => isOnLine());
  w.addEventListener("offline", (e) => isOnLine());
}
