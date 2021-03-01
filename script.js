const rtArrow = document.querySelector(".rightArrow");
const imageTrack =document.querySelector(".imgTrack");
const muralImg = document.querySelectorAll(".muralPic");
let counter = 0;
const size = muralImg[0].clientWidth;
//problems with size = 0
//problems with slide size when resizing window
imageTrack.style.transform = 'translateX(' + (-size * counter) + 'px)';


const displayTest = document.querySelector('.test');
console.log(displayTest)


rtArrow.addEventListener("click",function(){
let picSize = muralImg[0].clientWidth;
console.log(picSize);
console.log(counter)
console.log(picSize)
 counter++;
 imageTrack.style.transform = 'translateX(' + (-picSize * counter) + 'px)';
 
 
 })
 

window.addEventListener('resize', function () { 
    console.log("cant figure this out");
});