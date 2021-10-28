var total = 32;
var ancho=((600/total))

var gridArray = new Array(total);
var grid=document.querySelector("#grid")
var raibow=false



//variables.style.setProperty('--total', 32 )
document.documentElement.style.setProperty('--total', total );
document.documentElement.style.setProperty('--ancho', ancho+"px");
var contador=0
for (let i = 0; i < total; i++) {
    gridArray[i] = new Array(total)
    for (let j = 0; j < total; j++) {
        contador++
        gridArray[i][j] = document.createElement('div');
        /*gridArray[i][j].textContent=contador;<*/

    }
} 

for (let i = 0; i < total; i++) {
   
    for (let j = 0; j < total; j++) {
        gridArray[i][j].classList.add('casilla');
        grid.appendChild(gridArray[i][j])
        
         


    }
}
setSelector()
var t =0
function changeColor(e){
   
   if(!raibow){
    e.target.style = "background-color: black";}
    else{
        e.target.style = "background-color: red";
    }
}
function test(){
    
}
function clearGrid(){
    location.reload()
}
function raibowMode(){
    raibow=true

}
function monocromeMode(){
    raibow=false
}
function setSelector(){
    document.querySelectorAll("#a" ).forEach(e => e.addEventListener("click", clearGrid))
    document.querySelectorAll("#b" ).forEach(e => e.addEventListener("click", raibowMode))
    document.querySelectorAll("#c" ).forEach(e => e.addEventListener("click", monocromeMode))
    
    
    for (let i = 0; i < total; i++) {
       
        for (let j = 0; j < total; j++) {
            
            gridArray[i][j].addEventListener("mouseover", e=>{changeColor(e)})
            
    
        }
    } 

}