new Swiper(".newName", {
  effect: "slide",
  autoHeight: true,
  speed: 1000,
  slidesPerView: 2,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loopFillGroupWithBlank: true,
  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  }
});
