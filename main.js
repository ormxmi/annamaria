setTimeout(()=>{
    document.getElementsByClassName("loading-div")[0].style.display = "none";
    document.getElementsByClassName("loading-div-2")[0].style.display = "none";

    
},6500)
setTimeout(()=>{
    document.getElementsByTagName("NAV")[0].style.transform = "translateY(100%)"; 
    document.getElementsByTagName("NAV")[0].style.opacity = "1"; 
},(5800+  150))
setTimeout(()=>{
    document.getElementsByClassName("nav-container")[0].style.backgroundColor = "pink";
},(5800+  750))
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
let width = window.innerWidth;
let contentBackground = $('.content-background')[0];
let contentCarousel = $('.content-images')[0];
let transformYBackground = 0;
let transformYCarousel = 0;
let notTransforming = true; 
let timeOut,timeOut2, timeOutDesktopMenuOpacity = false;
let imagesTransform = [0,0,0,0,0,0,0,0,0];
let carouselHeight = contentCarousel.clientHeight;
let windowHeight = window.innerHeight;
let openedDesktopMenu = false;
$(document).ready(function(){
    $('body').bind('mousewheel DOMMouseScroll', function(e){
        timeOutDesktopMenuOpacity = true;
        clearTimeout(timeOut2);
        timeOut2 =  setTimeout(()=>{
            timeOutDesktopMenuOpacity = false;
        },1800)
        if(e.originalEvent.wheelDelta > 0) {
            if(transformYBackground <= -25) transformYBackground+=25;
            if(transformYCarousel <= -50) transformYCarousel+=50;
            if(!openedDesktopMenu){
                document.getElementsByClassName("signature-image")[0].style.opacity = "0";
                document.getElementsByClassName("content-menu-container")[0].style.opacity = "0";
            }
            
        }
        else{
            if( Math.abs(transformYCarousel) <= carouselHeight - windowHeight + 55 ){
                transformYBackground-=25;
                transformYCarousel-=50;
                if(!openedDesktopMenu){
                    document.getElementsByClassName("signature-image")[0].style.opacity = "0";
                    document.getElementsByClassName("content-menu-container")[0].style.opacity = "0";
                }
            }
            
        }

        
        if(notTransforming){
            clearTimeout(timeOut);
            notTransforming = false;
            contentBackground.style.transform = "translateY("+transformYBackground+"px)";
            contentCarousel.style.transform = "translate(-50%, "+transformYCarousel+"px)";
            document.getElementsByClassName("signature-image-desktop")[0].style.transform = "translate("+Math.abs(transformYBackground/12)+"px ,"+Math.abs(transformYBackground/2)+"px)";

            timeOut =  setTimeout(()=>{
                notTransforming = true;
            },1400)
        }
       
    });
});
setInterval(()=>{ //desktop images carousel animation smoother
    contentBackground.style.transform = "translateY("+transformYBackground+"px)";
    contentCarousel.style.transform = "translate(-50%, "+transformYCarousel+"px)";
    document.getElementsByClassName("signature-image-desktop")[0].style.transform = "translate("+Math.abs(transformYBackground/12)+"px ,"+Math.abs(transformYBackground/2)+"px)";
    if(!timeOutDesktopMenuOpacity && !openedDesktopMenu){
        document.getElementsByClassName("signature-image")[0].style.opacity = "1";
        document.getElementsByClassName("content-menu-container")[0].style.opacity = "1";
    }
},170)
var lastScrollTop = 0;
 
imagesSections.on('touchmove', function(event) { //hide or show nav on scroll
    
    var distanceY = imagesSections.offset().top;
    if (distanceY > lastDistanceY){
        $('.nav-container').css("transform","");
     
    } else if(distanceY < lastDistanceY) {
        $('.nav-container').css("transform","translateY(-75px)");
        
    }
    lastDistanceY = distanceY;
});

