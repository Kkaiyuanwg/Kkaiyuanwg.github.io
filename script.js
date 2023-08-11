const proyectos = document.querySelectorAll('.proyectos');

document.addEventListener('mousemove', (e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const deltaX = (mouseX - centerX) * 0.01; // Ajusta el factor para controlar la intensidad del efecto
    const deltaY = (mouseY - centerY) * 0.01;

    proyectos.forEach((proyecto) => {
        const parallaxX = deltaX * -1;
        const parallaxY = deltaY * -1;

        proyecto.style.transform = `translate(${parallaxX}px, ${parallaxY}px)`;
    });
});

document.addEventListener("DOMContentLoaded", function () {

    const secciones = document.querySelectorAll(".contenido");

    function mostrarSeccion(seccionIndex) {
        secciones.forEach((seccion, index) => {
            seccion.classList.remove("mostrar");
            if (index === seccionIndex) {
                seccion.classList.add("mostrar");
            }
        });
    }

    let currentSection = 0;
    mostrarSeccion(currentSection);

    window.addEventListener("wheel", function (event) {
        if (event.deltaY > 0) {
            currentSection++;
        } else {
            currentSection--;
        }

        if (currentSection < 0) {
            currentSection = 0;
        }

        if (currentSection >= secciones.length) {
            currentSection = secciones.length - 1;
        }

        mostrarSeccion(currentSection);
    });
});
