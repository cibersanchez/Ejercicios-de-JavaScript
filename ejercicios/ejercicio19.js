const Matrices = document.getElementById('matrix');

Matrices.addEventListener('click', (e) => {
    e.preventDefault(); 

    let filas = parseInt(prompt("Ingrese el número de filas de la matriz:"));
    let columnas = parseInt(prompt("Ingrese el número de columnas de la matriz:"));

    let matriz = [];
    for (let i = 0; i < filas; i++) {
    matriz.push([]);
    for (let j = 0; j < columnas; j++) {
        let numero = parseInt(prompt(`Ingrese el número para la posición (${i + 1},${j + 1}):`));
        matriz[i].push(numero);
    }
    }

    if (filas === columnas) {
    let suma = 0;
    let producto = 1;
    let diagonal = [];
    let pares = [];
    let impares = [];

    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
        if (i === j) diagonal.push(matriz[i][j]);
        if (matriz[i][j] % 2 === 0) pares.push(matriz[i][j]);
        else impares.push(matriz[i][j]);
        }
    }

    diagonal = diagonal.join(", ");
    pares = pares.join(", ");
    impares = impares.join(", ");

    matriz.forEach(function(fila) {
        fila.forEach(function(numero) {
        suma += numero;
        producto *= numero;
        });
    });

    let inversa = JSON.stringify(matriz[0].map((col, i) => matriz.map(row => row[i])));

    alert(`La suma de la matriz es: ${suma}`);
    alert(`El producto de la matriz es: ${producto}`);
    alert(`La diagonal principal de la matriz es: ${diagonal}`);
    alert(`Los números pares de la matriz son: ${pares}`);
    alert(`Los números impares de la matriz son: ${impares}`);
    alert(`La matriz inversa es: ${inversa}`);
    } else {
    alert("Las dimensiones de la matriz no son iguales.");
    }

})