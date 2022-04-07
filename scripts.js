let qtd = prompt("quantas cartas?");
let cont = 0;
let container = document.querySelector(".container");
while(cont < qtd) {
    container.innerHTML = container.innerHTML + `<div class="carta"> <img src="images/front.png" /> </div>`;
    cont ++;
}
