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

  const scrollEl = document.querySelector(".scroll");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".cont03",
      start: "0% 80%",
      end: "80% 100%",
      scrub: 1,
    },
  });

  tl.to(".wrap", {
    backgroundColor: "#fff",
    color: "#000",
    ease: "none",
    duration: 5,
  }, 0);

  if (scrollEl) {
    tl.to(scrollEl, {
      opacity: 0,
      ease: "none",
      duration: 5,
    }, 0);
  }

  tl.fromTo(
    ".videoWrap video",
    { clipPath: "inset(60% 60% 60% 60% round 30%)" },
    {
      clipPath: "inset(0% 0% 0% 0% round 0%)",
      ease: "none",
      duration: 10,
    },
    0
  );
});

$("h1").click(function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    1000
  );
});
