function main(genre) {

    let mainArray;
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



    loadMovies();

    function loadMovies() {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=9c53b0110d5f6cbf16a45d461096b221&page=1")
            .then(function (response) {
                return response.json();
            })
            .then(function (MyJson) {
                return MyJson.results;
            })
            .then(function (arrayOfMovies) {
                mainArray = arrayOfMovies;

                displayMovieLoop(mainArray);

            })
            .then(function () {
                let movies = document.getElementsByClassName("movie");

                for (let i = 5; i < movies.length; i++) {

                    movies[i].style.display = "none";

                }
                for (let i = 0; i < movies.length / 5; i++) {

                    aElement = document.createElement("a");
                    aElement.setAttribute("id", i + 1);
                    aElement.innerHTML = i + 1;
                    document.getElementsByClassName("page_num")[0].append(aElement);
                }
                aElement = document.createElement("a");
                aElement.setAttribute("id", "next");
                aElement.innerHTML = "Next";
                document.getElementsByClassName("page_num")[0].append(aElement);


            })
            .catch(function () {

                let div = document.getElementsByClassName("list")[0];
                div.innerHTML = "Error with database";
            })

    }

    let search_button = document.getElementById("search_button");
    let mark = document.getElementById("vote_average").value;

    search_button.addEventListener("click", (function () {
        searchForMovie(mark.value)
    }));
    document.getElementsByTagName("body")[0].addEventListener("keydown", checkKey);

    function checkKey(e) {
        if (e.keyCode === 13) {
            searchForMovie(mark.value);
        }
    }

    function searchForMovie(mark) {
        cnt = 1;
        let filter = document.querySelector('input[name="filters"]:checked').getAttribute("id");
        let search_input = document.getElementById("search_input").value;
        let pathToImg = "http://image.tmdb.org/t/p/w185/";
        let listHTML = document.getElementsByClassName("list")[0];

        document.getElementsByClassName("list")[0].innerHTML = "";


        for (let i = 0; i < mainArray.length; i++) {

            let displaying = false;

            if (genre === "none") {
                if (filter === "title") {

                    if (mainArray[i].title.toLowerCase().indexOf(search_input.toLowerCase()) > -1) {

                        displaying = true;

                    }
                } else if (filter === "release_date") {

                    if (mainArray[i].release_date.indexOf(search_input.toLowerCase()) > -1) {

                        displaying = true;

                    }

                } else if (filter === "genre_ids") {

                    let obj = MovieGenre(mainArray[i].genre_ids);
                    for (let i = 0; i < obj.length; i++) {


                        if (obj[i].toLowerCase().indexOf(search_input.toLowerCase()) > -1) {

                            displaying = true;
                            break;

                        }

                    }

                }
            } else {

                if (filter === "title") {

                    if (mainArray[i].title.toLowerCase().indexOf(search_input.toLowerCase()) > -1) {

                        let obj = movieGenre(mainArray[i].genre_ids);
                        for (let i = 0; i < obj.length; i++) {

                            if (obj[i].toLowerCase().indexOf(genre) > -1) {

                                displaying = true;
                                break;

                            }

                        }
                    }
                } else if (filter === "release_date") {

                    if (mainArray[i].release_date.indexOf(search_input.toLowerCase()) > -1) {

                        let obj = movieGenre(mainArray[i].genre_ids);
                        for (let i = 0; i < obj.length; i++) {

                            if (obj[i].toLowerCase().indexOf(genre) > -1) {

                                displaying = true;
                                break;

                            }

                        }

                    }
                }


            }
            if (mark > mainArray[i].vote_average) {
                displaying = false;
            }
            if (displaying) {

                displayMovie(mainArray[i]);


            }
        }
        limitedLoad();

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


    function displayMovieLoop(mainArray) {

        for (let i = 0; i < mainArray.length; i++) {
            displayMovie(mainArray[i]);
        }

    }

    function displayMovie(currMovie) {
        let pathToImg = "http://image.tmdb.org/t/p/w185/";
        let listHTML = document.getElementsByClassName("list")[0];
        let divImg = document.createElement("div");
        divImg.setAttribute("class", "divImgList");
        let img = document.createElement("img");
        img.setAttribute("src", pathToImg + currMovie.poster_path);
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        let p4 = document.createElement("p");
        let p5 = document.createElement("p");

        let movieColumn2 = document.createElement("div");
        movieColumn2.setAttribute("class", "aboutMoviesList");
        p1.innerHTML = currMovie.title;
        p2.innerHTML = currMovie.vote_average;
        p3.innerHTML = currMovie.release_date;
        p5.innerHTML = currMovie.overview;
        let arrayOfGenre = movieGenre(currMovie.genre_ids);

        let p4_4 = arrayOfGenre[0];
        for (let i = 1; i < arrayOfGenre.length; i++) {
            p4_4 = p4_4 + "," + arrayOfGenre[i];
        }
        p4.innerHTML = p4_4;
        divImg.append(img);
        movieColumn2.append(p1);
        movieColumn2.append(p2);

        movieColumn2.append(p3);
        movieColumn2.append(p4);
        movieColumn2.append(p5);

        let div = document.createElement("div");
        div.setAttribute("class", "movie animated flipInX");
        div.append(divImg);
        div.append(movieColumn2);
        listHTML.append(div);

    }
    document.getElementsByClassName("page_num")[0].addEventListener("click", load4Movies);
    let cnt = 1;

    function load4Movies(e) {
        let movies = document.getElementsByClassName("movie");

        if (e.target.getAttribute("id").length === 1) {
            cnt = parseInt(e.target.getAttribute("id"));
            limitedLoad();

        } else if (e.target.getAttribute("id") === "next") {
            if (cnt >= movies.length / 5) {
                alert("Nema vise stranica")
            } else {
                cnt++;

                limitedLoad();
            }


        } else if (e.target.getAttribute("id") === "prev") {
            if (cnt <= 1) {
                alert("Nema vise stranica")
            } else {
                cnt--;

                limitedLoad();
            }
        }
    }

    function limitedLoad() {
        let movies = document.getElementsByClassName("movie");
        for (let i = 0; i < movies.length; i++) {
            movies[i].style.display = "none";
        }

        for (let i = (cnt - 1) * 5; i < (cnt - 1) * 5 + 5; i++) {

            if (movies[i] === undefined) break;
            movies[i].style.display = "flex";



        }
        document.getElementsByClassName("page_num")[0].innerHTML = "";
        let aElement = document.createElement("a");
        aElement.setAttribute("id", "prev");
        aElement.innerHTML = "Prev";
        document.getElementsByClassName("page_num")[0].append(aElement);
        for (let i = 0; i < movies.length / 5; i++) {

            aElement = document.createElement("a");
            aElement.setAttribute("id", i + 1);
            aElement.innerHTML = i + 1;
            document.getElementsByClassName("page_num")[0].append(aElement);
        }
        aElement = document.createElement("a");
        aElement.setAttribute("id", "next");
        aElement.innerHTML = "Next";
        document.getElementsByClassName("page_num")[0].append(aElement);



    }
    mark = document.getElementById("vote_average");
    mark.addEventListener("change", update);

    function update(e) {

        searchForMovie(e.target.value);
        document.getElementById("vote_average_value").innerHTML = e.target.value;

    }
    (function () {

        let clickToDisplay = document.getElementById("click_display_filters");
        clickToDisplay.addEventListener("click", function () {

            if (clickToDisplay.innerHTML.indexOf("Display") > -1) {
                document.getElementsByClassName("filter")[0].style.display = "flex";
                clickToDisplay.innerHTML = "Hide Filters 	&uarr;";
            } else {
                document.getElementsByClassName("filter")[0].style.display = "none";
                clickToDisplay.innerHTML = "Display Filters 	&darr;";
            }

        })

    })();
};


let className = document.getElementsByTagName("body")[0].getAttribute("class");

main(className);