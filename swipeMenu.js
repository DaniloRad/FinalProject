
(

     function () {


            let cnt=0;
        let menu =document.getElementsByClassName("navigationBarPhone")[0];
        menu.addEventListener("click",openMenu);
        function openMenu () {
            let a=document.querySelectorAll(".navigation li:not(:first-child)");

if (cnt===0) {
for (let i=0;i<a.length;i++) {
    a[i].style.display="block";
}            
cnt++;

}
else {
    for (let i=0;i<a.length;i++) {
        a[i].style.display="none";
    }  
    cnt=0;


}
        }



     }
)();