document.getElementsByClassName("mobile-menu-container")[0].onclick = function(){ // click the "menu"
    this.parentElement.parentElement.style.transform = "translateY(100vh)";
    this.parentElement.style.opacity = "0";
    document.getElementsByClassName("menu-selection")[0].style.opacity = "1";
    document.getElementsByClassName("div-padding-selection")[0].style.backgroundColor = "pink";

    document.getElementById("js-br-menu").style.transform = "scaleX(1) translate(-50%)";
}
document.getElementById("js-close-menu").onclick = function(){ // click the close menu button
    document.getElementsByClassName("mobile-menu-container")[0].parentElement.parentElement.style.transform = "";
    document.getElementsByClassName("mobile-menu-container")[0].parentElement.style.opacity = "1";
    document.getElementsByClassName("div-padding-selection")[0].style.backgroundColor = "white";
    document.getElementById("js-br-menu").style.transform = "scaleX(0) translate(-50%)";
}

document.getElementById("js-menu-about").onclick = function() { // click the about link in menu
    document.getElementById("js-menu-nav").style.transform = "translate(100%, 100%)";
    document.getElementsByClassName("about")[0].style.transform= "translate(100%, 100%)";
    document.getElementsByClassName("about")[0].style.opacity = "1";
    document.getElementsByClassName("div-padding-selection")[0].style.backgroundColor = "#1F2041";
    document.getElementsByClassName("nav-container")[0].style.backgroundColor = "#1F2041";
    document.getElementsByClassName("border-bottom-triangle")[0].style.opacity = "1";

}
document.getElementById("js-about-return-to-menu").onclick = function() { // close the about menu
    document.getElementById("js-menu-nav").style.transform = "";
    document.getElementsByClassName("about")[0].style.transform= "";
    document.getElementsByClassName("about")[0].style.opacity = "0";
    document.getElementsByClassName("div-padding-selection")[0].style.backgroundColor = "pink";
    document.getElementsByClassName("nav-container")[0].style.backgroundColor = "pink";
}
document.getElementById("js-menu-contact").onclick = function() { // click the contact link in menu
    document.getElementById("js-menu-nav").style.transform = "translate(-100%, -100%)";
    document.getElementsByClassName("contact")[0].style.transform= "translate(-100%, -100%)";
    document.getElementsByClassName("contact")[0].style.opacity = "1";
    document.getElementsByClassName("div-padding-selection")[0].style.backgroundColor = "#92B7D1";
    document.getElementsByClassName("nav-container")[0].style.backgroundColor = "#92B7D1";
    document.getElementsByClassName("border-bottom-triangle")[1].style.opacity = "1";

}
document.getElementById("js-home-return-to-menu").onclick = function() { // close the contact menu
    document.getElementById("js-menu-nav").style.transform = "";
    document.getElementsByClassName("contact")[0].style.transform= "";
    document.getElementsByClassName("contact")[0].style.opacity = "0";
    document.getElementsByClassName("div-padding-selection")[0].style.backgroundColor = "pink";
    document.getElementsByClassName("nav-container")[0].style.backgroundColor = "pink";
    document.getElementsByClassName("border-bottom-triangle")[1].style.opacity = "0";

}
document.getElementById("js-content-menu-button-hover").onclick = function(){ // click the menu button in desktop viewport
    let el1 = document.getElementById("js-desktop-menu-back-btn");
    let el2 = document.getElementById("js-desktop-menu-menu-btn");
    document.getElementsByClassName("content-menu-about-outer")[0].style.display = "block";
    if(!openedDesktopMenu){
        openedDesktopMenu = true;
        document.getElementsByClassName("content-menu-desktop")[0].style.transform = "rotate(0deg)";
        document.getElementsByClassName("content-background")[0].style.opacity = "0";
        document.getElementsByClassName("content-images")[0].style.opacity = "0";
        document.getElementById("js-menu-desktop-inner").style.opacity = "1";
        fadeInLetters(el1, el2, "down");
    }
    else {
        openedDesktopMenu = false;
        document.getElementsByClassName("content-menu-desktop")[0].style.transform = "";
        document.getElementsByClassName("content-background")[0].style.opacity = "";
        document.getElementsByClassName("content-images")[0].style.opacity = "";
        document.getElementById("js-menu-desktop-inner").style.opacity = "0";
        document.getElementsByClassName("content-menu-about-outer")[0].style.display = "none";
        fadeInLetters(el1, el2, "up");
    }
    
}
function fadeInLetters(el1, el2, dir) {
    if(dir == "down") {
        for(let i = 0; i < el1.children.length; i++){
            el1.children[i].style = "transform: translateY(100%); opacity: 1;"
            el2.children[i].style = "transform: translateY(100%); opacity: 0;"
        }
    }
    else if (dir == "up") {
        for(let i = 0; i < el1.children.length; i++){
            el1.children[i].style = "transform: translateY(0); opacity: 0;"
            el2.children[i].style = "transform: translateY(); opacity: 1;"
        }
    }
}
document.getElementsByClassName("menu-dekstop-button-outer")[0].onclick = function() { // click the about menu desktop
    //document.getElementsByClassName("content-menu-desktop")[0].style.backgroundColor = "#1F2041";
    document.getElementsByClassName("signature-image")[0].style.filter = "invert(1)";
    document.getElementsByClassName("content-menu-container")[0].style.opacity = "0";
    document.getElementsByClassName("content-menu-about-outer")[0].style.transform = "translateX(100%)";
    document.getElementsByClassName("content-menu-about-outer")[0].style.opacity = "1";
    document.getElementsByClassName("content-menu-contact-outer")[0].style.transform = "";
    document.getElementsByClassName("content-menu-inner")[0].style.display = "block";
    setTimeout(()=>{
        document.getElementsByClassName("content-menu-container")[0].style.display = "none";
    },500)
}
document.getElementsByClassName("menu-dekstop-button-outer")[1].onclick = function() { // click the contact menu desktop
    //document.getElementsByClassName("content-menu-desktop")[0].style.backgroundColor = "#92B7D1";
    document.getElementsByClassName("signature-image")[0].style.filter = "invert(1)";
    document.getElementsByClassName("content-menu-container")[0].style.opacity = "0";
    document.getElementsByClassName("content-menu-contact-outer")[0].style.transform = "translateX(-100%)";
    document.getElementsByClassName("content-menu-contact-outer")[0].style.opacity = "1";
    document.getElementsByClassName("content-menu-about-outer")[0].style.transform = "";


    setTimeout(()=>{
        document.getElementsByClassName("content-menu-container")[0].style.display = "none";
    },500)
}
document.getElementsByClassName("return-menu-outer")[0].onclick = function() { // click the back arrow in "about" menu
    document.getElementsByClassName("signature-image")[0].style.filter = "";
    document.getElementsByClassName("content-menu-about-outer")[0].style.transform = "";
    document.getElementsByClassName("content-menu-about-outer")[0].style.opacity = "0";
    document.getElementsByClassName("content-menu-container")[0].style.display = "block";
    setTimeout(()=>{
        document.getElementsByClassName("content-menu-container")[0].style.opacity = "1";
    },20)
}
document.getElementsByClassName("return-menu-outer")[1].onclick = function() { // click the back arrow in "contact" menu
    document.getElementsByClassName("signature-image")[0].style.filter = "";
    document.getElementsByClassName("content-menu-contact-outer")[0].style.transform = "";
    document.getElementsByClassName("content-menu-container")[0].style.display = "block";
    document.getElementsByClassName("content-menu-contact-outer")[0].style.opacity = "0";

    setTimeout(()=>{
        document.getElementsByClassName("content-menu-container")[0].style.opacity = "1";
    },20)

}