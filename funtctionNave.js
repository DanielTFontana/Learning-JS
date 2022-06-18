let nome = prompt("Qual o nome da nave?")
let veloInicial = 0
let novaVelo = ""

let comando = ""

function spaceShip(){
    while (comando != 4){
    comando = prompt('Seleciona uma das opções a seguir:\n1-Acelerar a nave em 5km/s\n2-Desacelerar a nave em -5km/s \n3-Imprimir o diário de bordo\n4- Sair do programa')

    if (comando == 1){
        novaVelo =  5 + Number (novaVelo)
    }
    else if (comando == 2){
        novaVelo =Number(veloInicial + novaVelo) -5
        if(novaVelo <= 0)
        novaVelo = 0
    }
    else if(comando == 3)
    alert(`A nave ${nome} está a ${Number (novaVelo)}km/s`)

    else if(comando == 4){
        alert('Deixando o programa')
    }

    else{
        alert('Comando inválido!')
    }


}
}
spaceShip()

