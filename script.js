const proyectos = document.querySelectorAll('.gamesec');

let currentX = 0;
let currentY = 0;
let followSpeed = 0.1;

function updateCirclePosition(targetX, targetY) {
    gsap.to(circle, {
      duration: 0.25, // Adjust this duration for the follow speed
      x: targetX - 15,
      y: targetY - 15,
      ease: 'power3.out' // Adjust the easing for desired effect
    });
  }

document.addEventListener('mousemove', (e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    const x = e.clientX;
    const y = e.clientY;
  
    updateCirclePosition(x + 3, y + 3);
    circle2.style.transform = `translate(${x}px, ${y}px)`;
    circle.style.display = 'block';

    const deltaX = (x - centerX) * 0.01; // Ajusta el factor para controlar la intensidad del efecto
    const deltaY = (y - centerY) * 0.01;

    proyectos.forEach((proyecto) => {
        const parallaxX = deltaX * -1;
        const parallaxY = deltaY * -1;

        proyecto.style.transform = `translate(${parallaxX}px, ${parallaxY}px)`;
    });
});



window.addEventListener('scroll', () => {
    document.getElementById("movtxt").setAttribute('scroll', window.scrollY / (document.body.offsetHeight - window.innerHeight));
    console.log(window.scrollY / (document.body.offsetHeight - window.innerHeight))
}, false);

document.addEventListener("DOMContentLoaded", function () {
    
    const btns = document.querySelectorAll(".owl-dot");
    btns.forEach((btn) => {
        btn.setAttribute('aria-label','Carousel button');
    });

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
