function mostrarInfo(id) {
    // Oculta todas las secciones de información antes de mostrar la nueva
    document.querySelectorAll('.info-seccion').forEach(section => {
        section.style.display = 'none';
    });

    // Muestra la sección correspondiente
    document.getElementById(id).style.display = 'block';
}

function cerrarInfo(id) {
    document.getElementById(id).style.display = 'none';
}