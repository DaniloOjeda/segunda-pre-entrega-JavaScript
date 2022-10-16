

function verProductos() {
    let productos = "Productos disponibles: \n" +
                  "1) Caña de pezca 2.10 \n" +
                  "2) Reel Frontal \n" +
                  "3) Reel Rotativo \n" 
                
    let respuesta = prompt("Ingresa el nro. de producto para ver el precio: \n" + productos)
    switch (parseInt(respuesta)) {
        case 1:
            console.log("Producto elegido 'Caña de pezca'. Su precio es de $ 4500")
            break;
        case 2:
            console.log("Producto elegido 'Reel Frontal'. Su precio es de $ 9600") 
            break; 
        case 3:
            console.log("Producto elegido 'Reel Rotativo'. Su precio es de $ 10000")  
            break;  
                        
            default:
                console.error("no se reconoce el producto ingresado.")
    }
                let continuar = confirm("¿Deseas consultar el valor de otro producto?")
                if (continuar) {
                    verProductos()
                }
}