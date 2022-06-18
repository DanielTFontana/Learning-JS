//criar uma espaçonave que acelera. a variável estática será uma taxa constante de desaceleração de 15%

class spaceship{

    static get TaxaDesaceleração(){
        return 0.15
    }

    constructor(name){
        this.name=name
        this.velocity = 0
    }
    speedUp(aceleration){
        this.velocity += (aceleration * (1-spaceship.TaxaDesaceleração))
    }
}

let daniel= new spaceship ('apolo11') 

daniel.speedUp(200)

console.log(daniel)