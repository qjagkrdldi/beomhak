$("nav > .search").click(function (e) {
  e.preventDefault();
  $(".searchBox").addClass("on");
  $(".searchBox input").val("");
  $(".dim").addClass("on");
});

$(document).click(function (e) {
  if (!$(e.target).closest(".searchBox, nav > a").length) {
    $(".searchBox").removeClass("on");
    $(".dim").removeClass("on");
  }
});

const progressBar = document.querySelector(".autoplay-progress .bar");
const currentSlide = document.querySelector(".pro_counter .current");
const totalSlides = document.querySelector(".pro_counter .total");

var swiper = new Swiper(".mySwiper01", {
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".mySwiper01 .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".mySwiper01 .swiper-button-next",
    prevEl: ".mySwiper01 .swiper-button-prev",
  },
  on: {
    init: function () {
      totalSlides.textContent = String(this.slides.length).padStart(2, "0");
      currentSlide.textContent = String(this.realIndex + 1).padStart(2, "0");
    },
    slideChange: function () {
      currentSlide.textContent = String(this.realIndex + 1).padStart(2, "0");
    },
    autoplayTimeLeft(s, time, progress) {
      progressBar.style.width = `${(1 - progress) * 100}%`;
    },
  },
  resize() {
    progressBar.style.width = `${(1 - progress) * 100}%`;
  },
});

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    document.querySelector("header").classList.add("fixed");
  } else {
    document.querySelector("header").classList.remove("fixed");
  }
});

$(function () {});
AOS.init({
  duration: 600,
  easing: "ease-in-out",
  offset: 0,
});

//splitting.js
$(function () {
  Splitting();
});

$(function () {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".cont03",
        start: "0% 80%",
        end: "80% 100%",
        scrub: 1,
        // markers:true,
      },
    })
    .to(
      ".wrap",
      { backgroundColor: "#fff", color: "#000", ease: "none", duration: "5" },
      0
    )
    .to(".scroll", { opacity: "0", ease: "none", duration: "5" }, 0)
    .fromTo(
      ".videoWrap video",
      { "clip-path": "inset(60% 60% 60% 60% round 30%)" },
      {
        "clip-path": "inset(0% 0% 0% 0% round 0%)",
        ease: "none",
        duration: 10,
      },
      0
    );

  gsap.timeline({
    scrollTrigger: {
      trigger: ".cont03",
      start: "0% 0%",
      pin: true,
      scrub: 1,
      // markers:true,
    },
  });

  const slides = document.querySelectorAll(
    ".cont05 .inner .swiper01 .swiper-slide"
  );

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".cont05",
      start: "50% 80%",
      end: "60% 30%",
      scrub: 1,
      // markers: true,
    },
  });

  slides.forEach((slide, i) => {
    tl.from(
      slide,
      {
        x: 200,
        opacity: 0,
        duration: 3,
        ease: "power2.out",
        delay: i * 0.3, // 각 슬라이드마다 0.3초씩 추가 딜레이
      },
      0
    );
  });
});

$("h1").click(function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    1000
  );
});
