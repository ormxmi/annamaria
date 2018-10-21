var alreadyHiden = false;
setTimeout(function(){if(!alreadyHiden)hideFirstScreen() }, 5000);
function hideFirstScreen(){
    document.getElementById("firstScreen").style.display = "none";
    alreadyHiden = true;
    showImg();
}
var images = document.getElementsByClassName("images");
var i = -1;
var counterSpan = document.getElementById("counterSpan");
function showImg(e){
    if(e==="lastImg"){
        if(i==0){
            images[i].style.display = "none";
            i=images.length-1;
            images[i].style.display = "block";
            counterSpan.innerHTML = i+1;
        }else{
        images[i].style.display = "none";
        i--;
        images[i].style.display = "block";
        counterSpan.innerHTML = i+1;
        }
    }
    else{
        i++;
        if(i==images.length) //hides the last image if it goes back to the first
        {
            images[images.length-1].style.display = "none";
            i=0;
        }
        images[i].style.display = "block"; //make the next image appear
        counterSpan.innerHTML = i+1;
        if(i>=1)images[i-1].style.display = "none"; //hides the last image
        
    }
}
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
