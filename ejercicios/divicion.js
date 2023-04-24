const divicion = document.getElementById('divi');


divicion.addEventListener('click', (e) => {
    e.preventDefault();

    let n1 = parseFloat(prompt('ingrese el primer numero'))
    let n2 = parseFloat(prompt('ingrese el segundo numero'))

    // function valores(n1,n2) {
    //     let proceso = n1/n2
    //     return proceso
    // }
    // let resultado = valores(n1,n2);
    
    // alert(`la suma de ${n1} y ${n2} son ${resultado}`);
    // alert(`gracias por su repuestas`);

    let r = n1 / n2;

    alert(`La Divicion de ${n1} en ${n2} son ${r}`)
    
})
