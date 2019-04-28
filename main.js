let loadingDivs = document.getElementsByClassName("loading-div");
setTimeout(()=>{
    loadingDivs[0].outerHTML = "";
    loadingDivs[0].outerHTML = "";
},5800)
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
        console.log("down")
   } else {
        console.log("up")
   }
   lastScrollTop = st;
});
let imagesSections = $('.images-sections');
let lastDistanceY = 0;
imagesSections.on('touchmove', function(event) {
    
    var distanceY = imagesSections.offset().top;
    if (distanceY > lastDistanceY){
        $('.nav-container').css("transform","");
    } else if(distanceY < lastDistanceY) {
        $('.nav-container').css("transform","translateY(-100%)");
    }
    lastDistanceY = distanceY;
});
let width = window.innerWidth;
let contentBackground = $('.content-background')[0];
let contentCarousel = $('.content-images')[0];
let transformYBackground = 0;
let transformYCarousel = 0;
let notTransforming = true;
let timeOut;
let imagesTransform = [0,0,0,0,0,0,0,0,0];
let carouselHeight = contentCarousel.clientHeight;
let windowHeight = window.innerHeight;
$(document).ready(function(){
    $('body').bind('mousewheel DOMMouseScroll', function(e){
        if(e.originalEvent.wheelDelta > 0) {
            if(transformYBackground <= -25) transformYBackground+=25;
            if(transformYCarousel <= -50) transformYCarousel+=50;
        }
        else{
            if( Math.abs(transformYCarousel) <= carouselHeight - windowHeight + 55 ){
                transformYBackground-=25;
                transformYCarousel-=50;
            }
            
        }
        if(notTransforming){
            clearTimeout(timeOut);
            notTransforming = false;
            contentBackground.style.transform = "translateY("+transformYBackground+"px)";
            contentCarousel.style.transform = "translate(-50%, "+transformYCarousel+"px)";
            timeOut =  setTimeout(()=>{
                notTransforming = true;
            },1400)
        }
       
    });
});
setInterval(()=>{
    contentBackground.style.transform = "translateY("+transformYBackground+"px)";
    contentCarousel.style.transform = "translate(-50%, "+transformYCarousel+"px)";
},170)
var lastScrollTop = 0;

