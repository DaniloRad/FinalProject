
(

     function () {


//         var array = ["Index","Custom","About","List"];
        
//             var curr=document.getElementById("currPage");
//             if(curr.innerHTML==="List") {
//                             var currNum=3;

//             }
//             else if (curr.innerHTML==="Index") {
//                 var currNum=0;

//             }
//                 else if (curr.innerHTML==="Custom") {
//                     var currNum=1;
    
//     }      else if (curr.innerHTML==="About") {
//         var currNum=2;

// }            
        

//         var body = document.getElementsByTagName("body")[0];
//         body.addEventListener("touchstart", SwipeDown);
//         body.addEventListener("touchend", SwipeUp);
//         var swipeX;
//         var swipeY;
//         var swipeRight = 0;
//     console.log(currNum)
//         function SwipeDown(e) {
//             swipeRight = 0;
//             swipeX = e.touches[0].clientX;
//             swipeY = e.touches[0].clientY;
//             console.log (swipeX)

//         }

//         function SwipeUp(e) {

//             var xx = e.changedTouches[0].clientX;  

//             var yy = e.changedTouches[0].clientY;
//             console.log (e.clientX)
//             console.log (swipeX - xx)
//             if ((Math.abs(swipeX - xx) > 150) && (Math.abs(swipeY - yy) < 30)) {

//                 if (swipeX - xx < 0) {

//                     if(currNum<3) {
//                     currNum++;

//                     }

//                 } else {
//                     if(currNum>0) {
//                                             currNum--;

//                     }
//                 }

//                             SwipePage(currNum);

//             }



//         }

//         function SwipePage(currNum) {

//             for (let i=0;i<4;i++) {

//                 document.getElementsByClassName("container")[i].style.display="none";

//             }
//             document.getElementsByClassName("container")[currNum].style.display="flex";
//             document.getElementById("currPage").innerHTML=array[currNum];

//         }

            var cnt=0;
        var menu =document.getElementsByClassName("navigationBarPhone")[0];
        menu.addEventListener("click",OpenMenu);
        function OpenMenu () {
            var a=document.querySelectorAll(".navigationBar li:not(:first-child)");

if (cnt===0) {
for (let i=0;i<a.length;i++) {
    a[i].style.display="block";
}            
menu.style.backgroundColor="grey";
cnt++;

}
else {
    for (let i=0;i<a.length;i++) {
        a[i].style.display="none";
    }  
    menu.style.backgroundColor="none";
    cnt=0;


}
        }



     }
)();
