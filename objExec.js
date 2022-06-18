let spaceship = {
    velocity:0,
    speedUp: function(aceleration){
        this.velocity +=aceleration

    }
}

function registerSpaceship(){
    spaceship.name = prompt('Qual o nome da nave?')
    spaceship.type = prompt('qual o tipo da nave?')
    spaceship.maxVelocity = Number (prompt('Qual a velocidade máxima da nave? (em ks/s)'))
}

function acelerate(){
    let aceleration = Number(prompt('Quantos km/s você deseja acelerar?'))
    spaceship.speedUp(aceleration)
    if(spaceship.velocity>spaceship.maxVelocity ){
        alert('Velocidade máxima ultrapassada')
    }
}

function Stop(){
    alert(`Nome: ${spaceship.name}\nTipo: ${spaceship.type}\nVelocidade: ${spaceship.velocity}\nVelocidade Máxima${spaceship.maxVelocity}`)

}

function showMenu(){
    let chosenOption
    do {
        chosenOption = prompt('Você deseja:\n 1- Acelerar\n 2-Parar')
        switch(chosenOption){
            case '1':
                acelerate()
                break

            case '2':
                Stop()
                break

            default: alert('Opção Inválida')
        }
    } while(chosenOption != '2')
}

registerSpaceship()
showMenu()