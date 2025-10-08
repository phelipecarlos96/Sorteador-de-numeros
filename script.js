//Consultei a documentação Math Random

const buttonSortear = document.querySelector("button")

function generationNumber() {
    const valorMin = Math.ceil(document.querySelector(".input-min").value)
    const valorMax = Math.floor(document.querySelector(".input-max").value)

    if (valorMin > valorMax) {
        alert("O valor minimo tem que ser MENOR que o valor máximo!")
    } else {
        const result = Math.floor(Math.random() * (valorMax - valorMin + 1)) + valorMin;
        const resultado = document.querySelector("p").innerHTML = result
    }
}

buttonSortear.addEventListener("click", generationNumber)

