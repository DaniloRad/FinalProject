(function () {


    function modalWindow(e) {


        let divNode = e.target;
        while (!divNode.classList.contains("movie")) {
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
    let exit = document.getElementsByClassName("exit")[0];
    exit.addEventListener("click", Exit);

    function Exit(e) {

        document.getElementsByClassName("noneClick")[0].style.pointerEvents = "auto";
        document.getElementsByClassName("modal_window")[0].style.display = "none";




    }
})();