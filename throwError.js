class tiro{
    constructor(id){
    this.id=id
    this.tiros = 5
}
atirar(){

    if(this.tiros > 0){
    
    console.log('pow!')
    this.tiros -= 1
    }

    else{
        throw new Error(`Arma ${this.id} está sem munição`)
    }
        }

        reload(){
            this.tiros = 5
        }
}
let desertEagle = new tiro(10)//Esse 10 é o id da arma


try{
for (let i=0;i<5;i++){

desertEagle.atirar()
console.log(desertEagle)
    }
} catch(e){
    console.log(e.message)
    desertEagle.reload()
}
finally{
    console.log('DesertEagle pipocando!')
}

console.log(desertEagle)