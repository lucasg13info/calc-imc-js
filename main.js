// Aula 1 - Entrada de dados
// Calculadora IMC

let peso = prompt("Informe qual seu peso (KG)")
let pesoNumber = parseFloat(peso)

let altura = prompt("Informe sua altura (Cm ex: 180)")
let alturaNumber = parseFloat(altura /100)

let calcImc = pesoNumber / (alturaNumber * alturaNumber)

// Aula 2 - Condicionais
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
        
