
// a클릭시 위로 튕기는 이벤트 제거
$(document).on('click','a[href="#"]',function(e){
    e.preventDefault();
})

// 1.approach영역
$(window).on('scroll resize',()=>{
    let scrollPos = 0;
    scrollPos = $(document).scrollTop();
    fix();
    fixHeader();
    fixList();
    
    function fix(){
        let approach = $('.approach').offset().top;
        if(scrollPos > approach){
            $('.fix .text').addClass('on');
        }else{
            $($('.fix .text').removeClass('on'))
        }
        if(scrollPos > 2700){
            $('.fix .text').removeClass('on')
        }
    }

    function fixHeader(){
        if(scrollPos > 80){
            $('header').addClass('on');
        }else{
            $('header').removeClass('on');
        }
    }

    function fixList(){
        $('section.approach .inner .list li a').removeClass('on');
        if(scrollPos > 1250){
            $('section.approach .inner .list li a').removeClass('on');
            $('section.approach .inner .list li:eq(0) a').addClass('on');
        }
        if(scrollPos > 1650){
            $('section.approach .inner .list li a').removeClass('on');
            $('section.approach .inner .list li:eq(1) a').addClass('on');
        }
        if(scrollPos > 2050){
            $('section.approach .inner .list li a').removeClass('on');
            $('section.approach .inner .list li:eq(2) a').addClass('on');
        }
        if(scrollPos > 2550){
            $('section.approach .inner .list li a').removeClass('on');
            $('section.approach .inner .list li:eq(3) a').addClass('on');
        }
        if(scrollPos > 2900){
            $('section.approach .inner .list li a').removeClass('on');
            $('section.approach .inner .list li:eq(4) a').addClass('on');
        }
    }
})

// 2.스크롤이벤트
$(function(){
    $('.animate').scrolla({
        mobile:true,
        once:false
    })
})
// 3.텍스트애니메이션
$(function(){Splitting();})

// gnb
$(function(){
    $('header .gnbBtn').click(()=>{
        $('header nav.gnb').toggleClass('on');
    })
    $('.contents').click(()=>{
        $('header nav.gnb').removeClass('on');
    })
})