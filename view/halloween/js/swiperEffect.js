function ImgEffect(thisSlide){

	var obj = $(thisSlide).find('.effect');
	var makeHtml = '';
	var row;
	var columns;
	var setStyle = [];
	var customEffect = false;

	$('.effect').find('.img_box').remove();

  row = 4;
  columns = 8;
  setStyle = '';

	rowHeight = 100/row + '%';
	columnsWidth = 100/columns + '%';
	imgWidth = 100*columns + '%';
	imgHeight = 100 * row + '%';

	for(var i=0; i < row; i++){

		for(var j=0; j< columns; j++){
			var delaySpeed = ((columns-j) - (i*0.5)) * 0.25;
			var left = -j*100 + '%';
			var top = -i * 100 + '%';

			if(!customEffect){
				makeHtml += '<div class="img_box" style="'+setStyle+';width:'+ columnsWidth +'; height:'+ rowHeight +'; transition-delay:'+ delaySpeed +'s;">';
				makeHtml += '<div class="img_position" style="width:' + imgWidth +'; height:'+ imgHeight +'; left:'+left+'; top:'+top+';"></div>';
				makeHtml += '</div>';
			}else{
				makeHtml += '<div class="img_box" style="'+setStyle[j]+';width:'+ columnsWidth +'; height:'+ rowHeight +';">';
				makeHtml += '<div class="img_position" style="width:' + imgWidth +'; height:'+ imgHeight +'; left:'+left+'; top:'+top+';"></div>';
				makeHtml += '</div>';
			}
		}
	}

  $(obj).append(makeHtml);
  setTimeout(function () {
    $(obj).find(".img_box").addClass("active");
  }, 200);
}
// effect

$(function () {
  var swiper = new Swiper(".mySwiper01", {
    effect:'fade',
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
        const thisSlide = $(this.slides[this.activeIndex]);
        ImgEffect(thisSlide);
      },
      slideChange: function () {
        currentSlide.textContent = String(this.realIndex + 1).padStart(2, "0");
        var thisSlide = $(".swiper").find(".swiper-slide").eq(this.activeIndex);
        ImgEffect(thisSlide);
      },
      autoplayTimeLeft(s, time, progress) {
        progressBar.style.width = `${(1 - progress) * 100}%`;
      },
    },
    resize() {
      progressBar.style.width = `${(1 - progress) * 100}%`;
    },
  });
});
