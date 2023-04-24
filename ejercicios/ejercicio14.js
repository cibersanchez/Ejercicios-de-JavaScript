const Parrillada= document.getElementById('restaurante');

Parrillada.addEventListener('click', (e) => {
    e.preventDefault(); 
    // Pedimos al usuario que ingrese el número de personas que asistirán al banquete
    let numPersonas = parseInt(prompt("Ingrese el número de personas para el banquete:"));

    // Definimos el costo por plato en función del número de personas
    let costoPorPlato = 10000;

    if (numPersonas > 90 && numPersonas <= 150) {
        costoPorPlato = 8500;
    } else if (numPersonas > 150) {
        costoPorPlato = 7500;
    }

    // Calculamos el presupuesto total
    let presupuestoTotal = costoPorPlato * numPersonas;

    // Mostramos el presupuesto total en la consola
    alert("Presupuesto para " + numPersonas + " personas es: $" + presupuestoTotal);


})