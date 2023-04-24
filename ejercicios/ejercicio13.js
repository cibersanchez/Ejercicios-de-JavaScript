const Trece = document.getElementById('trece');

Trece.addEventListener('click', (e) => {
    e.preventDefault(); 

    // Pedimos al usuario que ingrese el precio de la prenda
    let precio = parseFloat(prompt("Ingrese el precio de la prenda:"));

    // Calculamos el descuento y el precio final
    let descuento = 0;
    let precioFinal = 0;

    if (precio > 25000) {
        descuento = precio * 0.17;
        precioFinal = precio - descuento;
    } else {
        descuento = precio * 0.05;
        precioFinal = precio - descuento;
    }

    // Imprimimos los resultados
    alert("Precio de la prenda: " + precio);
    alert("Descuento aplicado: " + descuento);
    alert("Precio final a pagar: " + precioFinal);
})