window.onload = function () {
    $('.mm').click(function () {//각 메뉴를 클릭했을때
        $('.pop').css({ overflow: "hidden" });//pop스크롤없앰
        ///// 01 시작  /////
        $(this).stop().next().show(0, function () {
            $('.pop').stop().animate({ scrollTop: 0 }, 0);
            $(this).hide();
        });
        $(this).stop().next().show(500, function () {
            $('body').css({ overflow: "hidden" });//body스크롤없앰
            $('.pop').css({ overflow: "auto" });
            $('.close').css({ right: 100 + 17 });
            // });
        });	  //이것(.mm) 안의  .pop을 보이게함
        return false;
    });

    $('.close').click(function () {//close눌렀을때
        $('.close').css({ right: 100 });
        $('.pop').hide(500); //.pop을 안보이게함
        $('body').css({ overflowY: "auto" });//body스크롤생김
        return false;
    });

    /////// 메뉴 클릭시 스크롤이동 효과
    var scrollSpeed = 1000; //속도(1000=1초)
    var esm = "easeInOutQuint" //easing설정
    $("#gnb a, .nav a, #gnb2 a, h1 a, #about_me a").click(function () {
        var target = $($(this).attr("href")).offset().top
        $("html,body").stop().animate({ scrollTop: target }, scrollSpeed, esm);
        return false;
    });
    $("#header").hide();
    $("#container").masonry({
        itemSelector: '.box',
        columnWidth: 0
    });
    $(window).scroll(function () { //스크롤하는동안

        var b = $(document).scrollTop();//스크롤높이값(얼마만큼 스크롤했느냐)
        $("#tt").text(b);//스크롤값 출력

        if ((b >= 190) && (b < 190 + $("#container").height())) {	//ART WORK 구간
            $("#gnb li a").css({ color: "#767676", fontWeight: "normal" });
            $("#gnb li:eq(1) a").css({ color: "#E50914", fontWeight: "bold" });
        }
        if ((b >= 190 + $("#container").height()) && (b < 190 + $("#container").height() + $("#about_me").height())) {	//about me 구간
            $("#gnb li a").css({ color: "#767676", fontWeight: "normal" });
            $("#gnb li:eq(2) a").css({ color: "#E50914", fontWeight: "bold" });
        }

        var b = $(document).scrollTop();
        var windowWidth = $(window).width();
        if (windowWidth > 500) {
            if (b > 100) {
                $("#header").stop().slideDown(300);
            }
            else {
                $("#header").stop().slideUp(300);
            }
        }
    });


    ///////////////// gnb2 /////////////////////////////////////

    $("#gnb2 li:eq(0)").click(function () {
        $("#gnb2 li a").css({ color: "#777" });
        $("a", this).css({ color: "#E50914" });
        $(".box").show();
        $("#container").stop().masonry();
        $(".pop").css({ position: "fixed" })
        $('html,body').stop().animate({ scrollTop: 177 }, 700);
        return false;
    });

    $("#gnb2 li:eq(2)").click(function () {
        $("#gnb2 li a").css({ color: "#777" });
        $("a", this).css({ color: "#E50914" });
        $(".box").show();
        $(".cod").hide();
        $("#container").stop().masonry();
        $(".pop").css({ position: "fixed" })
        $('html,body').stop().animate({ scrollTop: 177 }, 700);
        return false;
    });

    $("#gnb2 li:eq(1)").click(function () {
        $("#gnb2 li a").css({ color: "#777" });
        $("a", this).css({ color: "#E50914" });
        $(".box").show();
        $(".design").hide();
        $("#container").stop().masonry(function () {
            $(".pop").css({ position: "fixed" })

        });
        $('html,body').stop().animate({ scrollTop: 177 }, 700);
        return false;
    });

    gsap.registerPlugin(ScrollTrigger)

    gsap.utils.toArray('.imgBox').forEach(function (imgBox) {
    // toArray 인스턴스를 배열로 만드는 메소드
    gsap.timeline({
      scrollTrigger: {
        trigger: imgBox,
        start: '80% 100%',
        toggleClass: { 'targets': imgBox, className: 'active' },
        scrub: 1,
        // markers:true
      }
    })
  });
}


