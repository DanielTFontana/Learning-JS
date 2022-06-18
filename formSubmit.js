function save(){
    event.preventDefault
    let name = document.querySelector("input[name='name']").value
    let programming = document.querySelector("select[name='programming-lang']").value
window.alert(`Nome: ${name}\nLinguagem: ${programming}`)
}