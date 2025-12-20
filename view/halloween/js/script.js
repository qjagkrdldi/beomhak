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

$(function(){
  gsap.registerPlugin(ScrollTrigger);
  let list = gsap.utils.toArray('.cont04 ul li');

  let scrollTween = gsap.to(list,{
    xPercent: - 100*(list.length - 1),
    ease:'none',
    scrollTrigger:{
      trigger:'.cont04',
      pin:true,
      scrub:1,
     start:'center center',
      end:'200%',
      // markers:true
    }
  });
})

//splitting.js
$(function () {
  Splitting();
});

$(function () {
  gsap.registerPlugin(ScrollTrigger);

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
