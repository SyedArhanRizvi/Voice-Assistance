
let playBtn = document.querySelectorAll(".btn");
console.log(playBtn);

// Diclar Winner :
let winnerI = document.querySelector(".winner");

// Reset and New Start Button :
let newGame = document.querySelector(".newGameButton");
let resetBtn = document.querySelector(".resetBtn");

// Wining Eligiblity :
let winingPoint = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6],
];

// Players Turn :
let player0 = true;

// Logic :
playBtn.forEach((btn)=> {
    btn.addEventListener(("click"), ()=> {
      if(player0) {
        btn.style.background = "red";
        btn.innerHTML = "0";
        console.log("0");
        player0 = false;
      }  else {
        btn.style.background = "yellow";
        btn.innerHTML = "X";
        console.log("X");
        player0 = true;
      }
      btn.disabled = true;
      checkWinner();
    });
});

// Check Winner :
let checkWinner = () =>{
    for(let val of winingPoint) {
        let val1 = playBtn[val[0]].innerText;
        let val2 = playBtn[val[1]].innerText;
        let val3 = playBtn[val[2]].innerText;
        if(val1 != "" && val2 != "" && val3 != "") {
            if(val1 === val2 && val2 === val3) {
                console.log("Winner is", val1);
                winnerIs(val1);
            }
        }
    }
}

// Print Winner :
let winnerIs = (winner) => {
    winnerI.innerText = `Congratulations, Winner is ${winner}`;
    winnerI.classList.remove("hide");
    buttonDisable();
    // playBtn.disabled = false;
};
let buttonDisable = () => {
    player0 = true;
    for(btn of playBtn) {
    btn.disabled = true;
  }
  
}
