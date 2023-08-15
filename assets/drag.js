document.addEventListener("DOMContentLoaded", function () {

    const secciones = document.querySelectorAll(".contenido");
    let isDragging = false;
    let startY = 0;
    let endY = 0;
    const indicadores = document.querySelectorAll(".indicador");

    function mostrarSeccion(seccionIndex) {
        secciones.forEach((seccion, index) => {
            seccion.classList.remove("mostrar");
            if (index === seccionIndex) {
                seccion.classList.add("mostrar");
            }
        });

        indicadores.forEach((indicador, index) => {
            if (index === seccionIndex) {
                indicador.classList.add("activo");
            } else {
                indicador.classList.remove("activo");
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

    window.addEventListener("mousedown", function (event) {
        isDragging = true;
        startY = event.clientY;
    });

    window.addEventListener("mousemove", function (event) {
        if (isDragging) {
            endY = event.clientY;
            const deltaY = startY - endY;

            if (deltaY > 50) {
                currentSection++;
                startY = endY;
            } else if (deltaY < -50) {
                currentSection--;
                startY = endY;
            }

            if (currentSection < 0) {
                currentSection = 0;
            }

            if (currentSection >= secciones.length) {
                currentSection = secciones.length - 1;
            }

            mostrarSeccion(currentSection);
        }
    });

    window.addEventListener("mouseup", function () {
        isDragging = false;
    });

    window.addEventListener("mouseleave", function () {
        isDragging = false;
    });

});