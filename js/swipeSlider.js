function main() {
    var body = document.getElementsByTagName("slider")[0];
    body.addEventListener("touchstart", swipeDown);
    body.addEventListener("touchend", swipeUp);
    var swipeX;
    
    function swipeDown(e) {
        swipeX = e.touches[0].clientX;
        

    }

    function swipeUp(e) {

        var xx = e.changedTouches[0].clientX;

     
        if ((Math.abs(swipeX - xx) > 100)) {

            if (swipeX - xx < 0) {

                decreaseRow();

            } else {
                if (currNum > 0) {
                    currNum--;

                }
            }


        }



    }
}
main();