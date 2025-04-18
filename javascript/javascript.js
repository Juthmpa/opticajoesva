// === Función para alternar formularios de contacto o agenda ===
function mostrarFormulario(tipo) {
    const formContacto = document.getElementById('form-contacto');
    const formAgenda = document.getElementById('form-agenda');

    if (tipo === 'contacto') {
        formContacto.style.display = 'block';
        formAgenda.style.display = 'none';
    } else if (tipo === 'agenda') {
        formAgenda.style.display = 'block';
        formContacto.style.display = 'none';
    }
}

// === Llenar dinámicamente horarios de cita ===
document.addEventListener('DOMContentLoaded', () => {
    const selectHorarios = document.getElementById('horarios');
    if (selectHorarios) {
        const horariosDisponibles = [
            "09:00 AM", "10:30 AM", "12:00 PM",
            "02:00 PM", "03:30 PM", "05:00 PM"
        ];

        horariosDisponibles.forEach(horario => {
            const option = document.createElement('option');
            option.value = horario;
            option.textContent = horario;
            selectHorarios.appendChild(option);
        });
    }

    // Inicializar carrusel
    iniciarCarrusel();
});

// === Carrusel de imágenes automático ===
function iniciarCarrusel() {
    let index = 0;
    const slides = document.querySelectorAll('.slide');

    function mostrarSiguienteSlide() {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
        index = (index + 1) % slides.length;
    }

    setInterval(mostrarSiguienteSlide, 4000); // Cambiar imagen cada 4 segundos
}
// === Menú hamburguesa: Mostrar/Ocultar navegación ===
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show'); // Alternar clase "show"
    });
});
