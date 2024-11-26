
let vitorias = textandu()
let derrotas = textandu()
let value = calculando
let nivel = ""

function textandu (vitorias, derrotas){
    calculando = 175 - 75
    return calculando
}

while(value){
    if(value <= 10){
        nivel = "Ferro"    
    }
    else if(value >= 11 && value <= 20){
        nivel = "Bronze"
    }else if(value >= 21 && value <= 50){
        nivel = "Prata"
    }else if(value >= 51 && value <= 80){
        nivel = "Ouro"
    }else if(value >= 81 && value <= 90){
        nivel = "Diamante"
    }else if(value >= 91 && value <= 100){
        nivel = "Lendário"
    }else{
        nivel = "Imortal"
    }
    break
}

console.log(`O Herói tem de saldo ${value} está no nível ${nivel}.`)