function mostrarMensaje(event) {
    event.preventDefault(); // Evita el envío real del formulario

    // Selecciona el div con el mensaje de confirmación
    const mensajeDiv = document.getElementById('mensaje-enviado');
    mensajeDiv.style.display = 'block'; // Muestra el mensaje de "Consulta enviada"

    // Limpiar el formulario después de enviarlo
    document.getElementById('consulta-form').reset();

    // Ocultar el mensaje después de 3 segundos
    setTimeout(function() {
        mensajeDiv.style.display = 'none'; // Oculta el mensaje después de 3 segundos
    }, 3000);
}
