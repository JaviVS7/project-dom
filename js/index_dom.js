import hamburgerMenu from "./dom/menu_hamb.js";
import { digitalClock, alarm } from "./dom/clock.js";
import { shortcuts, moveBall } from "./dom/keyboard.js";
import scrollButton from "./dom/scrollButton.js";
import darkMode from "./dom/dark_mode.js";
import responsiveMedia from "./dom/object-responsive.js";
import responsiveTester from "./dom/responsive-test.js";
import networkStatus from "./dom/network_status.js";
import searchFilter from "./dom/search-filter.js";
const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#clock", "#clock-on", "#clock-off");
  alarm("assets/alarm.mp3", "#alarm-on", "#alarm-off");
  scrollButton(".scroll-top-btn");
  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    `<a href= "https://youtu.be/VNdHd1asf9s" target = "_blank" rel = "noopener"> Watch Video </a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/VNdHd1asf9s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmap",
    "(min-width: 1024px)",
    `<a href = "https://goo.gl/maps/ByKWRydHPfr9is3y5" target = "_blank" rel = "noopener"> Watch Map </a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11319.862496884876!2d20.433990297060962!3d44.82226495250191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7ab4f7ba19a5%3A0x29bdf885da51d1b2!2sKalemegdan!5e0!3m2!1ses-419!2srs!4v1669738705456!5m2!1ses-419!2srs" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );
  responsiveTester("responsive-tester");
  searchFilter(".card-filter", ".card");
});

// Teclado "keydown", "keyup", "keypress"
d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});

darkMode(".dark-mode-btn", "dark-mode");
networkStatus();
