// Getting All Buttons informations :
let playBtn = document.querySelectorAll(".plbtn");
let newGameBtn = document.querySelector(".newGameBtn");
let resetGameBtn = document.querySelector(".resetBtn");
let winnerI = document.querySelector(".winner");
let resultButton = document.querySelector(".callWinner");

// Choose and Declare Player's Turn :


// Create Winning Point :
const winningPoint = [
    [0, 1, 2, 3],
    [1, 2, 3, 4],
    [0, 5, 10, 15],
    [5, 10, 15, 20],
    [0, 6, 12, 18],
    [6, 12, 18, 24],
    [5, 6, 7, 8],
    [6, 7, 8, 9],
    [6, 11, 16, 21],
    [1, 6, 11, 16],
    [2, 7, 12, 17],
    [7, 12, 17, 22],
    [8, 13, 18, 23],
    [9, 14, 19, 24],
    [3, 8, 13, 18],
    [4, 8, 12, 16],
    [4, 9, 14, 19],
    [20, 16, 12, 8],
];

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

// Reset Button Logic :
resetGameBtn.addEventListener("click", ()=> {
    player0 = true;
    count1 = 0;
    count2 = 0;
    for(let val of playBtn) {
        val.innerHTML = "";
        val.style.background = "";
        val.style.color = "";
        val.disabled = false;
    }
});