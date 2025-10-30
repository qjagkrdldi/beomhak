$(function () {
	var r = 0;
	var s = 3;
	function AA() {

		r = r + s;
		if (r >= 360) { r = 0 };
		$("h1").text(r);
		$("#rullet").css({ transform: "rotate(" + r + "deg)" });
		s = s - 0.001 * z;
		if (s <= 0) {
			if ((r >= 0) && (r <= 45)) { $(".b1").slideDown(); } //10000
			if ((r > 45) && (r <= 90)) { $(".b2").slideDown(); } //500
			if ((r > 90) && (r <= 135)) { $(".b3").slideDown(); } // 50
			if ((r > 135) && (r <= 180)) { $(".b4").slideDown(); } //100
			if ((r > 180) && (r <= 225)) { $(".b5").slideDown(); } //1000
			if ((r > 225) && (r <= 270)) { $(".b6").slideDown(); } // 꽝
			if ((r > 270) && (r <= 315)) { $(".b7").slideDown(); } //50
			if ((r > 315) && (r <= 360)) { $(".b8").slideDown(); } //100
			clearInterval(k);
			$(".start").fadeIn();
		}
	}
	var k;
	var z;

	$(".start").click(function () {
		s = 3;
		k = setInterval(AA, 10);
		z = Math.random() * 10;
		$(this).fadeOut();
	});

})
$(function () {
	$(".close").click(function () {
		$(".box").slideUp();
	});
});
