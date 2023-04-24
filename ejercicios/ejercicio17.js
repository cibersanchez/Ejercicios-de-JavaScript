const Espinal = document.getElementById('Tolima');

Espinal.addEventListener('click', (e) => {
    e.preventDefault(); 
    const numClientes = parseInt(prompt("Ingrese el número de clientes: "));
    let totalConsumo = 0;
    let promedioConsumo = 0;
    let clienteMayorSubsidio = '';
    let mayorSubsidio = 0;
    let clienteMenorSubsidio = '';
    let menorSubsidio = Number.MAX_VALUE;

    for(let i = 1; i <= numClientes; i++){
    const nombreCliente = prompt(`Ingrese el nombre del cliente ${i}: `);
    const estrato = parseInt(prompt(`Ingrese el estrato de ${nombreCliente}: `));
    const lecturaAnterior = parseInt(prompt(`Ingrese la lectura anterior de ${nombreCliente}: `));
    const lecturaActual = parseInt(prompt(`Ingrese la lectura actual de ${nombreCliente}: `));
    const vatios = parseInt(prompt(`Ingrese el valor en vatios del consumo de ${nombreCliente}: `));

    const consumo = lecturaActual - lecturaAnterior;
    let subtotal = consumo * vatios;
    let subsidio = 0;

    if(estrato === 1){
        subsidio = subtotal * 0.2;
    } else if(estrato === 2){
        subsidio = subtotal * 0.1;
    }

    subtotal -= subsidio;
    totalConsumo += subtotal;
    promedioConsumo = totalConsumo / numClientes;

    if(subsidio > mayorSubsidio){
        mayorSubsidio = subsidio;
        clienteMayorSubsidio = nombreCliente;
    }

    if(subsidio < menorSubsidio){
        menorSubsidio = subsidio;
        clienteMenorSubsidio = nombreCliente;
    }

    alert(`Cliente: ${nombreCliente}`);
    alert(`Consumo: ${consumo} kWh`);
    alert(`Subtotal: $${subtotal}`);
    alert(`---------------------------`);

    }
    alert(`Total a pagar: $${totalConsumo}`);
    alert(`Promedio de consumo: $${promedioConsumo}`);
    alert(`Cliente con mayor subsidio: ${clienteMayorSubsidio} (subsidio de $${mayorSubsidio})`);
    alert(`Cliente con menor subsidio: ${clienteMenorSubsidio} (subsidio de $${menorSubsidio})`);


})
