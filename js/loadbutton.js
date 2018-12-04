(function () {
    var cnt = 6;
    let load = document.getElementsByClassName("load")[0];

    load.addEventListener("click", loadMovies);

    function loadMovies() {

        let movie = document.getElementsByClassName("movie");
        for (let i = cnt; i < cnt + 3; i++) {

            if (movie[i] != undefined)
                movie[i].style.display = "block";
        }
        cnt = cnt + 3;

    }
})();
