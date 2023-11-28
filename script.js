
function decrease_number(){
    let number = Number(document.querySelector("p").textContent)
    number -= 1
    document.querySelector("p").innerHTML = number
}
