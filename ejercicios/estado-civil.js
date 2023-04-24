const EstadoCivil = document.getElementById('estado');

EstadoCivil.addEventListener('click', (e) => {
    // Pedimos al usuario que ingrese los datos
const nombre = prompt('Ingresa tu nombre:');
const edad = parseInt(prompt('Ingresa tu edad:'));
const sexo = parseInt(prompt('Ingresa tu sexo (1 = Hombre, 2 = Mujer):'));
const estadoCivil = parseInt(prompt('Ingresa tu estado civil (1 = Soltero, 2 = Casado y, 3 = Otro):'));

// Verificamos si la persona es un hombre soltero mayor de edad
if (sexo === 1 && estadoCivil === 1 && edad >= 18) {
  // Imprimimos el nombre de la persona
  alert(`La persona ${nombre} cumple con los requisitos.`);
} else {
    alert(`La persona ${nombre} no cumple con los requisitos.`);
}

    
})

