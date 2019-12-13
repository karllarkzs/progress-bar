let active = document.querySelector('.active');
let progress = document.querySelector('.progress');
let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');

function isPrev(){
  if(active.previousElementSibling){
    prevBtn.style.display='inline-block';
  }
  else{
    prevBtn.style.display ='none';
  }
}
function isNext(){
  if(active.nextElementSibling){
    nextBtn.style.display = 'inline-block';
  }else{
    nextBtn.style.display ='none';
  }
}
prevBtn.addEventListener('click', function(){
  let prevElem = active.previousElementSibling;
  active.classList.remove('active');
  active = prevElem;
  active.classList.add('active');

  progress.style.width = active.attributes[1].value+'%';

  isPrev();
  isNext();
});

nextBtn.addEventListener('click', function(){
  let nextElem = active.nextElementSibling;
  active.classList.remove('active');
  active = nextElem;
  active.classList.add('active');

  progress.style.width = active.attributes[1].value+'%';

  isPrev();
  isNext();

});

isPrev();
isNext();
