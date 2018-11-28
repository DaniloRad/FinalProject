(function () {

    var mainArray;
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
                var pathToImg = "http://image.tmdb.org/t/p/w185/";
                var listHTML = document.getElementsByClassName("list")[0];
                mainArray = arrayOfMovies;
                for (let i = 0; i < arrayOfMovies.length; i++) {

                    var displaying=false;
                    var obj = movieGenre(arrayOfMovies[i].genre_ids);
                    for (let i = 0; i < obj.length; i++) {
    
                        if (obj[i].toLowerCase().indexOf("family") > -1) {
    
                            displaying=true;
                            break;
                        }
                    }
    
                    if(displaying)
                    {

                    var divImg = document.createElement("div");
                    divImg.setAttribute("class", "divImgList");
                    var img = document.createElement("img");
                    img.setAttribute("src", pathToImg + arrayOfMovies[i].poster_path);
                    var p1 = document.createElement("p");
                    var p2 = document.createElement("p");
                    var p3 = document.createElement("p");
                    var p4 = document.createElement("p");
                    var movieColumn2 = document.createElement("div");
                    movieColumn2.setAttribute("class", "aboutMoviesList");
                    p1.innerHTML = "Name: "+arrayOfMovies[i].title;
                    p2.innerHTML = "Vote: "+arrayOfMovies[i].vote_average;
                    p3.innerHTML = "Date: "+arrayOfMovies[i].release_date;
                    var arrayOfGenre = movieGenre(arrayOfMovies[i].genre_ids);

                    var p4_4 = arrayOfGenre[0];
                    for (let i = 1; i < arrayOfGenre.length; i++) {
                        p4_4 = p4_4 + "," + arrayOfGenre[i];
                    }
                    p4.innerHTML ="Genre: "+p4_4;
                    divImg.append(img);
                    movieColumn2.append(p1);
                    movieColumn2.append(p2);

                    movieColumn2.append(p3);
                    movieColumn2.append(p4);
                    var div = document.createElement("div");
                    div.setAttribute("class", "movieList");
                    div.append(divImg);
                    div.append(movieColumn2);
                    listHTML.append(div);

                }
            }



            })
            .then(function () {


                var movies = document.getElementsByClassName("movieList");

                for (let i = 5; i < movies.length; i++) {

                    movies[i].style.display = "none";

                }
                for (let i = 0; i < movies.length / 5; i++) {

                    var aElement = document.createElement("a");
                    aElement.setAttribute("id", i + 1);
                    aElement.innerHTML = i + 1;
                    document.getElementsByClassName("page_num")[0].append(aElement);
                }
                var aElement = document.createElement("a");
                aElement.setAttribute("id", "next");
                aElement.innerHTML = "Next";
                document.getElementsByClassName("page_num")[0].append(aElement);


            })
    }

    var search_button = document.getElementById("search_button");
    var mark = document.getElementById("vote_average").value;

    search_button.addEventListener("click", (function () {
        searchForMovie(mark.value)
    }));

    function searchForMovie(mark) {
        cnt=1;
        var filter = document.querySelector('input[name="filters"]:checked').getAttribute("id");
        var search_input = document.getElementById("search_input").value;
        var pathToImg = "http://image.tmdb.org/t/p/w185/";
        var listHTML = document.getElementsByClassName("list")[0];

        document.getElementsByClassName("list")[0].innerHTML = "";


        for (let i = 0; i < mainArray.length; i++) {

            var displaying = false;

            if (filter === "title") {

                if (mainArray[i].title.toLowerCase().indexOf(search_input.toLowerCase()) > -1) {

                    displaying = true;

                }
            } else if (filter === "release_date") {

                if (mainArray[i].release_date.indexOf(search_input.toLowerCase()) > -1) {

                    displaying = true;

                }

            } 

                var obj = MovieGenre(mainArray[i].genre_ids);
                for (let i = 0; i < obj.length; i++) {

                    if (obj[i].toLowerCase().indexOf("family") > -1) {

                        displaying = true;
                        break;

                    }

                

            }
            if (mark > mainArray[i].vote_average) {
                displaying = false;
            }
            if (displaying) {

                var divImg = document.createElement("div");
                divImg.setAttribute("class", "divImgList");
                var img = document.createElement("img");
                img.setAttribute("src", pathToImg + mainArray[i].poster_path);
                var p1 = document.createElement("p");
                var p2 = document.createElement("p");
                var p3 = document.createElement("p");
                var p4 = document.createElement("p");
                var movieColumn2 = document.createElement("div");
                movieColumn2.setAttribute("class", "aboutMoviesList");
                p1.innerHTML = "Name: "+ mainArray[i].title;
                p2.innerHTML = "Vote: "+mainArray[i].vote_average;
                p3.innerHTML = "Date: "+mainArray[i].release_date;
                var arrayOfGenre = movieGenre(mainArray[i].genre_ids);

                var p4_4 = arrayOfGenre[0];
                for (let i = 1; i < arrayOfGenre.length; i++) {
                    p4_4 = p4_4 + "," + arrayOfGenre[i];
                }
                p4.innerHTML ="Genre: "+ p4_4;
                divImg.append(img);
                movieColumn2.append(p1);
                movieColumn2.append(p2);

                movieColumn2.append(p3);
                movieColumn2.append(p4);
                var div = document.createElement("div");
                div.setAttribute("class", "movieList animated flipInX ");
                div.append(divImg);
                div.append(movieColumn2);
                listHTML.append(div);


            }
        }
        limitedLoad();

    }

    function movieGenre(array) {

        var genreName = [];
        for (let i = 0; i < array.length; i++) {

            if (array[i] === 28) {
                genreName[i] = "action"+" ";
            } else if (array[i] === 16) {
                genreName[i] = "animated"+" ";

            } else if (array[i] === 16) {
                genreName[i] = "animated"+" ";

            } else if (array[i] === 99) {
                genreName[i] = "documentary"+" ";

            } else if (array[i] === 18) {
                genreName[i] = "drama"+" ";

            } else if (array[i] === 10751) {
                genreName[i] = "family"+" ";

            } else if (array[i] === 14) {
                genreName[i] = "fantasy"+" ";

            } else if (array[i] === 36) {
                genreName[i] = "fistory"+" ";

            } else if (array[i] === 35) {
                genreName[i] = "comedy"+" ";

            } else if (array[i] === 10752) {
                genreName[i] = "war"+" ";

            } else if (array[i] === 80) {
                genreName[i] = "crime"+" ";

            } else if (array[i] === 10402) {
                genreName[i] = "music"+" ";

            } else if (array[i] === 9648) {
                genreName[i] = "mystery"+" ";

            } else if (array[i] === 10749) {
                genreName[i] = "romance"+" ";

            } else if (array[i] === 878) {
                genreName[i] = "sci-fi"+" ";

            } else if (array[i] === 27) {
                genreName[i] = "horror"+" ";

            } else if (array[i] === 10770) {
                genreName[i] = "tv movie"+" ";

            } else if (array[i] === 53) {
                genreName[i] = "thriller"+" ";

            } else if (array[i] === 37) {
                genreName[i] = "western"+" ";

            } else if (array[i] === 12) {
                genreName[i] = "pleasure"+" ";

            }

        }
        return genreName;

    }


    //prikazani su svi filmovi 
    //sada display none ostale samo prvih 4 display flex kad klikne na ovaj dolje
    document.getElementsByClassName("page_num")[0].addEventListener("click", load4Movies);
    var cnt = 1;

    function load4Movies(e) {
        var movies = document.getElementsByClassName("movieList");

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
        var movies = document.getElementsByClassName("movieList");
        for (let i = 0; i < movies.length; i++) {
            movies[i].style.display = "none";
        }

        for (let i = (cnt - 1) * 5; i < (cnt - 1) * 5 + 5; i++) {

            if (movies[i] === undefined) break;
            movies[i].style.display = "flex";



        }
        document.getElementsByClassName("page_num")[0].innerHTML = "";
        var aElement = document.createElement("a");
        aElement.setAttribute("id", "prev");
        aElement.innerHTML = "Prev";
        document.getElementsByClassName("page_num")[0].append(aElement);
        for (let i = 0; i < movies.length / 5; i++) {

            var aElement = document.createElement("a");
            aElement.setAttribute("id", i + 1);
            aElement.innerHTML = i + 1;
            document.getElementsByClassName("page_num")[0].append(aElement);
        }
        var aElement = document.createElement("a");
        aElement.setAttribute("id", "next");
        aElement.innerHTML = "Next";
        document.getElementsByClassName("page_num")[0].append(aElement);



    }
    //za kraj samo na pomjeranje ovog da se displaju odma
    var mark = document.getElementById("vote_average");
    mark.addEventListener("change", update);

    function update(e) {

        searchForMovie(e.target.value);
        document.getElementById("vote_average_value").innerHTML=e.target.value;

    }

    (function () {

       var clickToDisplay= document.getElementById("click_display_filters");
       clickToDisplay.addEventListener("click",function () {

        if(clickToDisplay.innerHTML.indexOf("Display")>-1) {
             document.getElementsByClassName("filter")[0].style.display="flex";
        clickToDisplay.innerHTML="Hide Filters 	&uarr;";
        }
       else {
        document.getElementsByClassName("filter")[0].style.display="none";
        clickToDisplay.innerHTML="Display Filters 	&darr;";
       }

       })

    }) ();

})();