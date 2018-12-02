function LoadMovies() {

    var mainArray;
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
                

                var movieColumn2 = document.createElement("div");
                movieColumn2.setAttribute("class", "aboutMoviesLoad");
                p1.innerHTML = arrayOfMovies[i].title;
                p2.innerHTML = arrayOfMovies[i].vote_average;
                p3.innerHTML = arrayOfMovies[i].release_date;
                


              //append
                divImg.append(img);
                movieColumn2.append(p1);
                movieColumn2.append(p2);

                movieColumn2.append(p3);
                movieColumn2.append(p4);
                

                var div = document.createElement("div");
                div.setAttribute("class", "movieLoad animated rollIn");
                div.append(divImg);
                div.append(movieColumn2);
                topHTML.append(div);

             

            }
            


        
        })
        .then (function() {

            let movie=document.getElementsByClassName("movieLoad");
            for (let i=6;i<mainArray.length;i++) {

                movie[i].style.display="none";

            }


        })
        .catch(function() {

            document.getElementsByClassName("top_rated")[0].innerHTML="Error database";

        })
    
    
    
    };
   

    LoadMovies();
