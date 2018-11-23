(function(){

    let currentRow = 1;
    let ifInSlider;
    document.getElementsByTagName("body")[0].onkeydown = checkKey;
    function loadMovies(){
        const url = "https://api.themoviedb.org/3/trending/all/day?api_key=52fc43195daf9730aa9bd854898d0c7a";
        fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function (data) {
            return data.results;
        })
        .then(function(array){
            return array.slice(0,9);
        })    
        .then(function(finalArray){
            console.log(finalArray);
            let currentElementOfFinalArray = 0;
            for(let i=0;i<3;i++){
                let row1 = createRow();
                document.getElementsByClassName("slider")[0].appendChild(row1);
                for(let j=0;j<3;j++){
                    let elem1 = createElem(finalArray[currentElementOfFinalArray]);
                    row1.appendChild(elem1);
                    currentElementOfFinalArray++;
                }
            }

            var a=document.createElement("a");
            a.setAttribute("id","next");
            a.setAttribute("class","fa fa-angle-double-right");
            document.getElementsByClassName("slider")[0].appendChild(a);
            showRow(currentRow);
            setInterval(function(){
                showRow(currentRow);
                increaseRow();
            },3000);
        }
        
        
        )
        .then ( function () {

             document.getElementById("prev").addEventListener("click",function(){
        decreaseRow();
        showRow(currentRow);
    })

    document.getElementById("next").addEventListener("click",function(){
        increaseRow();
        showRow(currentRow);
    })

        })
    }

    function createRow(){
        let row = document.createElement("div");
        row.setAttribute("class","row");
        return row;
    }

   

    function createElem(elemOfArray){
        //elemOfArray - one element of finalArray
        let pathToImg = "http://image.tmdb.org/t/p/w185/";
        let elem = document.createElement("div");
        elem.setAttribute("class","element");
        elem.style.backgroundImage = "url("+pathToImg + elemOfArray.poster_path+")";
        elem.style.display = "inline-block";
        addButton(elem);
        return elem;
    }

    function addButton(parent){
        //add read more button
        let btn = document.createElement("button");
        btn.setAttribute("class","readMore");
        let text = document.createTextNode("Read More");
        btn.appendChild(text);
        parent.appendChild(btn);
    }

    function showRow(i){
        let arrayOfRows = document.getElementsByClassName("row");
        for(let j=1;j<=3;j++){
            if(j===i){
                arrayOfRows[i].style.display = "flex";
            }
            else{
                arrayOfRows[j].style.display = "none";
            }
        }
    }

    function increaseRow(){
        if(currentRow==3){
            currentRow=1;
        }
        else{
            currentRow++;
        }
        return currentRow;
    }

    function decreaseRow(){
        if(currentRow==1){
            currentRow=3;
        }
        else{
            currentRow--;
        }
        return currentRow;
    }

    document.getElementsByClassName("slider")[0].addEventListener("mouseover", isIn);
    document.getElementsByClassName("slider")[0].addEventListener("mouseout", isOut);

    function isIn(){
        ifInSlider = true;
    }

    function isOut(){
        ifInSlider = false;
    }

    function checkKey(e){
        if(ifInSlider){
            if(e.keyCode===37){
                decreaseRow();
                showRow(currentRow);
            }
            else if(e.keyCode===39){
                increaseRow();
                showRow(currentRow);
            }
        }
    }

    loadMovies();

})();
