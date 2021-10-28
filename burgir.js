var bodEl = document.querySelector("body");
var button = document.querySelector("#burger");
var menyEl = document.querySelector(".meny");
var coverEl = document.querySelector(".cover");
button.addEventListener("click", meny);
coverEl.addEventListener("click",hide);

function meny(){
    menyEl.style.width="20vw";
    coverEl.style.display="block";
}
function hide(){
    menyEl.style.width="0vw";
    coverEl.style.display="none";
}
