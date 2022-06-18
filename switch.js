let anosLuz= prompt('Qual a distância em anos-luz?')
let conv = prompt('Selecione sua unidade de medida:\n km\n pc\n au')
let menor = conv.toLocaleLowerCase()
switch(menor){
    case 'km':
        alert(`${anosLuz} anos-luz é igual: ${anosLuz*9460800000000}km`) 

        break
    case 'pc':
        alert(`${anosLuz} anos-luz é igual: ${anosLuz*0.306601}pc`)

        break

    case 'au':
        alert(`${anosLuz} anos-luz é igual: ${anosLuz*63241.1}AU`)
        break
        
    default:
        alert('Opção inválida!')
}