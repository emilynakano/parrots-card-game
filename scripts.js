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
let firstCard;
let secondCard;
let jogada = 0;

function virar(elemento) {
    if(!firstCard) {
        firstCard = elemento;
    } else { 
        secondCard = elemento;
    }

    firstCard.querySelector(".carta").classList.add("cartaSelecionada");
    firstCard.querySelector(".gif").classList.add("gifSelecionada");
    secondCard.querySelector(".carta").classList.add("cartaSelecionada");
    secondCard.querySelector(".gif").classList.add("gifSelecionada");
    
    
    
    
    if(firstCard.innerHTML === secondCard.innerHTML) {

        secondCard.querySelector(".carta").classList.add("acartaSelecionada");
        secondCard.querySelector(".gif").classList.add("agifSelecionada");
        firstCard.querySelector(".carta").classList.add("acartaSelecionada");
        firstCard.querySelector(".gif").classList.add("agifSelecionada");
        

    }
    setTimeout( function() {
        secondCard.querySelector(".carta").classList.remove("cartaSelecionada");
        secondCard.querySelector(".gif").classList.remove("gifSelecionada");
        firstCard.querySelector(".carta").classList.remove("cartaSelecionada");
        firstCard.querySelector(".gif").classList.remove("gifSelecionada");
        [firstCard, secondCard] = [null, null];
      }, 1000);

    jogada ++;
}

console.log(jogada);


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







