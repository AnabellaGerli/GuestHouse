var carousel = document.getElementById("image-carousel")
var buttonLeft = document.getElementById("button-left")
var buttonRight = document.getElementById("button-right")
var clicks = 0
var viewportWidth = window.innerWidth

console.log(carousel)
console.log(buttonLeft)
console.log(buttonRight)

buttonRight.onclick = () => {
    clicks++;
    carousel.style.left = "-500" * clicks + "px" ;
    if (viewportWidth > "900" && clicks >= 2)
    {clicks = 2}
}

buttonLeft.onclick = () => {
    clicks --;
    if (viewportWidth > "900" && clicks <= 0) {
        clicks = 0
    }

    carousel.style.left = "-500" * clicks + "px";

}
