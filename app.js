var container = document.createElement("div");
container.setAttribute("class", "container");
container.style.width = "700px";
container.style.float = "left";
document.body.appendChild(container);
 
for (var x=0; x<2204; x++){
		var square = document.createElement("div");	
		square.setAttribute("class", "grid");
		square.style.width= "10px";
		square.style.height= "10px";
		square.style.backgroundColor = "red";
		square.style.border = "1px solid black";
    	square.style.float = "left";
		document.querySelector(".container").appendChild(square);
};

var board = document.querySelectorAll(".grid");
for (i= 0; i < board.length;i++){
	board[i].style.backgroundColor = "yellow";
}


var colorRed = document.createElement("div");
colorRed.setAttribute("class", "colors");
colorRed.style.width= "65px";
colorRed.style.height= "50px";
colorRed.style.backgroundColor = "#FF0066";
colorRed.style.border = "1px solid black";
colorRed.style.float = "left";
document.querySelector(".container").appendChild(colorRed);

var colorOrange = document.createElement("div");
colorOrange.setAttribute("class", "colors");
colorOrange.style.width= "65px";
colorOrange.style.height= "50px";
colorOrange.style.backgroundColor = "#FF6600";
colorOrange.style.border = "1px solid black";
colorOrange.style.float = "left";
document.querySelector(".container").appendChild(colorOrange);

var colorYellow = document.createElement("div");
colorYellow.setAttribute("class", "colors");
colorYellow.style.width= "65px";
colorYellow.style.height= "50px";
colorYellow.style.backgroundColor = "#FFFF66";
colorYellow.style.border = "1px solid black";
colorYellow.style.float = "left";
document.querySelector(".container").appendChild(colorYellow);

var colorGreen = document.createElement("div");
colorGreen.setAttribute("class", "colors");
colorGreen.style.width= "65px";
colorGreen.style.height= "50px";
colorGreen.style.backgroundColor = "#009966";
colorGreen.style.border = "1px solid black";
colorGreen.style.float = "left";
document.querySelector(".container").appendChild(colorGreen);

var colorBlue = document.createElement("div");
colorBlue.setAttribute("class", "colors");
colorBlue.style.width= "65px";
colorBlue.style.height= "50px";
colorBlue.style.backgroundColor = "blue";
colorBlue.style.border = "1px solid black";
colorBlue.style.float = "left";
document.querySelector(".container").appendChild(colorBlue);

var colorAqua = document.createElement("div");
colorAqua.setAttribute("class", "colors");
colorAqua.style.width= "65px";
colorAqua.style.height= "50px";
colorAqua.style.backgroundColor = "aqua";
colorAqua.style.border = "1px solid black";
colorAqua.style.float = "left";
document.querySelector(".container").appendChild(colorAqua);

var colorPurple = document.createElement("div");
colorPurple.setAttribute("class", "colors");
colorPurple.style.width= "65px";
colorPurple.style.height= "50px";
colorPurple.style.backgroundColor = "purple";
colorPurple.style.border = "1px solid black";
colorPurple.style.float = "left";
document.querySelector(".container").appendChild(colorPurple);

var colorDeepPink = document.createElement("div");
colorDeepPink.setAttribute("class", "colors");
colorDeepPink.style.width= "65px";
colorDeepPink.style.height= "50px";
colorDeepPink.style.backgroundColor = "#FF1493";
colorDeepPink.style.border = "1px solid black";
colorDeepPink.style.float = "left";
document.querySelector(".container").appendChild(colorDeepPink);

var colorLavender = document.createElement("div");
colorLavender.setAttribute("class", "colors");
colorLavender.style.width= "65px";
colorLavender.style.height= "50px";
colorLavender.style.backgroundColor = "#E6E6FA";
colorLavender.style.border = "1px solid black";
colorLavender.style.float = "left";
document.querySelector(".container").appendChild(colorLavender);


var colorSelector = document.createElement("div");
colorSelector.innerHTML = "Selected Color";
colorSelector.setAttribute("class", "colorSelector");
colorSelector.style.width= "90px";
colorSelector.style.height= "50px";
colorSelector.style.backgroundColor = "white";
colorSelector.style.border = "1px solid black";
colorSelector.style.float = "left";
document.querySelector(".container").appendChild(colorSelector);

var colorChoice = document.querySelectorAll(".colors");
var colorSelected = document.querySelector(".colorSelector");
for (var i= 0; i< colorChoice.length; i++){
	colorChoice[i].addEventListener("click", function(){
	colorSelected.style.backgroundColor= colorChoice.style.backgroundColor
	});
}


for (var i =0; i < board.length; i++){
		board[i].addEventListener("click", function() {
    	this.style.border="1px solid white";
  		this.style.backgroundColor = "white";
});
}









