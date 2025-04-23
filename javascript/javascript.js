// Slider automático del banner
let currentSlide = 0;
const slides = document.querySelectorAll('.banner-slide');

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}
setInterval(nextSlide, 10000);

// Validación de fechas para citas
const fechaInput = document.getElementById('fechaCita');

if (fechaInput) {
    fechaInput.addEventListener('input', function(e) {
        const selectedDate = new Date(e.target.value);
        const day = selectedDate.getDay();
        const hours = selectedDate.getHours();

        if (day === 0 || day === 6) {
            alert('Solo se agenda de lunes a viernes');
            e.target.value = '';
        }

        if (hours < 9 || hours >= 17) {
            alert('Horario no disponible. Solo entre 09:00 y 17:00');
            e.target.value = '';
        }
    });
}

// Menú responsivo con efecto de scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255,255,255,0.98)';
    } else {
        navbar.style.background = 'rgba(255,255,255,0.95)';
    }
});