//Exemplo de SET

class NaveTransporte{
    constructor(name){
        this.name = name
        this.currentVelocity =0

    }
    set velocity (newVelocity){
        if(newVelocity > 120){
            this.currentVelocity = 120
        }
        else{
            this.currentVelocity = newVelocity
        }
    }
}

let transportadora = new NaveTransporte('transporter')

transportadora.velocity = 130

console.log(transportadora)

//Exemplo get
class EstacaoDeProcessamento{
    constructor(nome, cargaMensalProcessada){
        this.nome = nome
        this.cargaMensalProcessada = cargaMensalProcessada

}
get cargaSemanalProcessada() {
    return `A carga semanal processada foi de: ${this.cargaMensalProcessada/4}`
}
}

let novaEstacao = new EstacaoDeProcessamento ('Gaia', 20000)


console.log(novaEstacao)

console.log(novaEstacao.cargaSemanalProcessada)