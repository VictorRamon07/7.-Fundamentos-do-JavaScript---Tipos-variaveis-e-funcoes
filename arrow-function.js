function apresentar(nome) {
    return `meu nome é ${nome}`;
}

const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (numero1, numero2) => numero1 +  numero2;

console.log(apresentar("Victor"));
console.log(apresentarArrow("Victor"));
console.log(soma(1,2));

//Arrow function com  +  de 1 linha de instrução

const somaNumerosPequenos = (numero1, numero2) => {
    if(numero1 || numero2 > 10){
        return "somente números de 1 a 9"
    } else {
        return numero1 + numero2;
    }
}

//Hoisting: arrow function se comporta como expressão de funções

// operador maior ou igual que
// >=