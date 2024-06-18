let precioScons = 2000;
let precioFacturas = 3000;
let precioMasitas = 4000;
let totalP = 0;
let continuarComprando = true;

alert("Bienvenidos a PasteleriaRosa. Por favor, elija los productos para agregar al carrito de compras.");

while (continuarComprando) {
    const productoElegido = prompt("Ingrese el número del producto que desea comprar:\n1. Scons\n2. Facturas\n3. Masitas\n\nSi desea finalizar la compra, por favor ingrese FINALIZAR:");

    switch (productoElegido) {
        case "1":
            totalP += precioScons;
            alert("Excelente, usted ha agregado Scons.");
            break;
        case "2":
            totalP += precioFacturas;
            alert("Excelente, usted ha agregado Facturas.");
            break;
        case "3":
            totalP += precioMasitas;
            alert("Excelente, usted ha agregado Masitas.");
            break;
        case "FINALIZAR":
            continuarComprando = false;
            break;
        default:
            alert("Opción inválida. Por favor, elija un número válido o escriba 'FINALIZAR' para finalizar la compra.");
    }
}

if (totalP > 0) {
    const opcionFinal = confirm(`El total es de $${totalP}. Muchas gracias por su compra! Hasta luego!`);
}