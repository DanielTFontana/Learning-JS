class aeronaves{
    constructor(nome, tripulaMax, valorMaxRecomend){
        this.nome = nome
        this.tripulaMax=tripulaMax
        this.valorMaxRecomend=valorMaxRecomend
        this.velocidadeAtual = 0

    }

    speedUp(aceleration){
        this.velocidadeAtual += aceleration
        if(this.velocidadeAtual > this.valorMaxRecomend){
            console.log('Ultrapassou a velocidade máxima')

        }
    }
}

class aeronaveTransporte extends aeronaves{
    constructor(nome, tripulaMax, valorMaxRecomend, cargaMax){
        super(nome, tripulaMax, valorMaxRecomend)
        this.cargaMax = cargaMax
        
    }
    speedUp(aceleration){
        aceleration /= 2
        console.log(`acelerando em ${aceleration}km/s`)
        super.speedUp(aceleration)
    }

}

let transportadoraNave = new aeronaveTransporte('Cegonha', 10, 100, 6000)

console.log(transportadoraNave)

transportadoraNave.speedUp(210)

console.log(transportadoraNave)