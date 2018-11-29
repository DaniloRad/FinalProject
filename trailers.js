(function(){

    let idArray=[], titleArray=[];
    function loadMovies(){
        const url = "https://api.themoviedb.org/3/discover/movie?api_key=52fc43195daf9730aa9bd854898d0c7a&page=1";
        fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (MyJson) {
            return MyJson.results;
        })
        .then(function (arrayOfMovies){
            for(let i=0;i<arrayOfMovies.length;i++){
                idArray.push(arrayOfMovies[i].id);
                titleArray.push(arrayOfMovies[i].title);
            }
        })
    }
    loadMovies();
    document.getElementById("search_button").addEventListener("click",function(){
        let search = document.getElementById("search_input").value;
        for(let i=0;i<titleArray.length;i++){
            if(search.toLowerCase()===titleArray[i].toLowerCase()){
                console.log("*");
                loadTrailer(idArray[i]);
            }
        }
    })

    function loadTrailer(id){
        const url = "https://api.themoviedb.org/3/movie/"+id+"/videos?api_key=52fc43195daf9730aa9bd854898d0c7a&language=en-US";
        fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (MyJson) {
            return MyJson.results;
        })
        .then(function (movie){
            const ytUrl = "https://www.youtube.com/embed/" + movie[0].key;
            let iframe = "<iframe src='" + ytUrl + "'></iframe>";
            document.getElementsByClassName("video")[0].innerHTML = iframe;
        })
    }
})();