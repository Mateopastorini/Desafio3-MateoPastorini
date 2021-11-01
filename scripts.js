// DEVUELVE EL NOMBRE, PARENTESCO Y EDAD DE CADA INTEGRANTE DE TU FAMILIA

let cant = parseInt(prompt("Ingrese la cantidad de integrantes de su familia (Maximo 10)"))
let nombre
let parentesco
let edad
let i = 1

while (i <= cant && cant < 11 && cant > 0) {
    i++
    nombre = prompt("Ingrese el nombre del integrante de la familia")
    parentesco = prompt("Ingrese el parentesco de " + nombre)
    edad = parseInt(prompt("Ingrese la edad de " + nombre))
    document.write(`<div class="card"><h2>Nombre: ${nombre} <br>
    Parentesco: ${parentesco} <br>
    Edad: ${edad}</div>`)
}

if (cant < 1 || cant > 10 || isNaN(cant)) {
    document.write(`<div class="centrado">
    <h1 class="error">¡Error! Debe ingresar un número entre 1 y 10.</h1>
    <h1>Actualice la pagina para volver a intentarlo.</h1>
    <div class="error_img"><img src="error.png"></div>
    </div>`)
}