function number_color(number){
    if (number < 0){
        console.log("test");
        document.querySelector("p").style.color = "red"
    }
    else if (number > 0){
        document.querySelector("p").style.color = "green"
    }
    else {
        document.querySelector("p").style.color = "white"
    }
}

function decrease_number(){
    let number = Number(document.querySelector("p").textContent)
    number -= 1
    document.querySelector("p").innerHTML = number
    number_color(number)
}
