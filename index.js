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
    carousel.style.left = "-350" * clicks + "px" ;
    if (viewportWidth > "900" && clicks >= 5)
    {clicks = 5}
    if (viewportWidth < "900" && clicks >= 7)
    {clicks = 7}
}

buttonLeft.onclick = () => {
    clicks --;
    if (viewportWidth > "0" && clicks <= 0) {
        clicks = 0
    }

    carousel.style.left = "-350" * clicks + "px";

}
