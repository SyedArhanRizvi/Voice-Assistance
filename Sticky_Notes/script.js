let dynamicPart = document.querySelector(".dynaamic");
let stickyPart = document.querySelector(".sticky");
let submitButton = document.querySelector(".btn");
let text = document.querySelector(".textArea")


    submitButton.addEventListener("click", ()=>{
        let div1 = document.createElement("div");
        let p1 = document.createElement("p");
        let x = document.createElement("button");
        x.style.height = "10px";
        x.style.width = "20px";
        div1.appendChild(p1);
        div1.appendChild(x);
        p1.innerText = text.value;
        // div1.style.height = "150px"
        // div1.style.width = "200px";
        div1.style.backgroundColor = "white";
        div1.style.border = "2px solid black";
        dynamicPart.appendChild(div1);

        // let rendomCode = Math.floor(Math.random() * 16777215);
        // let hexaCode = "#" + rendomCode.toString(16);
        // stickyPart.style.backgroundColor = hexaCode;
        // submitButton.innerHTML = rendomCode;
        
        // stickyPart.style.backgroundColor = hexaCode;
        // dynamicPart.style.backgroundColor = hexaCode;
    })

    // let changeColor = ()=>{
    //     // let rendomCode = Math.floor(Math.random() * 16777215);
    //     // let hexaCode = "#" + rendomCode.toString(16);
    //     // stickyPart.style.backgroundColor = hexaCode;
    //     // submitButton.innerHTML = rendomCode;
        
    //     // stickyPart.style.backgroundColor = rendomeColor;
    //     // dynamicPart.style.backgroundColor = rendomeColor;
    // }