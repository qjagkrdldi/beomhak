const snowContent = ['&#10052;','&#10053;','&#10054;'];
const snowContainer = document.querySelector('#snow-container');

const random = (num)=> Math.floor(Math.random()*num);

const getRandomStyle = ()=>{
  const top = random(100);
  const left = random(100);
  const duration = random(10)+10;
  const size = random(25);
  const rotate = random(30);
  return `
    top:${top}%;
    left:${left}%;
    font-size:${size}px;
    transform: rotate(${rotate}deg);
    animation-duration:${duration}s;
  `
}

const createSnow = (num)=>{
  for(let i = num; i>0; i--){
    let snow = document.createElement('div');
    snow.className='snow';
    snow.style.cssText=getRandomStyle();
    snow.innerHTML= snowContent[random(3)]
    snowContainer.appendChild(snow);
  }
  
}
window.addEventListener('load',()=>{
  createSnow(30)
})

const removeSnow = () =>{
  snowContainer.classList.toggle('hide');
}

snowContainer.addEventListener('click',()=>{
  removeSnow()
})

  let tl = gsap.timeline({ repeat: -1, repeatDelay: 5 }); // 무한 반복

gsap.utils.toArray(".title div").forEach((el, i) => {
  tl.from(el, {
    autoAlpha: 0,
    y: i * -50,
    scale: i *.5,
    ease: "power3.inOut",
    duration: 2
  }, i * 0.1); // 순차적 실행
});