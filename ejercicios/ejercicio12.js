const Salario = document.getElementById('DoceSalario');

Salario.addEventListener('click', (e) => {
    e.preventDefault();

    // Pedimos al usuario que ingrese los datos del empleado
    let nombre = prompt("Ingrese el nombre del empleado:");
    let salarioBasico = parseFloat(prompt("Ingrese el salario básico del empleado:"));

    // Calculamos la retención
    let retencion = 0;

    if (salarioBasico < 2000000) {
        retencion = 0;
    } else if (salarioBasico >= 2000000 && salarioBasico <= 3000000) {
        retencion = salarioBasico * 0.05;
    } else if (salarioBasico > 3000000) {
        retencion = salarioBasico * 0.08;
    }

    // Calculamos el total por pagar
    let totalPagar = salarioBasico - retencion;

    // Imprimimos los resultados
    alert("Empleado: " + nombre);
    alert("Salario básico: " + salarioBasico);
    alert("Valor de la retención: " + retencion);
    alert("Total por pagar: " + totalPagar);

})