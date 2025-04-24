

// Cargar header y footer dinámicamente
document.addEventListener("DOMContentLoaded", () => {
    fetch("includes/header.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("header").innerHTML = data;
      });
  });

  document.addEventListener("DOMContentLoaded", () => {
    fetch("includes/footer.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("footer").innerHTML = data;
      });
  });

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

