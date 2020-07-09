var carousel = document.getElementById("image-carousel")
var buttonLeft = document.getElementById("button-left")
var buttonRight = document.getElementById("button-right")
var clicks = 0


buttonRight.onclick = () => {
    clicks++;
    carousel.style.left = "-100" * clicks + "px" ;
}

buttonLeft.onclick = () => {
    clicks --;
    carousel.style.left = "-100" * clicks + "px";

}

console.log(carousel)