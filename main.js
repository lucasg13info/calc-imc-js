//Array de objetos
let carros = [
    { 
    id: 1,
    modeloCarro: "Gol G5", 
    anoFabricacao: "2023", 
    marca: "Volkswagen",
    preco: 20000,
    },
    { 
    id: 2,
    modeloCarro: "Argo ", 
    anoFabricacao: "2019", 
    marca: "Fiat",
    preco: 54000,
    },
    { 
    id: 3,
    modeloCarro: "Zafira", 
    anoFabricacao: "2012", 
    marca: "Chevrolet",
    preco: 39900,
    },
    { 
    id: 4,
    modeloCarro: "Creta", 
    anoFabricacao: "2017", 
    marca: "Hyundai",
    preco: 83000,
    },
    { 
    id: 5,
    modeloCarro: "Polo", 
    anoFabricacao: "2018", 
    marca: "Volkswagen",
    preco: 74000,
    }
]

//Ordenação SORT

//Colocando os carros em ordem Alfabética:
carros.sort(function(a,b) {
    if(a.modeloCarro <b.modeloCarro){
        return -1;
    }else {
        return true;
    }
})

console.log(carros)



//Colocando os carros de valor, mais barato na frente:
carros.sort(function(a,b) {
    if(a.preco < b.preco){
        return -1;
    }else {
        return true;
    }
})
console.log(carros)