function showinfo(){

let name = document.querySelector("input[name='name']").value
let color = document.querySelector("select[name='color'] option:checked").text
let likePrograming = document.querySelector("input[name='like-programming']:checked").value
let devOptions = document.querySelectorAll("input[name='developer-options']:checked")

let optionsValue = []

devOptions.forEach(element =>{optionsValue.push(element.value)})

let optionsChecked = optionsValue.join(", ")

window.alert(`Nome: ${name}\nCor: ${color}\nGosta de Programar: ${likePrograming}\nConhecimentos em programação: ${optionsChecked}`)
}