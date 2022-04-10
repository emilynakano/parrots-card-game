let gifs = [
    "images/bobrossparrot.gif",
    "images/bobrossparrot.gif",
    "images/explodyparrot.gif",
    "images/explodyparrot.gif",
    "images/fiestaparrot.gif",
    "images/fiestaparrot.gif",
    "images/metalparrot.gif",
    "images/metalparrot.gif",
    "images/revertitparrot.gif",
    "images/revertitparrot.gif",
    "images/tripletsparrot.gif",
    "images/tripletsparrot.gif",
    "images/unicornparrot.gif",
    "images/unicornparrot.gif"
]
let qtd = prompt("quantas cartas?");
while(qtd < 4 || qtd > 14) {
    qtd = prompt("quantas cartas?");
}

gifs.length = qtd;
gifs.sort(comparador); 
function comparador() { 
	return Math.random() - 0.5; 
}

let cont = 0;
let container = document.querySelector(".container");

while(cont < qtd) {
    container.innerHTML = container.innerHTML + `<div class="oi" onclick="virar(this)">
    <div class="gif">
        <img src="${gifs[cont]}" class="back-face" />
    </div>
    <div class="carta">
        <img src="images/front.png" class="front-face" />
    </div>
    
</div>

`;
    cont ++;
}







