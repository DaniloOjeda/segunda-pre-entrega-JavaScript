condicionales
let nombre = "Mundo pezca"
if ( nombre == "Mundo pezca") {
    console.log("Bienvenido a", nombre)
}

let nombreUsuario = prompt("ingrese su nombre de usuario");

if (nombreUsuario == "") {
    alert("No ingresaste nombre de usuario");
}
else {
    alert("Nombre de usuario ingresado " + nombreUsuario)
}