var alreadyHiden = false;
setTimeout(function(){if(!alreadyHiden)hideFirstScreen() }, 5000);

function hideFirstScreen(){
    document.getElementById("firstScreen").style.display = "none";
    alreadyHiden = true;
    
}

var images = document.getElementsByClassName("images");
var i = -1;
var counterSpan = document.getElementById("counterSpan");

var underlined = true;
setInterval(
    function(){
        if(underlined){
        document.getElementById("blinking").style.textDecoration = "none";
        underlined = false;
    }
    else{
        document.getElementById("blinking").style.textDecoration = "underline";
        underlined = true;
    }
    },700
)
var finishedLastCall = true;
function showImg(e){
if(finishedLastCall){    
    finishedLastCall = false;
    if(e=='lastImg'){
        if(i==-1){
            i++;
            images[i].style.transition = "0.6s ease-in-out";
            images[i].setAttribute("class","images hidden-right");
            i=images.length-2;
            console.log(i);
            images[i+1].style.transition = "0.0s";
            images[i+1].setAttribute("class","images hidden-left");
            setTimeout(function(){
            images[i+1].style.transition = "0.6s ease-in-out";
            images[i+1].setAttribute("class","images shown");
            counterSpan.innerHTML = i+2;
            images[i].style.transition = "0s";
            images[i].setAttribute("class","images hidden-left");
            },1)
        }else{
            images[i+1].style.transition = "0.6s ease-in-out";
            images[i+1].setAttribute("class","images hidden-right");
            setTimeout(function(){
            images[i].style.transition = "0s";
            images[i].setAttribute("class","images hidden-left");
            },1);
            images[i].style.transition = "0.6s ease-in-out";
            images[i].setAttribute("class","images shown");
            counterSpan.innerHTML = i+1;
            i--;
        }
    }
    else{       
        i++;
        if(i==8){                      
            images[i].style.transition= "0.6s ease-in-out";
            images[i].setAttribute("class","images hidden-left");
            i=-1;
            images[i+1].style.transition= "0.6s ease-in-out";
            images[i+1].setAttribute("class","images shown");  
            counterSpan.innerHTML = i+2;         
        }else{
            images[i].style.transition= "0.6s ease-in-out";
            images[i].setAttribute("class","images hidden-left");      
            images[i+1].style.transition= "0.6s ease-in-out";
            images[i+1].setAttribute("class","images shown");
            counterSpan.innerHTML = i+2;
        }
        if(i==1){
            images[images.length-1].style.transition = "0s";
            images[images.length-1].setAttribute("class","images hidden-right");
        }
        if(i==7){
            setTimeout(function(){
                for(let i = 0;i<images.length-1;i++){
                images[i].style.transition = "0s";
                images[i].setAttribute("class","images hidden-right");
                }
            },600)
        }
       
    }
    setTimeout(function(){
        finishedLastCall = true;
    },600)
    }
    
}