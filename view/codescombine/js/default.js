var gnbList;

window.onload=function(){ //페이지가 로딩된 후 실행

gnbList = document.getElementsByClassName('gnb_list');
gnbList[0].style.left='-70%';

}

function gnbBtn(){//gnb_btn을 눌렀을때 할일
	gnbList[0].style.left='0%';
}
function closeGnb(){//close를 눌렀을때 할일
gnbList[0].style.left='-70%';
}
