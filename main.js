let producto = '';
let cantidad = 0;
let precio = 0;
let seguirComprando = false;
let precioTotal = 0;
let cantidadTotal = 0;

do {
    producto = prompt("Elegi un producto: \n Shampoo, \n Acondicionador, \n Jabon").toLowerCase();
    cantidad = parseInt(prompt("¿Cuantos vas a agregar?"));

while (isNaN(cantidad) || cantidad <= 0) {
    alert("Debe agregar una cantidad válida!");
    cantidad = parseInt(prompt("¿Cuantos vas a agregar?"));
};

//   switch(producto) {
//     case 'shampoo':
//       precio = 1000;
//       break;
//     case 'acondicionador':
//       precio = 1500;
//       break;
//     case 'ambos':
//       precio = 2500;
//       break;
//     default:
//       alert('El producto ingresado no es válido!');
//       cantidad = 0;
//   }

  precioTotal += precio * cantidad;
  cantidadTotal += cantidad;

  seguirComprando = confirm('Desea seguir comprando?');

} while (seguirComprando);

alert('Ha comprado '+cantidadTotal+' productos y el precio final es de $'+precioTotal);