var c = document.getElementById("canvas");
var context = c.getContext("2d"); 

function alertButton(){
	alert("Hello, world!");
}

document.getElementById("button").addEventListener("click",alertButton); 

