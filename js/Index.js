let nombreUsuario = prompt("ingrese su nombre y apellido");

if (nombreUsuario) {
    
let mensaje = "hola ";

alert(mensaje + nombreUsuario);

let numeroDocumento = prompt("ingrese su numero de documento");

alert("usted califica para la solicitud de prestamo");

alert("tenga en cuenta que el IVA es del 21%")

let montoElegido = prompt("Ingrese monto deseado a solicitar");

console.log(typeof montoElegido);

let precioParse = parseFloat(montoElegido)

let valorFinal = precioParse * 1.21;

console.log(typeof valorFinal);

alert("El monto a pagar mas el iva es: " + valorFinal)

} else {
console.log("No ha ingresado su nombre completo");



}

