function main() {var body = document.getElementsByTagName("slider")[0];
body.addEventListener("touchstart", swipeDown);
body.addEventListener("touchend", swipeUp);
var swipeX;
var swipeY;
var swipeRight = 0;

function swipeDown(e) {
    swipeRight = 0;
    swipeX = e.touches[0].clientX;
    swipeY = e.touches[0].clientY;
    console.log(swipeX)

}

function swipeUp(e) {

    var xx = e.changedTouches[0].clientX;

    var yy = e.changedTouches[0].clientY;
    console.log(e.clientX)
    console.log(swipeX - xx)
    if ((Math.abs(swipeX - xx) > 100)) {

        if (swipeX - xx < 0) {

            decreaseRow();

        } else {
            if (currNum > 0) {
                currNum--;

            }
        }

        SwipePage(currNum);

    }



}
}
main();