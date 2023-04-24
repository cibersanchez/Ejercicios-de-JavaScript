const ITFIP = document.getElementById('notas');

ITFIP.addEventListener('click', (e) => {
    e.preventDefault(); 

    let numEstudiantes = prompt("Ingrese el número de estudiantes:");
    let numNotas = prompt("Ingrese el número de notas por estudiante:");

    // Declarar variables para almacenar información de los estudiantes
    let mejoresEstudiantes = [];
    let estudianteRegular = null;
    let estudianteMalo = null;
    let totalNotas = 0;

    for (let i = 0; i < numEstudiantes; i++) {
        let codigo = prompt(`Ingrese el código del estudiante ${i+1}:`);
        let nombre = prompt(`Ingrese el nombre del estudiante ${i+1}:`);
        let apellido = prompt(`Ingrese el apellido del estudiante ${i+1}:`);

        let sumNotas = 0;
        let notas = [];
    for (let j = 0; j < numNotas; j++) {
        let nota = parseFloat(prompt(`Ingrese la nota ${j+1} del estudiante ${i+1}:`));
        sumNotas += nota;
        notas.push(nota);
    }

    let promedio = sumNotas / numNotas;
    totalNotas += sumNotas;

    if (promedio >= 4.1) {
        mejoresEstudiantes.push({
        codigo,
        nombre,
        apellido,
        promedio
        });
    } else if (promedio >= 3 && promedio < 4.1) {
        estudianteRegular = {
        codigo,
        nombre,
        apellido,
        promedio
        };
    } else if (promedio < 3) {
        estudianteMalo = {
        codigo,
        nombre,
        apellido,
        promedio
        };
    }
    }

    // Imprimir los resultados
    alert("Mejores estudiantes:");
    mejoresEstudiantes.forEach(estudiante => {
    alert(`Código: ${estudiante.codigo} - Nombre: ${estudiante.nombre} ${estudiante.apellido} - Promedio: ${estudiante.promedio}`);
    });

    alert("Estudiante regular:");
    if (estudianteRegular) {
   alert(`Código: ${estudianteRegular.codigo} - Nombre: ${estudianteRegular.nombre} ${estudianteRegular.apellido} - Promedio: ${estudianteRegular.promedio}`);
    } else {
   alert("No hay estudiantes regulares");
    }

    alert("Estudiante malo:");
    if (estudianteMalo) {
    alert(`Código: ${estudianteMalo.codigo} - Nombre: ${estudianteMalo.nombre} ${estudianteMalo.apellido} - Promedio: ${estudianteMalo.promedio}`);
    } else {
    alert("No hay estudiantes malos");
    }

    alert(`Total de notas acumuladas: ${totalNotas}`);

    
})