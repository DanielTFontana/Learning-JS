let nomeNave = prompt('Qual o nome da nave?')
let ask = prompt('Qual letra deseja substituir?')
let ask2 = prompt(`Por qual letra deseja substituir ${ask}?`)
let newName = ""


for(let i = 0; i < nomeNave.length; i++){
    if(nomeNave[i] == ask){
        newName += ask2
    }
    else{
        newName += nomeNave[i]
    }
}

alert(`O nome da nave era ${nomeNave} e se tornou ${newName}`)