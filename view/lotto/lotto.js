        
    const numbersDiv = document.querySelector('.numbers');
    const drawBtn = document.querySelector('#draw');
    const resetBtn = document.querySelector('#reset');
    let lottonumbers = [];
    const colors = ['tomato', 'teal', 'orange', 'purple', 'blue'];

    // 공 생성 하기, 색 설정

    function paintNum(number){
        let colorIndex = Math.floor(number/10);
        let eachnumDiv = document.createElement('div');
        eachnumDiv.style.backgroundColor = colors[colorIndex];
        eachnumDiv.classList.add('eachnum');
        eachnumDiv.textContent = number
        numbersDiv.appendChild(eachnumDiv);
    }
    resetBtn.style.display = 'none'

    // 추천버튼 눌렀을때 - 공랜덤설정 후 배열 집어넣기

    drawBtn.addEventListener('click',function(){
        while(lottonumbers.length<6){
            let ran = Math.floor(Math.random() * 45) + 1
            if(lottonumbers.indexOf(ran) === -1){
            lottonumbers.push(ran)
            paintNum(ran)
            }
        }
        drawBtn.style.display = 'none'
        resetBtn.style.display = 'inline-block'
    })

    // 리셋버튼 눌렀을때

    resetBtn.addEventListener('click',function(){
        lottonumbers.splice(0,6);
        numbersDiv.innerHTML = '';
        drawBtn.style.display = 'inline-block'
        resetBtn.style.display = 'none'
    })