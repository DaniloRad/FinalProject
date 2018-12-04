(function () {




    function modalWindow(e) {

        let cnt = 0;
        let divNode = e.target;
        while (!divNode.classList.contains("movie") && cnt < 2) {
            cnt++;
            divNode = divNode.parentElement;
        }
        if(divNode.classList.contains("movie")) {

       
        divNode = divNode.childNodes;
        //sad je divNode sig movie
        let modalWindow = document.getElementsByClassName("modal_window")[0];
        let modalWindowImg = document.getElementsByClassName("modal_window_img")[0];
        let modalWindowAbout = document.getElementsByClassName("modal_windows_about")[0];

        document.getElementsByClassName("noneClick")[0].style.pointerEvents = "none";

        modalWindow.style.display = "flex";

        modalWindowImg.innerHTML = divNode[0].innerHTML;
        let pNodes = divNode[1].childNodes;
        var htmlCode = "<p> Name: " + pNodes[0].innerHTML + "</p>";
        htmlCode = htmlCode + "<p> Vote: " + pNodes[1].innerHTML + "</p>";
        htmlCode = htmlCode + "<p> Date: " + pNodes[2].innerHTML + "</p>";
        htmlCode = htmlCode + "<p> Genre: " + pNodes[3].innerHTML + "</p>";
        htmlCode = htmlCode + "<p> Overview: " + pNodes[4].innerHTML + "</p>";
        modalWindowAbout.innerHTML = htmlCode;


         }

    }
    if (document.getElementsByClassName("best")[0] !== undefined) {
        let best = document.getElementsByClassName("best")[0];
        best.addEventListener("click", modalWindow);
        let topRated = document.getElementsByClassName("top_rated")[0];
        topRated.addEventListener("click", modalWindow);

    } else {
        let list = document.getElementsByClassName("list")[0];
        list.addEventListener("click", modalWindow);

    }

    let exitButton = document.getElementsByClassName("exit")[0];
    exitButton.addEventListener("click", exitBtn);

    function exitBtn(e) {


        document.getElementsByClassName("modal_window")[0].style.display = "none";
        document.getElementsByClassName("noneClick")[0].style.pointerEvents = "auto";




    }
})();
