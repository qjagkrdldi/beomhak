//<![CDATA[

var sm_x = 0;
var sm_targetX = 0;
var sm_count = 0;
var sm_w = 1920; //이미지가로길이
var sm_num = 5; //이미지갯수
var sm_gap = 300; //이미지 전환 시간 간격
var sm_stop = 300; //메뉴클릭시 잠시 멈춰져있는 시간
var sm_auto = true; //자동실행 사용유무(true/false)
var off_color = "#ccc"; //메뉴 비활성화 글자색
var off_bg = "#ffff"; //메뉴 비활성화 배경
var on_color = "white"; //메뉴 활성화 글자색
var on_bg = "#fcd400"; //메뉴 활성화 배경

function smoothMove(){
	if(sm_auto){
		sm_count++;
		if (sm_count==sm_gap){
			smNext();
			sm_count=0;
		}
	}
	sm_x = sm_x + 0.1*(sm_targetX- sm_x);
	document.getElementById("sm_gall").style.left = sm_x + "px";
}

window.onload=function(){
    setInterval("smoothMove()",10);
	var temp = document.getElementById('sm_set').cloneNode(true);
	document.getElementById('sm_gall').appendChild(temp);
	document.getElementById("sm_gall").style.width=(sm_w*sm_num*2)+"px"
	document.getElementById("sm_set").style.width=(sm_w*sm_num)+"px"
	for(k=1;k<=sm_num;k++){
		document.getElementById("g"+k).style.color=off_color;
		document.getElementById("g"+k).style.background=off_bg;
	}
	document.getElementById("g"+sm_j).style.color=on_color;
	document.getElementById("g"+sm_j).style.background=on_bg;
	document.getElementById("play").style.display="none";
}

var sm_j=1;

function sn(){
	for(k=1;k<=sm_num;k++){
		document.getElementById("g"+k).style.color=off_color;
		document.getElementById("g"+k).style.background=off_bg;
	}
	document.getElementById("g"+sm_j).style.color=on_color;
	document.getElementById("g"+sm_j).style.background=on_bg;

	sm_count= -sm_stop;
}

function smPrev(){
	sm_targetX = sm_targetX +sm_w;
	if ( sm_targetX > 0) {
	    sm_x= -sm_w*sm_num;
	    sm_targetX= -sm_w*(sm_num-1);
	}

	sm_j--;
	if (sm_j <1) { sm_j=sm_num; };
	sn();
}
function smNext(){
	sm_targetX = sm_targetX -sm_w;
	if ( sm_targetX < -sm_w*(sm_num*2-1)) {
	    sm_x= -sm_w*(sm_num-1);
	    sm_targetX= -sm_w*sm_num;
	}

	sm_j++;
	if (sm_j >sm_num) { sm_j=1; };
	sn();
}

function playGall(){
	sm_auto=true;
	document.getElementById("play").style.display="none";
	document.getElementById("stop").style.display="inline";
}
function stopGall(){
	sm_auto=false;
	document.getElementById("play").style.display="inline";
	document.getElementById("stop").style.display="none";
}

//]]>
