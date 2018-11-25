
var currMovie;
var marginTop=0;
var i;
var touchY;
var wholeList=document.getElementsByClassName("list")[0];
wholeList.addEventListener("touchstart",recordTouchDown);
 wholeList.addEventListener("touchmove",recordTouchMove);
//test
setTimeout(function () {
    var allMovies=document.getElementsByClassName("movieList");
    allMovies[0].classList.add("sporedni");
    
    allMovies[1].classList.add("trenutni")
    allMovies[2].classList.add("sporedni");
    
    
    },10);


function recordTouchMove(e) {

    var moveY=e.changedTouches[0].pageY;
    marginTop=-(touchY-moveY);
    document.getElementsByClassName("list")[0].style.marginTop=marginTop+".px";

  


}

function recordTouchDown (e) {

 touchY=e.changedTouches[0].pageY;
   currMovie=e.target;
 
while (!(currMovie.classList.contains("movieList")))  {

    currMovie=currMovie.parentNode;
}


  
    var allMovies=document.getElementsByClassName("movieList");
    for ( i=0;i<allMovies.length;i++) {

        if(allMovies[i]===currMovie) {
            break;
        }

    }

         console.log(i)


}  