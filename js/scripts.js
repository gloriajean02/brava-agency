// Animación del menú al hacer scroll en pantallas grandes

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById('mainNav');

    if (window.innerWidth >= 992) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scroll', 'navbar-light');
                navbar.classList.remove('navbar-dark');
            } else {
                navbar.classList.remove('navbar-scroll', 'navbar-light');
                navbar.classList.add('navbar-dark');
            }
        });
    }
});


// Activa el popover para todos los elementos que lo tengan configurado
document.addEventListener('DOMContentLoaded', function () {
    var popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    var popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
});


// Validación de formulario
document.getElementById('formulario-contacto').addEventListener('submit', function (enviar) {
    enviar.preventDefault();

    // Obtenemos los valores de los campos
    const nombre = document.getElementById('nombre').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;
    const email = document.getElementById('email').value;
    const checkPrivacidad = document.getElementById('checkPrivacidad').checked;

    // Validamos si los campos están vacíos o no se ha aceptado la política
    if (nombre === '' || asunto === '' || mensaje === '' || email === '' || !checkPrivacidad) {
        // Mostramos la alerta de error
        document.getElementById('formAlert').classList.remove('d-none');
        document.getElementById('formSuccess').classList.add('d-none');
    } else {
        // Mostramos la alerta de éxito
        document.getElementById('formAlert').classList.add('d-none');
        document.getElementById('formSuccess').classList.remove('d-none');

        // Limpiamos el formulario después de enviar
        document.getElementById('formulario-contacto').reset();
    }
});