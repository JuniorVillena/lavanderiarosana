function mostrarMensaje() {
    // Crea la ventana emergente
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.backgroundColor = '#fff';
    modal.style.padding = '20px';
    modal.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
    modal.style.borderRadius = '10px';
    modal.style.zIndex = '1000';
    modal.style.textAlign = 'center';

    modal.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" width="64px" height="64px" style="margin-bottom: 10px;">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z"/>
        </svg>
        <h3 style="margin: 0 0 10px; color: green;">¡Mensaje enviado!</h3>
        <p style="margin: 0 0 20px;">Tus datos han sido enviados con éxito, nos comunicaremos contigo lo más pronto posible.</p>
        <button style="
            padding: 10px 20px; 
            background-color: #00796B; 
            color: white; 
            border: none; 
            border-radius: 5px; 
            cursor: pointer;
            font-size: 16px;" 
            onclick="cerrarModal()">Cerrar</button>
    `;
    
    // Crea un fondo semitransparente
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.zIndex = '999';
    
    // Agrega el modal y overlay al body
    document.body.appendChild(overlay);
    document.body.appendChild(modal);

    // Función para cerrar el modal
    window.cerrarModal = function() {
        document.body.removeChild(modal);
        document.body.removeChild(overlay);
    }

    return false; // Prevenir el envío del formulario
}
