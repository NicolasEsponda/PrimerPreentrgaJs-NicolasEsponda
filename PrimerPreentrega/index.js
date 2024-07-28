// function startInteractiveCalculator() {
//     // Lista de productos y precios
//     const products = {
//         'Producto A': 10,
//         'Producto B': 20,
//         'Producto C': 30,
//         'Producto D': 15,
//         'Producto E': 25,
//         'Producto F': 35
//     };

//     // Mostrar los productos disponibles
//     let productList = 'Productos disponibles:\n';
//     for (const [product, price] of Object.entries(products)) {
//         productList += `${product} - $${price}\n`;
//     }
//     productList += 'Ingrese el nombre del producto (o "salir" para terminar):';

//     let total = 0;
//     while (true) {
//         // Solicitar el nombre del producto
//         let productName = prompt(productList);
//         if (productName === null || productName.toLowerCase() === 'salir') break;

//         // Verificar si el producto existe
//         if (!products[productName]) {
//             alert('Producto no encontrado. Intente nuevamente.');
//             continue;
//         }

//         // Solicitar la cantidad
//         let quantity = parseInt(prompt(`Ingrese la cantidad para ${productName}:`));
//         if (isNaN(quantity) || quantity <= 0) {
//             alert('Cantidad no válida. Intente nuevamente.');
//             continue;
//         }

//         // Calcular el monto
//         const productPrice = products[productName];
//         const amount = productPrice * quantity;
//         total += amount;

//         // Mostrar el monto en la consola
//         console.log(`${productName} - $${productPrice} x ${quantity} = $${amount.toFixed(2)}`);
//     }

//     // Mostrar el monto total en la consola
//     console.log(`Monto Total: $${total.toFixed(2)}`);
// }

console.log("hola");

Como se declara una funcion y cual es su estructura
function nombreDeLaFuncion() {
    //¿Que va a hacer? Lo que Yo le diga que haga..!!!
}

console.log("Mostrando mensaje.!!");
console.log("Mostrando mensaje.!!");
console.log("Mostrando mensaje.!!");
console.log("Mostrando mensaje.!!");
console.log("Mostrando mensaje.!!");

Aca la declaramos
function enviarMensaje(){
    console.log("Mostrando mensaje.!!");
}