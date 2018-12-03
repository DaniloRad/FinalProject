(function () {

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

    function loadMovies() {

    fetch("https://api.themoviedb.org/3/discover/movie?api_key=9c53b0110d5f6cbf16a45d461096b221&sort_by=popularity.desc&include_adult=false")
        .then(function (response) {
            return response.json();
        })
        .then(function (MyJson) {
            return MyJson.results;
        })
        .then(function (arrayOfMovies) { 

            let pathToImg = "http://image.tmdb.org/t/p/w185/";
            let bestHTML = document.getElementsByClassName("best")[0];
            mainArray = arrayOfMovies;
            for (let i = 0; i < 3; i++) {
            //pic

 let divImg = document.createElement("div");
                divImg.setAttribute("class", "divImg");
                let img = document.createElement("img");
                img.setAttribute("src", pathToImg + arrayOfMovies[i].poster_path);

                //description
                let p1 = document.createElement("p");
                let p2 = document.createElement("p");
                let p3 = document.createElement("p");
                let p4 = document.createElement("p");
                let p5 = document.createElement("p");

                let movieColumn2 = document.createElement("div");
                movieColumn2.setAttribute("class", "aboutMovies");
                p1.innerHTML = arrayOfMovies[i].title;
                p2.innerHTML = arrayOfMovies[i].vote_average;
                p3.innerHTML = arrayOfMovies[i].release_date;
                p5.innerHTML=arrayOfMovies[i].overview;

                //genre
                let arrayOfGenre = movieGenre(arrayOfMovies[i].genre_ids);

                let p4_4 = arrayOfGenre[0];
                for (let i = 1; i < arrayOfGenre.length; i++) {
                    p4_4 = p4_4 + "," + arrayOfGenre[i];
                }
                p4.innerHTML = p4_4;

               

              //append
                divImg.append(img);
                movieColumn2.append(p1);
                movieColumn2.append(p2);

                movieColumn2.append(p3);
                movieColumn2.append(p4);
                movieColumn2.append(p5);

                let div = document.createElement("div");
                div.setAttribute("class", "movie");
                div.append(divImg);
                div.append(movieColumn2);
                bestHTML.append(div);

             

            }



        
        })
        .catch(function() {

            let div = document.getElementsByClassName("best")[0];
            div.innerHTML="Error with database";
        })

    
    
    };
    function movieGenre(arrayMovie) {
        var genreName=[],k=0;
            for(let i=0;i<arrayMovie.length;i++){
                for(let j=0;j<arrayOfGenresAPI.length;j++){
                    if(arrayMovie[i]===arrayOfGenresAPI[j].id){
                        genreName[k++]=arrayOfGenresAPI[j].name;
                    }
                }
            }        
        return genreName;
    }
    
    loadMovies();
})();