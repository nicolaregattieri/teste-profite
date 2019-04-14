import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider";

class Home {
  constructor() {
    this.shelfToReceiveCarousel = document.querySelector(".shelf-carousel");
    this.bannerToReceiveCarousel = document.querySelector(
      ".banner--mob-carousel"
    );
    this.bannerDeskToReceiveCarousel = document.querySelector(
      ".banner--desk-carousel"
    );
    this.setBackGroundToCarousel(".banner--mob");
    this.setBackGroundToCarousel(".banner--desk");
    this.callCarousel(this.shelfToReceiveCarousel, 2, "carousel", false, false);
    this.callCarousel(this.bannerToReceiveCarousel, 1, "gallery", true, false);
    this.callCarousel(
      this.bannerDeskToReceiveCarousel,
      2,
      "gallery",
      true,
      false
    );
    this.menuIcon = document.querySelector(".menu__icon");
    this.events();
  }
  events() {
    this.menuIcon.addEventListener("click", this.togleTheMenu);
  }

  togleTheMenu() {
    this.classList.contains("change")
      ? this.classList.remove("change")
      : this.classList.add("change");
  }

  setBackGroundToCarousel(banner) {
    let imgElement = document
      .querySelector(banner)
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
    if (elm.classList.contains("banner--desk-carousel")) {
      let slider = tns({
        container: elm,
        items: items,
        slideBy: "page",
        autoplay: false,
        mode: mode,
        controls: controls,
        autoplayButton: false,
        nav: true,
        autoplayButtonOutput: false,
        mouseDrag: true,
        controls: true
      });
    }
    if (elm.classList.contains("banner--mob-carousel")) {
      let slider = tns({
        container: elm,
        items: items,
        slideBy: "page",
        autoplay: false,
        mode: mode,
        controls: controls,
        autoplayButton: false,
        nav: true,
        autoplayButtonOutput: false,
        mouseDrag: true,
        controls: false
      });
    }
    if (elm.classList.contains("shelf-carousel")) {
      let slider = tns({
        container: elm,
        items: items,
        slideBy: "page",
        autoplay: false,
        mode: mode,
        controls: controls,
        autoplayButton: false,
        nav: true,
        autoplayButtonOutput: false,
        mouseDrag: true,
        controls: false,
        responsive: {
          800: {
            items: 4,
            controls: true,
            nav: false
          }
        }
      });
    }
  }
}

document.addEventListener("DOMContentLoaded", function() {
  if (document.querySelector("body").classList.contains("home")) {
    window.Home = new Home();
  }
});
