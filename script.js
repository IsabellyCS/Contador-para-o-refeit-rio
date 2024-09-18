
let contador1 = 0;
let totalPaoQueijo = 0;
let contadorElemento1 = document.getElementById('contador1');
let totalElemento1 = document.getElementById('total1');

function adicionar1() {
    if (contador1 < 2) { 
        contador1++;
        contadorElemento1.textContent = contador1; 
    }
}

function remover1() {
    if (contador1 > 0) {
        contador1--;
        contadorElemento1.textContent = contador1;
    }
}

function reiniciar1() {
    contador1 = 0; 
    contadorElemento1.textContent = contador1;
}

let contador2 = 0;
let totalPaoManteiga = 0; 
let contadorElemento2 = document.getElementById('contador2');
let totalElemento2 = document.getElementById('total2');

function adicionar2() {
    if (contador2 < 2) { 
        contador2++;
        contadorElemento2.textContent = contador2;
    }
}

function remover2() {
    if (contador2 > 0) {
        contador2--;
        contadorElemento2.textContent = contador2;
    }
}

function reiniciar2() {
    contador2 = 0;
    contadorElemento2.textContent = contador2; 
}

function aplicar() {

    totalPaoQueijo += contador1;
    totalPaoManteiga += contador2;

    totalElemento1.textContent = totalPaoQueijo;
    totalElemento2.textContent = totalPaoManteiga;

    contador1 = 0;
    contador2 = 0;
    contadorElemento1.textContent = contador1;
    contadorElemento2.textContent = contador2;
}
