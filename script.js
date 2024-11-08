// make the game board connect the buttons

// an object constructor for user data

function createPlayers (name, points) { 
    this.name= name;
    this.points= points;
}



// a function factory for the game menu

const buttons = (function () {
  const startButton=document.getElementById("startBut");
  const resetButton=document.getElementById("resetBut");
  const ticGameboard=document.getElementById("gameboard");

  console.log("boo")

  function buildGameGrid () {
  for (let i=0;i<9;i++){
    const newDiv=document.createElement("div");
    newDiv.classList="boardBoxes"
    newDiv.id="box"+i;
    ticGameboard.appendChild(newDiv);
  }
}

  buildGameGrid();

  

})();