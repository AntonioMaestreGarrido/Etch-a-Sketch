// setting variables
var total = 65;
var ancho = ((600 / total))
var gridArray = new Array(total);
var grid = document.querySelector("#grid")
var raibow = false
var erase = false
var slider = document.getElementById("myRange");
var size = document.getElementById("size");
//setting CSS var to calculate grid
document.documentElement.style.setProperty('--total', total);
document.documentElement.style.setProperty('--ancho', ancho + "px");
setGrid();
setSelector();

slider.oninput = function() {
    eraseGrid();
    size.innerHTML = this.value;
    total=this.value;
    ancho = ((600 / total))
    gridArray=null
    gridArray = new Array(total);
    document.documentElement.style.setProperty('--total', total);
    document.documentElement.style.setProperty('--ancho', ancho + "px");
    
    total=this.value

    setGrid();
    setSelector();
    
  } 
function eraseGrid(){
    grid.querySelectorAll(".fila").forEach(f=>{grid.removeChild(f)});
    
    
}
function sss(){

}


function setGrid() {
    
    for (let i = 0; i < total; i++) {
        gridArray[i] = new Array(total)
        var n=document.createElement('div');
        n.classList.add('fila');
        grid.appendChild(n)
        for (let j = 0; j < total; j++) {

            gridArray[i][j] = document.createElement('div');
            gridArray[i][j].classList.add('casilla');
            n.appendChild(gridArray[i][j])
        }
    }

    for (let i = 0; i < total; i++) {
        for (let j = 0; j < total; j++) {
            
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