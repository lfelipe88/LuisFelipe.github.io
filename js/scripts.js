// Aquí puedes agregar interactividad si es necesario
document.addEventListener('DOMContentLoaded', function() {
    // Ejemplo de animación simple
    const header = document.querySelector('header');
    header.style.opacity = 0;
    setTimeout(() => {
        header.style.transition = 'opacity 1s';
        header.style.opacity = 1;
    }, 100);
});