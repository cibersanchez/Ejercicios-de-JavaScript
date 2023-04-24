const dies = document.getElementById('Dies');

dies.addEventListener('click', (e) =>{
    e.preventDefault();

    // Pedimos al usuario que ingrese un número
const numero = parseFloat(prompt('Ingresa un número:'));

// Calculamos el valor absoluto del número
const valorAbsoluto = Math.abs(numero);

// Imprimimos el número y su valor absoluto
alert(`El número ingresado es: ${numero}`);
alert(`El valor absoluto del número es: ${valorAbsoluto}`);






} )