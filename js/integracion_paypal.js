// Archivo: js/integracion_paypal.js

function realizarCompra(producto) {
    // Llama a la función de PayPal desde integracion_paypal.js
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `/realizar-compra?producto=${encodeURIComponent(producto)}`, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('Compra realizada con éxito');
            // Puedes agregar lógica adicional aquí, como redireccionar al usuario a una página de confirmación
        }
    };
    xhr.send();
}
