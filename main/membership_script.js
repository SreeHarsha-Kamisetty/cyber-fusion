let a=document.getElementById("a");
let aa=document.getElementsById("aa");
a.addEventListener("click", ()=>{
    if (aa.style.visibility === 'hidden') {
        aa.style.visibility = 'visible';
      } else {
        aa.style.visibility = 'hidden';
      }
});


let b=document.getElementById("b");
let c=document.getElementById("c");
let d=document.getElementById("d");