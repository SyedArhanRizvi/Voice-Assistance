let display = document.querySelector(".outinp");
let allBtns = document.querySelectorAll("button");


let str = "";
Array.from(allBtns).forEach((btn)=>{
    btn.addEventListener("click", (e)=> {

        if(btn.innerText == 'AC') {
            str = "";
            console.log("Arhan");
            display.innerHTML = "";
        } else {
            str += btn.innerHTML;
            display.innerHTML = str;
            console.log(str);
        }
    })
})