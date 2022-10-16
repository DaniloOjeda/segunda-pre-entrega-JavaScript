class Producto {
    constructor(nombre, modelo, precio, cantidad) {
        this.nombre = nombre;
        this.modelo = modelo;
        this.precio = parseFloat(precio);
        this.cantidad = cantidad;
        this.disponible = true;
    }
        precioFinal() {
            return this.precio * 1.21
        }

        Vender() {
            this.disponible = false;
        }
        nombreUC() {
            return this.nombreUC.toUpperCase()
        }
}


var arrayProductos = []; // Declaramos el arrayProductos en una nueva posición de memoria
do{
    var comprobacion = prompt("Ingrese producto luego FIN para terminar de agregar");
    if (comprobacion === "fin" || comprobacion === "FIN" || comprobacion === "Fin"){
        break;
    }else{
        nombreP = comprobacion;
        var modeloP = prompt("Ingrese el modelo del producto");
        var precioP = prompt("ingrese el precio del producto");
        var cantidadP = prompt("ingrese cantidad del producto");
        arrayProductos.push(new Producto(nombreP, modeloP, precioP, cantidadP));
    }
}
while (comprobacion != "fin" || comprobacion != "FIN" || comprobacion != "Fin" )

console.log(arrayProductos);

for (var producto of arrayProductos) {
   var contenedor = document.createElement("div");

  document.write("<ul><li><h3> Nombre: " + producto.nombre + "</h3></li>");
  document.write("<li><h3> Modelo: " + producto.modelo + "</h3></li>");
  document.write("<li><h3> Cantidad: " + producto.cantidad + "</h3></li>");
  document.write("<li><h3> Precio: " + producto.precio + "</h3></li>");
  document.write("<li><h3> Precio con IVA es: " + producto.precioFinal() + "</h3></li></ul><br>");
  console.log(producto.nombre);
  console.log(producto.modelo);
  console.log(producto.cantidad);
  console.log(producto.precioFinal());
}

//POCO STOCK MENOR A 10 UNIDADES
var pocoStock = arrayProductos.filter(producto => producto.cantidad <=10 );
console.log("Productos con Poco Stock, comprar nuevamente: ");
console.log(pocoStock);
document.write("<h3> lista de productos con poco Stock (menos de 10 unidades): </h3>");

for (var producto of pocoStock) {
    document.write("<ul><li><h3> Nombre: " + producto.nombre + "</h3></li>");
    document.write("<li><h3> Modelo: " + producto.modelo + "</h3></li>");
    document.write("<li><h3> Cantidad: " + producto.cantidad + "</h3></li></ul><br>");
}

//PRODUCTO SIN STOCK

var sinStock = arrayProductos.filter(producto => producto.cantidad == 0 || producto.disponible == false);
console.log(sinStock);
document.write("<h3> Lista de Productos sin Stock (cantidad = 0 o disponible = false): </h3>");
for (var produto of sinStock) {
    document.write("<ul><li><h3> Nombre: " + producto.nombre + "</h3></li>");
    document.write("<li><h3> Modelo: " + producto.modelo + "</h3></li>");
    document.write("<li><h3> Cantidad: " + producto.cantidad + "</h3></li></ul><br>");
}

//BUSCAR PRODUCTO ESPECIFICO POR NOMBRE INGRESADO

var ingresado = prompt("ingresar el producto que quiere buscar");
var prodIngresado = arrayProductos.filter(producto => producto.nombre.includes(ingresado));
console.log(prodIngresado);
for (var producto of prodIngresado)  {

    document.write("<ul><li><h3> Nombre: " + producto.nombre + "</h3></li>");
    document.write("<li><h3> Modelo: " + producto.modelo + "</h3></li>");
    document.write("<li><h3> Precio: " + producto.precio + "</h3></li></ul><br>");
}

//PRODUCTO ORDENADO POR CANTIDAD

var ordenadosCantidad = []; // Declaramos el array ordenadosCantidad en una nueva posición de memoria
ordenadosCantidad = arrayProductos.map(elemento => elemento);
ordenadosCantidad.sort(function(a, b)  {
    return a.cantidad - b.cantidad;
});
console.log("Ordenados por Cantidad Ascendente:  ");
console.log(ordenadosCantidad);
document.write("<h3> Lista de Productos ordenados por cantidad: </h3>");

for (var producto of ordenadosCantidad)  {
    document.write("<ul><li><h3> Nombre: " + producto.nombre + "</h3></li>");
    document.write("<li><h3> Modelo: " + producto.modelo + "</h3></li>");
    document.write("<li><h3> Cantidad: " + producto.cantidad + "</h3></li></ul><br>");
}

//ORDENADOS POR PRECIO

var ordenadosPrecio = [];  // Declaramos el array ordenadosPrecio en una nueva posición de memoria
ordenadosPrecio = arrayProductos.map(elemento => elemento);
var ordenadosPrecio = arrayProductos;
ordenadosPrecio.sort(function(a, b) {
    return a.precio - b.precio;
});
console.log("Ordenados por Precios Ascendentes");
console.log(ordenadosPrecio);
document.write("<h3> Lista de Productos ordenados por Precio Ascendente: </h3>");

for (var producto of ordenadosPrecio)  {
    document.write("<ul><li><h3> Nombre: " + producto.nombre + "</h3></li>");
    document.write("<li><h3> Modelo: " + producto.modelo + "</h3></li>");
    document.write("<li><h3> precio: " + producto.precio + "</h3></li></ul><br>");
}




/** Cotizador seguro embarcacion **/

const seguroBase = 0.014

class seguro {
    constructor(marca, modelo, precio) {
        this.marca = marca
        this.modelo = modelo
        this.precio = precio
    }
    cotizar() {
        return this.precio * seguroBase
    }
} 

function cotizarSeguro() {
    let marca = prompt("Ingresa marca del producto").toUpperCase()
    let modelo = prompt("Ingresa modelo del producto").toUpperCase()
    let precio = parseInt(prompt("Ingresa el precio del producto")) 
    
    const valorSeguro = new seguro(marca, modelo, precio)

    console.log("valor del seguro en $", valorSeguro.cotizar())
}