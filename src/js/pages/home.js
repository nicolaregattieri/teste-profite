import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider";

class Home {
  constructor() {
    this.shelfToReceiveCarousel = document.querySelector(".shelf-carousel");
    this.bannerToReceiveCarousel = document.querySelector(
      ".banner--mob-carousel"
    );
    this.setBackGroundToCarousel();
    this.callCarousel(this.shelfToReceiveCarousel, 2, "carousel", false, false);
    this.callCarousel(this.bannerToReceiveCarousel, 1, "gallery", true, false);
  }

  setBackGroundToCarousel() {
    let imgElement = document
      .querySelector(".banner--mob")
      .querySelectorAll(".box-image img");

    imgElement.forEach(element => {
      element.style = "display:none";
      let src = element.src;
      let parent = element.parentElement.parentElement;
      parent.style = `background-image: url(${src});
                      background-size: cover;
                      background-position: center;
                      `;
    });
  }

  callCarousel(elm, items, mode, autoplay, controls) {
    const slider = tns({
      container: elm,
      items: items,
      slideBy: "page",
      //   autoplay: autoplay,
      mode: mode,
      controls: controls,
      autoplayButton: false,
      nav: true,
      autoplayButtonOutput: false,
      mouseDrag: true
    });
  }
}

document.addEventListener("DOMContentLoaded", function() {
  if (document.querySelector("body").classList.contains("home")) {
    window.Home = new Home();
  }
});
