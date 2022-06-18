
function add(){
    
    let numCasa = document.getElementById('numCasa').value
    let bairro = document.getElementById('bairro').value
    let cidade = document.getElementById('cidade').value
    let area = document.getElementById('area').value

    let result = document.getElementById('result')

    let novaLista = document.createElement('li')
    novaLista.innerText =(`Número da casa: ${numCasa} \nBairro: ${bairro} \nCidade: ${cidade}\nÁrea: ${area}`)

    let removeBotao = document.createElement('button')
    removeBotao.type = 'button'
    removeBotao.innerText = 'Remover'
    removeBotao.setAttribute ('onclick', 'RemoverCasa(this)')
   
    novaLista.appendChild(removeBotao)

    result.appendChild(novaLista)
}

function RemoverCasa(button){
    let rmv = button.parentNode
    document.getElementById('result').removeChild(rmv)
}

   