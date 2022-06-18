function addNewPhone(){
    const phoneForm = document.querySelector("form#phones")

    const newPhone = phoneForm.children[0].cloneNode(true)
    const phonePosition = phoneForm.children.length + 1
    newPhone.querySelector("label").innerText = `Telefone ${phonePosition}: `
    phoneForm.appendChild(newPhone)
    console.log(phoneForm.children)
}

function printPhones(){

let message =" "
const phones = document.querySelectorAll("#fone")
phones.forEach((phone, index) =>{
    message += `Telefone ${index+1}: ${phone.value}\n`
})
window.alert(message)

//Não consigo entender pq o message não está sendo modificado após o forEach e está exibindo vazio
//Dai troquei no html e coloquei uma id no input e troquei pelo referente do nome. então funcionou ;)
}