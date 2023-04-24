const detos = document.getElementById('datosPersonales');
    detos.addEventListener('click', (e) => {
        e.preventDefault();

        let nombre = prompt('escribe tu nombre')
        let edad = parseFloat(prompt('escribe tu edad'))
        if (edad >= 18) {
        alert(`su nombre es ${nombre} y su edas es ${edad}`)
    }else{
        alert('aun no es mayor de edad')
    }

    alert(`gracias por utilizar este programa`)
})