const ConsultorioGinecologo = document.getElementById('consultorio');

ConsultorioGinecologo.addEventListener('click', (e) => {
    e.preventDefault(); 

    // Pedimos al usuario que ingrese el número de cita
    let numCita = parseInt(prompt("Ingrese el número de cita:"));

    // Definimos el costo por cita en función del número de cita
    let costoCita = 0;

    if (numCita <= 3) {
        costoCita = 100000;
    } else if (numCita <= 5) {
        costoCita = 80000;
    } else if (numCita <= 8) {
        costoCita = 70000;
    } else {
        costoCita = 50000;
    }

    // Calculamos el costo total del tratamiento
    let costoTratamiento = 0;

    if (numCita <= 3) {
        costoTratamiento = costoCita * numCita;
    } else if (numCita <= 5) {
        costoTratamiento = 3 * 100000 + (numCita - 3) * 80000;
    } else if (numCita <= 8) {
        costoTratamiento = 3 * 100000 + 2 * 80000 + (numCita - 5) * 70000;
    } else {
        costoTratamiento = 3 * 100000 + 2 * 80000 + 3 * 70000 + (numCita - 8) * 50000;
    }

    // Mostramos el costo de la cita y el costo total del tratamiento en la consola
    alert("Costo de la cita #" + numCita + ": $" + costoCita);
    alert("Costo total del tratamiento: $" + costoTratamiento);


})