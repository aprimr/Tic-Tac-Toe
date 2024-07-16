let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let turnX = true;
let winningPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    turnX = true;
    box.innerText = "";
  }
};

const resetGame = () => {
  enableBoxes();
  document.querySelector(".msg-wrapper").style.display = "none";
  document.querySelector("main").style.display = "flex";
  document.querySelector('#turnX').classList.add("active");
  document.querySelector('#turnY').classList.remove("active");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX) {
      box.innerText = "X";
      document.querySelector('#turnX').classList.remove("active");
      document.querySelector('#turnY').classList.add("active");
      turnX = false;
    } else {
      box.innerText = "O";
      document.querySelector('#turnY').classList.remove("active");
      document.querySelector('#turnX').classList.add("active");
      turnX = true;
    }
    box.disabled = true;
    checkWinner();

  });
});

const checkWinner = () => {
  for (let pattern of winningPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos1Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        document.querySelector("#winner").innerText = pos1Val;
        document.querySelector("main").style.display = "none";
        document.querySelector(".msg-wrapper").style.display = "flex";
        disableBoxes();
    }
  }
};
}



document.querySelector("#reset-btn").addEventListener("click", resetGame);
document.querySelector("#replay").addEventListener("click", resetGame);
