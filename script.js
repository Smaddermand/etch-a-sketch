function createGrid(n){
    let cellSize = 800/n;
for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
        const newDiv = document.createElement("div"); //create div
        newDiv.classList.add("grid"); //add grid class
        container.appendChild(newDiv);
    }

}
    let elements = document.getElementsByClassName("grid");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.width = cellSize + "px"; // change the width here
        elements[i].style.height = cellSize + "px"; // change the height here
    }
    addMouseOverEffect();
};

function addMouseOverEffect() {
    let elements = document.getElementsByClassName("grid");
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("mouseover", function() {
            this.style.backgroundColor = "blue"; // change color as needed
        });
    }
}


function draw(){
     gridSize = prompt("please select size of grid");
    if(gridSize >= 100){
        alert("It's to big mister");
        draw();
    } else {
    createGrid(gridSize);
    }
}

//createGrid(16);
const startDraw = document.getElementById("startButton");
startDraw.addEventListener("click", draw);




