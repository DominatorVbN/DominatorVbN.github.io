var modal 				= document.getElementById('myModal');

var moreScreensAluna	= document.getElementById("more-screens-aluna");
var moreScreensMathStar = document.getElementById("more-screens-mathstar");
var moreScreensSPI 		= document.getElementById("more-screens-spi");
var modalImg 			= document.getElementById("img01");


moreScreensAluna.onclick = function() {
    modal.style.display = "block";
    modalImg.src = "img/index/product-aluna.jpg"
}

moreScreensMathStar.onclick = function() {
    modal.style.display = "block";
    modalImg.src = "img/index/product-mathstar.jpg"
}

moreScreensSPI.onclick = function() {
    modal.style.display = "block";
    modalImg.src = "img/index/product-spi.jpg"
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}