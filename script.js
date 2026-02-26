console.log("===== MATH LAB JS =====");

// 1️somas
function somar(a, b) {
  return a + b;
}

// sub
function subtrair(a, b) {
  return a - b;
}

//  (arrow function....)
const multiplicar = (a, b) => a * b;

//  div
const dividir = (a, b) => {
  if (b === 0) {
    return "Erro: divisão por zero!";
  }
  return a / b;
};

// potencias
function potencia(base, expoente) {
  return Math.pow(base, expoente);
}

//  raiz quad 
function raizQuadrada(numero) {
  return Math.sqrt(numero);
}

//  numero aleator..
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//  arredondamentos dos valores 
function arredondamentos(numero) {
  return {
    arredondado: Math.round(numero),
    paraCima: Math.ceil(numero),
    paraBaixo: Math.floor(numero)
  };
}


// os testes

console.log("Soma:", somar(10, 5));
console.log("Subtração:", subtrair(10, 5));
console.log("Multiplicação:", multiplicar(10, 5));
console.log("Divisão:", dividir(10, 5));
console.log("Potência:", potencia(2, 3));
console.log("Raiz Quadrada:", raizQuadrada(25));
console.log("Número Aleatório (1-10):", numeroAleatorio(1, 10));
console.log("Arredondamentos:", arredondamentos(4.7));