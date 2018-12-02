(function () {


    function modalWindow(e) {

        let cnt=0;
        let divNode = e.target;
        while (!divNode.classList.contains("movie") && cnt <4) {
            cnt++;
            divNode = divNode.parentElement;
        }
        divNode = divNode.childNodes;
        //sad je divNode sig movie
        let modalWindow = document.getElementsByClassName("modal_window")[0];
        let modalWindowImg = document.getElementsByClassName("modal_window_img")[0];
        let modalWindowAbout = document.getElementsByClassName("modal_windows_about")[0];

        document.getElementsByClassName("noneClick")[0].style.pointerEvents = "none";

        modalWindow.style.display = "flex";
        modalWindowImg.innerHTML = divNode[0].innerHTML;
        modalWindowAbout.innerHTML = divNode[1].innerHTML;



    }
    let best = document.getElementsByClassName("best")[0];
    best.addEventListener("click", modalWindow);
    let topRated=document.getElementsByClassName("top_rated")[0];
    topRated.addEventListener("click", modalWindow);
    
    let exitButton = document.getElementsByClassName("exit")[0];
    exitButton.addEventListener("click", exit);

    function exit(e) {

        document.getElementsByClassName("modal_window")[0].style.display = "none";
        document.getElementsByClassName("noneClick")[0].style.pointerEvents = "auto";




    }
})();