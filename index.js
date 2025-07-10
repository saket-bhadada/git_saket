document.querySelector(".contact").addEventListener("click",function (){
    var button = this.innerHTML;
    buttonanimation(button);
})
function buttonanimation(key){
    var activebutton = document.querySelector("."+key);
    activebutton.classList.add("pressed");
    setInterval(function(){
        activebutton.classList.remove("pressed");
    },100);
}