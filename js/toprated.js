function LoadMovies() {

    var mainArray;

    let arrayOfGenresAPI;
    function returnArrayOfGenresAPI(){
        fetch("https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=52fc43195daf9730aa9bd854898d0c7a")
        .then(function (response) {
            return response.json();
        })
        .then(function (array) {
            arrayOfGenresAPI = array.genres.slice(0);
        })        
    }

    returnArrayOfGenresAPI();

    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=9c53b0110d5f6cbf16a45d461096b221&language=en-US&page=1")
        .then(function (response) {
            return response.json();
        })
        .then(function (MyJson) {
            return MyJson.results;
        })
        .then(function (arrayOfMovies) {

            var pathToImg = "http://image.tmdb.org/t/p/w185/";
            var topHTML = document.getElementsByClassName("top_rated")[0];

            mainArray = arrayOfMovies;
            for (let i = 0; i < arrayOfMovies.length; i++) {
                //pic

                var divImg = document.createElement("div");
                divImg.setAttribute("class", "divImg");
                var img = document.createElement("img");
                img.setAttribute("src", pathToImg + arrayOfMovies[i].poster_path);

                //description
                var p1 = document.createElement("p");
                var p2 = document.createElement("p");
                var p3 = document.createElement("p");
                var p4 = document.createElement("p");
                var p5 = document.createElement("p");

                var movieColumn2 = document.createElement("div");
                movieColumn2.setAttribute("class", "aboutMoviesLoad");
                p1.innerHTML = arrayOfMovies[i].title;
                p2.innerHTML = arrayOfMovies[i].vote_average;
                p3.innerHTML = arrayOfMovies[i].release_date;
                p5.innerHTML = arrayOfMovies[i].overview;


                let arrayOfGenre = movieGenre(arrayOfMovies[i].genre_ids);

                let p4_4 = arrayOfGenre[0];
                for (let i = 1; i < arrayOfGenre.length; i++) {
                    p4_4 = p4_4 + ", " + arrayOfGenre[i];
                }
                p4.innerHTML = p4_4;

                //append
                divImg.append(img);
                movieColumn2.append(p1);
                movieColumn2.append(p2);

                movieColumn2.append(p3);
                movieColumn2.append(p4);

                movieColumn2.append(p5);

                var div = document.createElement("div");
                div.setAttribute("class", "movie animated rollIn");
                div.append(divImg);
                div.append(movieColumn2);
                topHTML.append(div);



            }




        })
        .then(function () {

            let movie = document.getElementsByClassName("movie");
            for (let i = 6; i < mainArray.length; i++) {

                movie[i].style.display = "none";

            }


        })
        .catch(function () {

            document.getElementsByClassName("top_rated")[0].innerHTML = "Error database";

        })


    function movieGenre(arrayMovie) {
        var genreName=[],k=0;
            for(let i=0;i<arrayMovie.length;i++){
                for(let j=0;j<arrayOfGenresAPI.length;j++){
                    if(arrayMovie[i]===arrayOfGenresAPI[j].id){
                        genreName[k++]=arrayOfGenresAPI[j].name;
                        console.log(genreName)
                    }
                }
            }        
        return genreName;
    }
};


LoadMovies();