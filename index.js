// 슬라이드 이미지 변수 저장
const slide = document.querySelectorAll('.myslide');

// 각 버튼 및 변경 사항 저장 저장
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');
const numbertxt = document.querySelectorAll('.numbertext');
const contxt = document.querySelectorAll('.text');

let click = 0;

slide[0].style.display = 'block';
numbertxt[click].textContent = `${click+1} / ${slide.length}`;
contxt[click].textContent = `Cruella ${click+1}`;

// 이전 화살표 버튼 클릭시
prev.addEventListener('click', function(){
  if(click > 0){
    for(let i = 0; i < slide.length; i++ ){
      slide[i].style.display = 'none';
      dots[i].classList.remove('active');
    }
    click = click - 1
    slide[click].style.display = 'block';
    dots[click].classList.add('active');
    numbertxt[click].textContent = `${click+1} / ${slide.length}`;
    contxt[click].textContent = `Cruella ${click+1}`;
  }
});

// 다음 화살표 버튼 클릭시
next.addEventListener('click', function(){
  click = click + 1
  if(click < slide.length) {
    for(let j = 0; j < slide.length; j++ ){
      slide[j].style.display = 'none';
      dots[j].classList.remove('active');
    }
    
    slide[click].style.display = 'block';
    dots[click].classList.add('active');
    numbertxt[click].textContent = `${click+1} / ${slide.length}`;
    contxt[click].textContent = `Cruella ${click+1}`;
  }
});

// dot 버튼 클릭시
for(let n = 0; n < dots.length; n++){
  dots[n].addEventListener('click', function(){
    activeDot(n);
  })
}

function activeDot(idx){
  for(let j = 0; j < slide.length; j++ ){
    slide[j].style.display = 'none';
    dots[j].classList.remove('active');
  }

  slide[idx].style.display = 'block';
  dots[idx].classList.add('active');
  numbertxt[idx].textContent = `${idx+1} / ${slide.length}`;
  contxt[idx].textContent = `Cruella ${idx+1}`;

}


// 슬라이드쇼 실행

function slideShow(){
  for(let j = 0; j < slide.length; j++ ){
    slide[j].style.display = 'none';
    dots[j].classList.remove('active');
  }
  click++;
  if(click > slide.length){click = 1}
  slide[click-1].style.display = 'block';
  dots[click-1].classList.add('active');
  numbertxt[click-1].textContent = `${click} / ${slide.length}`;
  contxt[click-1].textContent = `Cruella ${click}`;

  setTimeout(slideShow, 2000);
}
slideShow();