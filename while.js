let cont = 0
let dobra = ""

let nave = prompt('Qual o nome da nave?')
dobra = prompt('Deseja entrar na dobra espacial?\n 1-Sim\n 2-Não\n(digite o número desejado)')
 

while(dobra == '1'){
    cont ++
    dobra = prompt('Gostaria de entrar em mais uma dobra? \n1-Sim \n 2-Não')
    
}
alert(`A nave ${nave} entrou em ${cont} dobras espaciais`)