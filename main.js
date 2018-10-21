var alreadyHiden = false;
setTimeout(function(){if(!alreadyHiden)hideFirstScreen() }, 5000);
function hideFirstScreen(){
    document.getElementById("firstScreen").style.display = "none";
    alreadyHiden = true;
    showImg();
}
var position = [['10%','5%'],['10%','5%'],['10%','5%'],['10%','5%']]
var images = document.getElementsByClassName("images");
var i = 0;
function showImg(){
    if(i==images.length) //hides the last image if it goes back to the first
    {
        images[images.length-1].style.display = "none";
        i=0;
    }
    images[i].style.display = "block"; //make the next image appear
    
    if(i>=1)images[i-1].style.display = "none"; //hides the last image
    i++;
    
}
var underlined = true;
setInterval(
    function(){
        if(underlined){
        document.getElementsByTagName("SPAN")[0].style.textDecoration = "none";
        underlined = false;
    }
    else{
        document.getElementsByTagName("SPAN")[0].style.textDecoration = "underline";
        underlined = true;
    }
    },700
)
