alert("Bienvenidos a la tienda de celulares online");
alert("Elija el producto que desea llevar, para salir ingrese 0");

let productos = Number(prompt("1-Samsung $130000 2-Iphone $150000 3-Xiaomi $50000 4-Nokia $65000 5-Motorola $120000"));
let seleccionarCantidad;
let total = 0;

const calcularTotal = (cantidad, precio) => {
  return cantidad * precio;
};

while (productos != 0) {
  switch (productos) {
    case 1:
      seleccionarCantidad = Number(prompt("El producto seleccionado es Samsung, indique la cantidad"));
      total += calcularTotal(seleccionarCantidad, 130000);
      break;
    case 2:
      seleccionarCantidad = Number(prompt("El producto seleccionado es iPhone, indique la cantidad"));
      total += calcularTotal(seleccionarCantidad, 150000);
      break;
    case 3:
      seleccionarCantidad = Number(prompt("El producto seleccionado es Xiaomi, indique la cantidad"));
      total += calcularTotal(seleccionarCantidad, 50000);
      break;
    case 4:
      seleccionarCantidad = Number(prompt("El producto seleccionado es Nokia, indique la cantidad"));
      total += calcularTotal(seleccionarCantidad, 65000);
      break;
    case 5:
      seleccionarCantidad = Number(prompt("El producto seleccionado es Motorola, indique la cantidad"));
      total += calcularTotal(seleccionarCantidad, 120000);
      break;
    default:
      console.warn("Opción no válida. Por favor, seleccione un producto válido.");
      break;
  }
  productos = Number(prompt("1-Samsung $130000 2-Iphone $150000 3-Xiaomi $50000 4-Nokia $65000 5-Motorola $120000"));
  console.log(seleccionarCantidad)
}

console.log("El total de la compra es de: $" + total);

const envio = () => {
  if (total >= 100000) {
    console.log("El envío es gratuito.");
  } else {
    console.log("El costo del envío es de 5000.");
  }
};

envio();

const metodoDePago = () => {
  let metodo = prompt("Ingrese el método de pago: tarjeta o efectivo");
  if (metodo == "tarjeta") {
    total *= 1.1;
    console.log(`Total con recargo de tarjeta: $${total.toFixed(2)}`);
  } else if (metodo == "efectivo") {
    total *= 0.85;
    console.log(`Total con descuento del 15%: $${total.toFixed(2)}`);
  } else {
    console.error("Método de pago no reconocido.");
  }
};

metodoDePago();