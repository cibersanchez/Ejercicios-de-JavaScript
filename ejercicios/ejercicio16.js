const Energia= document.getElementById('espinal');

Energia.addEventListener('click', (e) => {
    e.preventDefault(); 

    // Definir un arreglo vacío para guardar los datos de cada cliente
let clientes = [];

// Solicitar el número de clientes al usuario
let numClientes = parseInt(prompt("Ingrese el número de clientes:"));

// Iterar por cada cliente
for (let i = 0; i < numClientes; i++) {
  // Solicitar los datos del cliente
  let numCliente = parseInt(prompt(`Ingrese el número de cliente ${i + 1}:`));
  let lecturaAnterior = parseFloat(prompt("Ingrese la lectura anterior:"));
  let lecturaActual = parseFloat(prompt("Ingrese la lectura actual:"));
  let valorVatios = parseFloat(prompt("Ingrese el valor de vatios:"));

  // Calcular el consumo y el total a pagar
  let consumo = lecturaActual - lecturaAnterior;
  let totalPagar = consumo * valorVatios;

  // Guardar los datos del cliente en el arreglo
  clientes.push({ numCliente, consumo, totalPagar });

  // Imprimir los resultados para el cliente actual
  alert(`Cliente ${numCliente}:`);
  alert(`Consumo: ${consumo} vatios`);
  alert(`Total a pagar: $${totalPagar}\n`);
}

// Calcular el promedio general
let consumoTotal = 0;
for (let cliente of clientes) {
  consumoTotal += cliente.consumo;
}
let promedioGeneral = consumoTotal / numClientes;

// Imprimir el promedio general
alert(`Promedio general: ${promedioGeneral} vatios`);


})