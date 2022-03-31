// 1- Que al hacer submit en el form se genere un div con clase "mensaje" y se anexe dentro de #wall
/* const form = document.querySelector("form");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderDiv("#wall")
})

const renderDiv = (id) => {
    const contenedorDivs = document.querySelector(`${id}`)
    let divNuevo = document.createElement("div")
    const inputNuevo = document.createElement("input")
    inputNuevo.className = "mensaje" 
    divNuevo.className= "mensaje"
    divNuevo.innerHTML=`
    <p>Hola</p>
    `
    
    contenedorDivs.appendChild(divNuevo)
} 
 */


// 2- Si no existe, agregar un input de tipo texto al form y modificar el script para que ese texto se incluya en un párrafo adentro de cada nuevo .mensaje 
// 2.1- Evitar que el input quede vacío.
// 3- Si no existe, agregar un input de tipo color al form y modificar el script para que el texto del nuevo .mensaje sea del color seleccionado

/* const form = document.querySelector("form");

const renderDiv = (id) => {
    const contenedorDivs = document.querySelector(`${id}`)
    const message = document.querySelector("#message")
    const color = document.querySelector("#color")
   
    let div = document.createElement("div")

    div.className= "mensaje"
    div.innerHTML=`
    <p>${message.value}</p>
    `
    div.style.color = color.value
    
    contenedorDivs.appendChild(div)
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderDiv("#wall")
})  */


// 4- Agregar una X dentro de un span con clase "close" en cada .mensaje nuevo para agregar la funcionalidad de eliminar ese graffiti
// 5- Agregar un input de tipo checkbox al form y modificar el script para que el .mensaje tenga la clase .poster en lugar de .graffiti 
const form = document.querySelector("form");
const grafitiPoster = document.querySelector("#is-poster")

const renderDiv = (id) => {
    const paredDivs = document.querySelector(`${id}`)
    const mensaje = document.querySelector("#message")
    const color = document.querySelector("#color")
    const colorPoster = document.querySelector("#color-poster")

    let div = document.createElement("div")

    div.className = "mensaje"

    grafitiPoster.checked ? div.classList.add("poster") : div.classList.add("graffiti");
    grafitiPoster.checked ? div.style.backgroundColor = colorPoster.value : "";

    div.innerHTML = `
    <span class = "close">&times; </span>
    <p>${mensaje.value}</p>`
    div.style.color = color.value

    paredDivs.appendChild(div)
    form.reset()
}


const wall = document.querySelector("#wall");
wall.addEventListener('click', (evento) => {
    wall.removeChild(evento.target.parentNode);
})

function deleteAll(){
    wall.innerHTML = " "
}
form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderDiv("#wall")
})



// BONUS- Al hacer submit, los inputs del formulario deben volver a los valores iniciales