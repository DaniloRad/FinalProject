(function () {

    let currentRow = 1;
    let ifInSlider;
    var sliderHTML = document.getElementsByClassName("slider")[0];
    document.getElementsByTagName("body")[0].onkeydown = checkKey;
    let arrayOfGenresAPI;

    function returnArrayOfGenresAPI() {
        fetch("https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=52fc43195daf9730aa9bd854898d0c7a")
            .then(function (response) {
                return response.json();
            })
            .then(function (array) {
                arrayOfGenresAPI = array.genres.slice(0);
            })
    }

    returnArrayOfGenresAPI();

    function loadMovies() {
        const url = "https://api.themoviedb.org/3/trending/all/day?api_key=52fc43195daf9730aa9bd854898d0c7a";
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                return data.results;
            })
            .then(function (array) {
                return array.slice(0, 9);
            })
            .then(function (finalArray) {
                let currentElementOfFinalArray = 0;
                for (let i = 0; i < 3; i++) {
                    let row1 = createRow();
                    document.getElementsByClassName("slider")[0].appendChild(row1);
                    for (let j = 0; j < 3; j++) {
                        let elem1 = createElem(finalArray[currentElementOfFinalArray]);
                        row1.appendChild(elem1);
                        currentElementOfFinalArray++;
                    }
                }
                showRow(currentRow);
                setInterval(function () {
                    showRow(currentRow);
                    increaseRow();
                }, 3000);
            })
    }

    function createRow() {
        let row = document.createElement("div");
        row.setAttribute("class", "row");
        return row;
    }

    document.getElementById("prev").addEventListener("click", function () {
        decreaseRow();
        showRow(currentRow);
    })

    document.getElementById("next").addEventListener("click", function () {
        increaseRow();
        showRow(currentRow);
    })

    function createElem(elemOfArray) {
        //elemOfArray - one element of finalArray
        let pathToImg = "http://image.tmdb.org/t/p/w185/";
        let elem = document.createElement("div");
        elem.setAttribute("class", "element animated rotateIn");
        let img = document.createElement("img");
        img.setAttribute("src", pathToImg + elemOfArray.poster_path);
        img.setAttribute("class", "img");
        elem.appendChild(img);
        elem.style.display = "inline-block";
        addButton(elem, elemOfArray);
        return elem;
    }

    function addButton(parent, elemOfArray) {
        //add read more button
        let btn = document.createElement("button");
        btn.setAttribute("class", "readMore");
        let text = document.createTextNode("Read More");
        btn.appendChild(text);
        parent.appendChild(btn);
        btn.addEventListener("click", function () {
            openModalWindow(elemOfArray);
        });
    }

    function showRow(i) {
        let arrayOfRows = document.getElementsByClassName("row");
        for (let j = 1; j <= 3; j++) {
            if (j === i) {
                arrayOfRows[i].style.display = "block";
            } else {
                arrayOfRows[j].style.display = "none";
            }
        }
    }

    function increaseRow() {
        if (currentRow === 3) {
            currentRow = 1;
        } else {
            currentRow++;
        }
        return currentRow;
    }

    function decreaseRow() {
        if (currentRow === 1) {
            currentRow = 3;
        } else {
            currentRow--;
        }
        return currentRow;
    }

    document.getElementsByClassName("slider")[0].addEventListener("mouseover", isIn);
    document.getElementsByClassName("slider")[0].addEventListener("mouseout", isOut);

    function isIn() {
        ifInSlider = true;
    }

    function isOut() {
        ifInSlider = false;
    }

    function checkKey(e) {
        if (ifInSlider) {
            if (e.keyCode === 37) {
                decreaseRow();
                showRow(currentRow);
            } else if (e.keyCode === 39) {
                increaseRow();
                showRow(currentRow);
            }
        }
    }

    function openModalWindow(elemOfArray) {
        var modalWindow = document.getElementsByClassName("modal_window")[0];
        var modalWindowImg = document.getElementsByClassName("modal_window_img")[0];
        var modalWindowAbout = document.getElementsByClassName("modal_windows_about")[0];
        document.getElementsByClassName("noneClick")[0].style.pointerEvents = "none";
        modalWindow.style.display = "flex";
        modalWindowImg.innerHTML = returnImage(elemOfArray);
        modalWindowAbout.innerHTML = returnDescription(elemOfArray).innerHTML;
    }

    function returnImage(elemOfArray) {
        //creating inner.html for modal window
        let src = "http://image.tmdb.org/t/p/w185/" + elemOfArray.poster_path;
        let i = "<img src = '" + src + "'>";
        return i;
    }

    function returnDescription(elemOfArray) {
        //creating inner.html for modal window
        var movies = document.createElement("div");
        movies.setAttribute("class", "aboutMovies");
        var p1 = document.createElement("p");
        var p2 = document.createElement("p");
        var p3 = document.createElement("p");
        var p4 = document.createElement("p");
        var p5 = document.createElement("p")
        p1.innerHTML = "Name: " + elemOfArray.title;
        p2.innerHTML = "Vote: " + elemOfArray.vote_average;
        p3.innerHTML = "Date: " + elemOfArray.release_date;
        p5.innerHTML = "Overview: " + elemOfArray.overview;
        var arrayOfGenre = movieGenre(elemOfArray.genre_ids);
        var p4_4 = arrayOfGenre[0];
        for (let i = 1; i < arrayOfGenre.length; i++) {
            p4_4 = p4_4 + ", " + arrayOfGenre[i];
        }
        p4.innerHTML = "Genre: " + p4_4;
        movies.append(p1);
        movies.append(p2);
        movies.append(p3);
        movies.append(p4);
        movies.append(p5);
        return movies;
    }

    function movieGenre(arrayMovie) {
        var genreName = [],
            k = 0;
        for (let i = 0; i < arrayMovie.length; i++) {
            for (let j = 0; j < arrayOfGenresAPI.length; j++) {
                if (arrayMovie[i] === arrayOfGenresAPI[j].id) {
                    genreName[k++] = arrayOfGenresAPI[j].name;
                }
            }
        }
        return genreName;
    }

    loadMovies();





    var body = document.getElementsByClassName("slider")[0];
    body.addEventListener("touchstart", swipeDown);
    body.addEventListener("touchend", swipeUp);
    var swipeX;


    function swipeDown(e) {
        swipeRight = 0;
        swipeX = e.touches[0].clientX;
        swipeY = e.touches[0].clientY;

    }

    function swipeUp(e) {

        var xx = e.changedTouches[0].clientX;

        var yy = e.changedTouches[0].clientY;

        if ((Math.abs(swipeX - xx) > 100)) {

            if (swipeX - xx < 0) {

                decreaseRow();
                showRow(currentRow);

            } else {
                increaseRow();
                showRow(currentRow);
            }


        }



    }



})();