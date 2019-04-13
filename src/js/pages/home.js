import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider";
document.addEventListener("DOMContentLoaded", function() {
  if (document.querySelector("body").classList.contains("home")) {
    let elementToReceiveCarousel = document.querySelector(".carousel");
    const slider = tns({
      container: ".carousel",
      items: 3,
      slideBy: "page",
      autoplay: true
    });
  }
});
