let nombreUsuario = prompt("ingrese su nombre y apellido");
let array = [
  { id: "Argentina", IVA: 0.21 },
  { id: "Brasil", IVA: 0.17 },
  { id: "Chile", IVA: 0.19 },
  { id: "Colombia", IVA: 0.16 },
];
let nombrePais = ["Argentina", "Brasil", "Chile", "Colombia"];

//nombre de usuario diferente a vacio
if (!nombreUsuario == " ") {
  alert("Bienvenido: " + nombreUsuario);
  let numeroDocumento = prompt("ingrese su numero de documento");
  let Edad = prompt("ingrese su edad");
  //si documento es diferente a vacio y es mayor de 18 aÃ±os
  if (!numeroDocumento == " " && Edad >= 18) {
    alert("usted califica para la solicitud de prestamo");
    let pais = prompt("Ingrese su pais de residencia");
    //ingresa un pais y si es diferente a vacio y si no cumple con algun nombre del array
    for (i = 0; i <= nombrePais.length; i++) {
      if (pais === nombrePais[i]) {
        const filter = array.filter(function (array) {
          return array.id == pais;
        });
        let montoElegido = prompt("Ingrese monto deseado a solicitar");
        let precioParse = parseFloat(montoElegido);
        let valorFinal = precioParse * filter.IVA;
        alert(
          "El monto a pagar es: " + valorFinal + " y el IVA es: " + filter.IVA
        );
      } else {
        alert(
          "recarge la pagina y elija uno de los siguientes paises (Argentina,Brasil,Chile,Colombia)"
        );
      }
    }
  } else {
    alert("Usted no es mayor de edad y no es posible pedir un prestamo");
  }
} else {
  alert("No a ingresado su nombre, por favor recarge la pagina");
}