const Once = document.getElementById('once');

Once.addEventListener('click', (e) => {
    e.preventDefault(); 

    let numero1 = prompt("Ingrese el primer número:");
    let numero2 = prompt("Ingrese el segundo número:");
    
    if (numero1 > 0) {
      alert("El primer número es positivo: " + numero1);
    }
    
    if (numero2 > 0) {
      alert("El segundo número es positivo: " + numero2);
    }
    


})