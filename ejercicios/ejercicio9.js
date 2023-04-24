const Noveno = document.getElementById('noveno');

Noveno.addEventListener('click', (e) => {
    e.preventDefault(); 

    // Pedimos al usuario que ingrese los datos
const nombre = prompt('Ingresa tu nombre:');
const edad = parseInt(prompt('Ingresa tu edad:'));
const sexo = parseInt(prompt('Ingresa tu sexo (1 = Hombre, 2 = Mujer):'));
const estadoCivil = parseInt(prompt('Ingresa tu estado civil (1 = Soltero, 2 = Casado y, 3 = Otro):'));
    
    
    
  
  // Verificamos si la persona es menor de edad o un hombre casado de cualquier edad
  if ((edad < 18 && sexo === 1) || estadoCivil === 2) {
    alert(`${nombre}, usted aun no es independiente.`);
  } else {
    alert(`${nombre}`);
  }
  


})