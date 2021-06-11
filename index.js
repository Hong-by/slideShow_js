// 슬라이드 이미지 변수 저장
const slide = document.querySelectorAll('.myslide');

// 각 버튼 및 변경 항목 저장 저장
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');
const numbertxt = document.querySelectorAll('.numbertext');
const contxt = document.querySelectorAll('.text');
const boxes = document.querySelector('.slideshow-container')

// 슬라이드 초기 값 설정
let click = 0;
let move = click; // 슬라이드 쇼 변수


//슬라이드 출력
function slideimg() {
  slide[move].style.display = 'block';
  dots[move].classList.add('active');
  numbertxt[move].textContent = `${move+1} / ${slide.length}`;
  contxt[move].textContent = `Cruella ${move+1}`;
};
slideimg();

//이미지 초기화
const clearSlide = () => {
  for(let i = 0; i < slide.length; i++ ){
    slide[i].style.display = 'none';
    dots[i].classList.remove('active');
  };
};

//이미지 슬라이드 기능
function slideShow(){
  clearSlide();


  if(move > slide.length-1){
    move = 0;
  } else if (move < 0){
    move=slide.length-1;
  };
  slideimg();
  move += 1;
  
  let stop;
  stop = setTimeout("slideShow()", 2000);

  
  document.querySelector('section').addEventListener("mouseover", ()=>{
    clearTimeout(stop);

  });
  document.querySelector('section').addEventListener("mouseout", ()=>{
    stop = setTimeout("slideShow()", 2000);

  });
  return move;
};
slideShow();

//이전 버튼 클릭시
prev.addEventListener('click', function(){
  clearSlide();
  click -= 1;
  if (click < 0){
    click=slide.length-1;
  }
  move = click;
  slideimg();

});
//다음 버튼 클릭시
next.addEventListener('click', function(){
  clearSlide();
  click += 1;
  if(click > slide.length-1){
    click = 0;
  }
  move = click;
  slideimg();

});


//각각의 닷 버튼 지정
for(let n = 0; n < dots.length; n++){
  dots[n].addEventListener('click', function(){
    activeDot(n);
  });
}

//닷 버튼 클릭시 슬라이드 이동
function activeDot(n){
  clearSlide();
  move = n;
  slideimg();
};









// if (boxes.onmouseover){
//   stopShow();
// } else {
//   startShow();
// };


// slide[0].style.display = 'block';
// numbertxt[click].textContent = `${click+1} / ${slide.length}`;
// contxt[click].textContent = `Cruella ${click+1}`;

// 이전 화살표 버튼 클릭시
// prev.addEventListener('click', function(){
  
//   for(let i = 0; i < slide.length; i++ ){
//     slide[i].style.display = 'none';
//     dots[i].classList.remove('active');
//   }
//   click = click - 1
//   if (click < 0){
//     click=slide.length-1;
//   }
//   slide[click].style.display = 'block';
//   dots[click].classList.add('active');
//   numbertxt[click].textContent = `${click+1} / ${slide.length}`;
//   contxt[click].textContent = `Cruella ${click+1}`;
//   move = click;

// });

// // 다음 화살표 버튼 클릭시
// next.addEventListener('click', function(){

//   for(let j = 0; j < slide.length; j++ ){
//     slide[j].style.display = 'none';
//     dots[j].classList.remove('active');
//   }
//   click = click + 1
//   if(click > slide.length-1){
//     click = 0;
//   }
//   slide[click].style.display = 'block';
//   dots[click].classList.add('active');
//   numbertxt[click].textContent = `${click+1} / ${slide.length}`;
//   contxt[click].textContent = `Cruella ${click+1}`;
// });

// // dot 버튼 클릭시
// for(let n = 0; n < dots.length; n++){
//   dots[n].addEventListener('click', function(){
//     activeDot(n);
//   })
// }

// function activeDot(idx){
//   for(let j = 0; j < slide.length; j++ ){
//     slide[j].style.display = 'none';
//     dots[j].classList.remove('active');
//   }

//   slide[idx].style.display = 'block';
//   dots[idx].classList.add('active');
//   numbertxt[idx].textContent = `${idx+1} / ${slide.length}`;
//   contxt[idx].textContent = `Cruella ${idx+1}`;
//   click = idx;

// }


// 슬라이드쇼 실행

// let slideShow_o =function slideShow(){
//   let auto = click;
//   for(let j = 0; j < slide.length; j++ ){
//     slide[j].style.display = 'none';
//     dots[j].classList.remove('active');
//   }
  
  
//   if(auto > slide.length-1){
//     auto = 0;
//   }
//   if(auto > slide.length){auto = 1}
//   slide[auto].style.display = 'block';
//   dots[auto].classList.add('active');
//   numbertxt[auto].textContent = `${auto+1} / ${slide.length}`;
//   contxt[auto].textContent = `Cruella ${auto+1}`;
//   auto++;
//   setTimeout(slideShow, 5000);
//   return click = auto;
// }
// slideShow_o();

// 함수 안에 지역 변수로 전역값을 받아서 나중에 리턴하여 처리
// 전역 변수(click 변수) 최소화로 정리 해볼것!
// 전역 변수가 많이 사용되면 오류 찾기 힘듬.
// swich 함수로 중복 되는것들을 정리할 수 있을지?? 이벤트 함수로.. 





//이건 아님
// let a = click;
// const clickLoop = (a) => {
//   switch (a){
//     case a < 0 :
//       a = slide.length-1;
//       click = a;
//       return click;
//       break;
//     case a > slide.length-1 :
//       a = 0;
//       click = a;
//       return click;
//       break;
    
//   };
// };  //이거 안되네;;