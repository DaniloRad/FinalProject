function LoadMovies() {

    fetch("https://api.themoviedb.org/3/discover/movie?api_key=9c53b0110d5f6cbf16a45d461096b221&sort_by=popularity.desc&include_adult=false")
        .then(function (response) {
            return response.json();
        })
        .then(function (MyJson) {
            return MyJson.results;
        })
        .then(function (arrayOfMovies) { 

            var pathToImg = "http://image.tmdb.org/t/p/w185/";
            var bestHTML = document.getElementsByClassName("best")[0];
            mainArray = arrayOfMovies;
            for (let i = 0; i < 3; i++) {
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
                movieColumn2.setAttribute("class", "aboutMovies");
                p1.innerHTML = "Name: "+arrayOfMovies[i].title;
                p2.innerHTML = "Vote: "+arrayOfMovies[i].vote_average;
                p3.innerHTML = "Date: "+arrayOfMovies[i].release_date;
                p5.innerHTML="Overview: "+arrayOfMovies[i].overview;

                //genre
                var arrayOfGenre = MovieGenre(arrayOfMovies[i].genre_ids);

                var p4_4 = arrayOfGenre[0];
                for (let i = 1; i < arrayOfGenre.length; i++) {
                    p4_4 = p4_4 + "," + arrayOfGenre[i];
                }
                p4.innerHTML = "Genre: "+p4_4;

               

              //append
                divImg.append(img);
                movieColumn2.append(p1);
                movieColumn2.append(p2);

                movieColumn2.append(p3);
                movieColumn2.append(p4);
                movieColumn2.append(p5);

                var div = document.createElement("div");
                div.setAttribute("class", "movie");
                div.append(divImg);
                div.append(movieColumn2);
                bestHTML.append(div);

             

            }



        
        })
    
    
    
    };
    function MovieGenre(array) {

        var genreName = [];
        for (let i = 0; i < array.length; i++) {

            if (array[i] === 28) {
                genreName[i] = "action";
            } else if (array[i] === 16) {
                genreName[i] = "animated";

            } else if (array[i] === 16) {
                genreName[i] = "animated";

            } else if (array[i] === 99) {
                genreName[i] = "documentary";

            } else if (array[i] === 18) {
                genreName[i] = "drama";

            } else if (array[i] === 10751) {
                genreName[i] = "family";

            } else if (array[i] === 14) {
                genreName[i] = "fantasy";

            } else if (array[i] === 36) {
                genreName[i] = "fistory";

            } else if (array[i] === 35) {
                genreName[i] = "comedy";

            } else if (array[i] === 10752) {
                genreName[i] = "war";

            } else if (array[i] === 80) {
                genreName[i] = "crime";

            } else if (array[i] === 10402) {
                genreName[i] = "music";

            } else if (array[i] === 9648) {
                genreName[i] = "mystery";

            } else if (array[i] === 10749) {
                genreName[i] = "romance";

            } else if (array[i] === 878) {
                genreName[i] = "sci-fi";

            } else if (array[i] === 27) {
                genreName[i] = "horror";

            } else if (array[i] === 10770) {
                genreName[i] = "tv movie";

            } else if (array[i] === 53) {
                genreName[i] = "thriller";

            } else if (array[i] === 37) {
                genreName[i] = "western";

            } else if (array[i] === 12) {
                genreName[i] = "pleasure";

            }

        }
        return genreName;

    }
    LoadMovies();
