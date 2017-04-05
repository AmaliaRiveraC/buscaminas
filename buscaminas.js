/*var img0 = document.getElementById("img0");
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");
var img5 = document.getElementById("img5");
var img6 = document.getElementById("img6");
var img7 = document.getElementById("img7");
var img8 = document.getElementById("img8");
var img9 = document.getElementById("img9");
var img10 = document.getElementById("img10");
var img11 = document.getElementById("img11");
var img12 = document.getElementById("img12");
var img13 = document.getElementById("img13");
var img14 = document.getElementById("img14");
var img15 = document.getElementById("img15");

img0.addEventListener("click", bombas);
img1.addEventListener("click", unaBombaCerca);
img2.addEventListener("click", unaBombaCerca, true);
img3.addEventListener("click", imagenClick);
img4.addEventListener("click", unaBombaCerca);
img5.addEventListener("click", dosBombasCerca);
img6.addEventListener("click", bombas, true);
img7.addEventListener("click", unaBombaCerca);
img8.addEventListener("click", imagenClick);
img9.addEventListener("click", bombas, true);
img10.addEventListener("click", dosBombasCerca);
img11.addEventListener("click", imagenClick);
img12.addEventListener("click", unaBombaCerca);
img13.addEventListener("click", bombas, true);
img14.addEventListener("click", unaBombaCerca);
img15.addEventListener("click", imagenClick);*/


var bombas = document.getElementsByClassName("bomba");
var vacios = document.getElementsByClassName("vacio");

for(var j = 0; j < bombas.length; j++){
	bombas[j].addEventListener("click", mostrarBomba);
}

for(var k = 0; k < vacios.length; k++){
	vacios[k].addEventListener("click", mostrarVacio);
}






function mostrarBomba(event){
	for(var j = 0; j < bombas.length; j++){
		var imagen = document.createElement("img");
        imagen.src = "bomba.jpg";
        bombas[j].appendChild(imagen);	
	}
	alert("Has perdido");
	event.stopPropagation(); 
}

function mostrarVacio (event) {
	for(var k=0; k < vacios.length; k++){
		var imagen = document.createElement("img");
		imagen.src = "rosa.png";
		vacios[k].appendChild(imagen); 
	}
}

/*function  unaBombaCerca(){
    this.src = "uno.png";
}

function dosBombasCerca() {
    this.src= "dos.png";
}
*/
