const FranjasTV = document.getElementById('Franjas');

FranjasTV.addEventListener('click', (e) => {
    e.preventDefault(); 


    let estadisticas = {
    infantil: {masculino: 0, femenino: 0, total: 0},
    juvenil: {masculino: 0, femenino: 0, total: 0},
    adulta: {masculino: 0, femenino: 0, total: 0},
    terceraEdad: {masculino: 0, femenino: 0, total: 0}
    };

    while (true) {
    let nombre = prompt("Ingrese su nombre:");
    if (!nombre) break;
    let edad = parseInt(prompt("Ingrese su edad:"));
    let genero = parseInt(prompt("Ingrese su género (1 para masculino, 2 para femenino):"));

    let franja;
    if (edad >= 0 && edad <= 12) {
        franja = "infantil";
    } else if (edad >= 13 && edad <= 20) {
        franja = "juvenil";
    } else if (edad >= 21 && edad <= 59) {
        franja = "adulta";
    } else {
        franja = "terceraEdad";
    }

    if (genero === 1) {
        estadisticas[franja].masculino++;
    } else {
        estadisticas[franja].femenino++;
    }
    estadisticas[franja].total++;
    }

    for (let franja in estadisticas) {
    let total = estadisticas[franja].total;
    let masculino = estadisticas[franja].masculino;
    let femenino = estadisticas[franja].femenino;
    let promedio = total > 0 ? Math.round(total / estadisticas[franja].total) : 0;
    alert(`Franja ${franja}:`);
    alert(`- Masculino: ${masculino}`);
    alert(`- Femenino: ${femenino}`);
    alert(`- Total: ${total}`);
    alert(`- Edad promedio: ${promedio}`);
    }

    
})