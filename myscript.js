// setting variables
var total = 32;
var ancho = ((600 / total))
var gridArray = new Array(total);
var grid = document.querySelector("#grid")
var raibow = false
var erase = false
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
//setting CSS var to calculate grid
document.documentElement.style.setProperty('--total', total);
document.documentElement.style.setProperty('--ancho', ancho + "px");
setGrid();
setSelector();
slider.oninput = function() {
    output.innerHTML = this.value;
  } 
function setGrid() {
    for (let i = 0; i < total; i++) {
        gridArray[i] = new Array(total)
        for (let j = 0; j < total; j++) {

            gridArray[i][j] = document.createElement('div');
        }
    }

    for (let i = 0; i < total; i++) {
        for (let j = 0; j < total; j++) {
            gridArray[i][j].classList.add('casilla');
            grid.appendChild(gridArray[i][j])
        }
    }
}


function changeColor(e) {
    if (erase) { e.target.style = "background-color: white"; return }
    if (!raibow) {
        e.target.style = "background-color: black";
    }
    else {
        let R = Math.floor(Math.random() * 255)
        let G = Math.floor(Math.random() * 255)
        let B = Math.floor(Math.random() * 255)
        let col = `background-color: rgb(${R},${G},${B});`
        console.log(col)
        e.target.style = `background-color: rgb(${R},${G},${B});`;
    }
}


function setSelector() {
    document.querySelectorAll("#borratodo").forEach(e => e.addEventListener("click", _ => location.reload()))
    document.querySelectorAll("#borra").forEach(e => e.addEventListener("click", _ => { erase = true }))
    document.querySelectorAll("#rai").forEach(e => e.addEventListener("click", _ => { raibow = true; erase = false }))
    document.querySelectorAll("#mono").forEach(e => e.addEventListener("click", _ => { raibow = false; erase = false; }))


    for (let i = 0; i < total; i++) {

        for (let j = 0; j < total; j++) {

            gridArray[i][j].addEventListener("mouseover", e => { changeColor(e) })


        }
    }

}