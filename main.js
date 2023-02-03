// Modelo 1
// let numeroUm = 1;
// let numeroDois = 2;

// let result = numeroUm + numeroDois
// console.log("O resultado da soma é: ", result)


//Modelo 2:
// let numero1 = prompt("Informa o primeiro número: ")
// let numero2 = prompt("Informe o número dois: ");

// let numeroNew1 = parseInt(numero1)
// let numeroNew2 = parseInt(numero2)

// var resultant = parseInt(numeroNew1 + numeroNew2)

// alert("O resultado da soma é: " + resultant)



// Modelo 3 - Calculadora IMC
console.log("Calculadora IMC")

let peso = prompt("Informe qual seu peso (KG)")
let pesoNumber = parseFloat(peso)
console.log(pesoNumber)

let altura = prompt("Informe sua altura (Cm ex: 180)")
let alturaNumber = parseFloat(altura /100)
console.log(alturaNumber)


let calcImc = pesoNumber / (alturaNumber * alturaNumber)
console.log("Resultado",calcImc)



if (calcImc < 17){
    alert("Você está muito abaixo do peso")
    }
    else if (calcImc > 17 && calcImc <= 18.49){
        alert("Você está abaixo do peso")
    }
    else if (calcImc > 18.5 && calcImc <= 29.99){
        alert("Você está com sobrepeso")
    }
    else if (calcImc >=30 && calcImc <= 34.99){
        alert("Você está em Obesidade 1")
    }
    else{
        alert("Você está em Obesidade 2")
    }
        