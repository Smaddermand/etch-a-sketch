function createGrid(n){
for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
        const newDiv = document.createElement("div"); //create div
        newDiv.classList.add("grid"); //add grid class
        container.appendChild(newDiv);

    //  document.getElementsByClassName("grid").style.color = "blue"
    }
    
    
    //const currentDiv = document.getElementById("div");
    //document.body.insertBefore(newDiv, currentDiv);
}
    let elements = document.getElementsByClassName("grid");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.width = 800/n + "px"; // change the width here
        elements[i].style.height = 800/n + "px"; // change the height here
    }

}


createGrid(32);


