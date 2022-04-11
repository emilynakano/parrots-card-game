let arrayGif = [
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

let firstCard, secondCard;
let jogada = 0;
let ma = 0;
let cont = 0;
let container = document.querySelector(".container");

let numberCards = prompt("quantas cartas deseja jogar?");

while(numberCards < 4 || numberCards > 14 ||  numberCards % 2 != 0) {
    numberCards = prompt("a quantia deve ser um numero par entre 4 e 14, digite novamente");
}

arrayGif.length = numberCards;

arrayGif.sort(comparador); 

function comparador() { 
	return Math.random() - 0.5; 
}

function flip(elemento) {
    if(!firstCard) {
        firstCard = elemento;
    } else { 
        secondCard = elemento;
    }

    firstCard.querySelector(".front-face").classList.add("front-faceSelecionada");
    firstCard.querySelector(".back-face").classList.add("back-faceSelecionada");
    secondCard.querySelector(".front-face").classList.add("front-faceSelecionada");
    secondCard.querySelector(".back-face").classList.add("back-faceSelecionada");
    
    
    
    
    if(firstCard.innerHTML === secondCard.innerHTML) {

        secondCard.querySelector(".front-face").classList.add("afront-faceSelecionada");
        secondCard.querySelector(".back-face").classList.add("aback-faceSelecionada");
        firstCard.querySelector(".front-face").classList.add("afront-faceSelecionada");
        firstCard.querySelector(".back-face").classList.add("aback-faceSelecionada");
        ma ++;
    
    }
    setTimeout( function() {
        secondCard.querySelector(".front-face").classList.remove("front-faceSelecionada");
        secondCard.querySelector(".back-face").classList.remove("back-faceSelecionada");
        firstCard.querySelector(".front-face").classList.remove("front-faceSelecionada");
        firstCard.querySelector(".back-face").classList.remove("back-faceSelecionada");
        [firstCard, secondCard] = [null, null];
        jogada = jogada + 1;
      }, 1000);
 
      if(ma === numberCards/2) {
        setTimeout( function() {
          alert(`Yay! Você ganhou em ${(jogada * 2) + 2} jogadas`);
        }, 50);
    }
      
}


while(cont < numberCards) {
    container.innerHTML = container.innerHTML + `<div class="card" onclick="flip(this)">
    <div class="back-face">
        <img src="${arrayGif[cont]}"  />
    </div>
    <div class="front-face">
        <img src="images/front.png" />
    </div>
    
</div>

`;
    cont ++;
}







