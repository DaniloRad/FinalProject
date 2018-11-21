(function () {

    LoadMovies();
    function LoadMovies() {

        fetch("https://api.themoviedb.org/3/discover/movie?api_key=9c53b0110d5f6cbf16a45d461096b221&page=1")
        .then (function (response) {
            return response.json();
        })
        .then (function (MyJson) {
           return MyJson.results;
    })
        .then (function (arrayOfMovies) {
            var pathToImg="http://image.tmdb.org/t/p/w185/";
            var listHTML=document.getElementsByClassName("list")[0];
            for (let i=0;i<4;i++) {
                    var divImg=document.createElement("div");
                    divImg.setAttribute("class","divImg");
                    var img=document.createElement("img");
                    img.setAttribute("src",pathToImg+arrayOfMovies[i].poster_path);
                    var p1=document.createElement("p");
                    var p2=document.createElement("p");
                    var p3=document.createElement("p");
                    var p4=document.createElement("p");
                    var movieColumn2=document.createElement("div");
                    movieColumn2.setAttribute("class","aboutMovies");
                    p1.innerHTML=arrayOfMovies[i].title;
                    p2.innerHTML=arrayOfMovies[i].vote_average;
                    p3.innerHTML=arrayOfMovies[i].release_date;
                   var arrayOfGenre= MovieGenre(arrayOfMovies[i].genre_ids);
                   
                   var p4_4=arrayOfGenre[0];
                    for (let i=1;i<arrayOfGenre.length;i++) {
                        p4_4=p4_4+","+arrayOfGenre[i];
                    }
                    p4.innerHTML=p4_4;
                    divImg.append(img);
                    movieColumn2.append(p1);
                    movieColumn2.append(p2);

                    movieColumn2.append(p3);
                    movieColumn2.append(p4);
                    var div =document.createElement("div");
                    div.setAttribute("class","movie");
                    div.append(divImg);
                    div.append(movieColumn2);
                    listHTML.append(div);
            }

        })

    }
    function MovieGenre(array) {

        var genreName=[];
        for (let i=0;i<array.length;i++) {

            if(array[i]===28) {
                genreName[i]="Action";
            }
            else if (array[i]===16) {
                genreName[i]="Animated";

            }
            else if (array[i]===16) {
                genreName[i]="Animated";

            } else if (array[i]===99) {
                genreName[i]="Documentary";

            } else if (array[i]===18) {
                genreName[i]="Drama";

            } else if (array[i]===10751) {
                genreName[i]="Family";

            } else if (array[i]===14) {
                genreName[i]="Fantasy";

            } else if (array[i]===36) {
                genreName[i]="History";

            } else if (array[i]===35) {
                genreName[i]="Comedy";

            } else if (array[i]===10752) {
                genreName[i]="War";

            } else if (array[i]===80) {
                genreName[i]="Crime";

            } else if (array[i]===10402) {
                genreName[i]="Music";

            } else if (array[i]===9648) {
                genreName[i]="Mystery";

            } else if (array[i]===10749) {
                genreName[i]="Romance";

            }
            else if (array[i]===878) {
                genreName[i]="Sci-fi";

            }
            else if (array[i]===27) {
                genreName[i]="Horror";

            } else if (array[i]===10770) {
                genreName[i]="TV movie";

            } else if (array[i]===53) {
                genreName[i]="Thriller";

            }
            else if (array[i]===37) {
                genreName[i]="Western";

            } else if (array[i]===12) {
                genreName[i]="Pleasure";

            }

        }
        return genreName;

    }
})();
