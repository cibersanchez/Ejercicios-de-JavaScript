const datos = document.getElementById('date');

datos.addEventListener('click', (e) => {
    e.preventDefault();

    
        let nombre = prompt('escribe tu nombre')
        let edad = parseFloat(prompt('escribe tu edad'))
        while (nombre ==='' || edad ===''){
            `campo vacio`
        nombre = prompt('escribe tu nombre')
        edad = parseFloat(prompt('escribe tu edad'))

        if (edad >= 18){
            alert(`su nombre es ${nombre} y su edad es ${edad}`)
        }
        }
        

    alert(`gracias por utilizar este programa`)
    
})