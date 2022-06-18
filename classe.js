class spaceships {
    constructor(name, tripulação){
        this.name = name
        this.tripulação = tripulação
        this.engate =false
        this.portas = false
    }
 hitch(){ 
     this.engate = true
     this.portas = true
    }
}

function menu(){
    let option
    while (option != '1' && option != '2' && option !='3') {
        option = prompt(`O que deseja fazer?\n1-Engatar nave?\n2-Imprimir nave\n3-Sair do programa`)
        
    }
    return option
}

function criandoNave(){
    let nomeNave = prompt('Qual o nome da sua nave?')
    let quantTripulação = prompt('Qual a quantidade de tripulantes?')
    let naves = new spaceships(nomeNave, quantTripulação)
    return naves
}

function printarNaves(navesEngatadas){
    let listaNaves = ""
   navesEngatadas.forEach((spaceship, index) => {
        listaNaves+= "Nave número " + (index +1 ) + `: \n Nome: ${spaceship.name}\n Tripulação: ${spaceship.tripulação}\n`
    })
    alert(listaNaves)

}

let navesEngatadas = []

let chosenOption

while (chosenOption != '3') {
    chosenOption = menu()

    switch(chosenOption) {
        case '1':
            let addNave = criandoNave()
            addNave.hitch()
            navesEngatadas.push(addNave)
        break

        case '2':
            printarNaves(navesEngatadas)
            break

    }
    
    
}