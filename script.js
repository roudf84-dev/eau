document.addEventListener("DOMContentLoaded", function () {

    const selector = document.querySelector(".lang-selector");
    const button = document.querySelector(".langBtn");

    if (!selector || !button) {
        console.log("No se encontró el selector o el botón");
        return;
    }

    // abrir / cerrar menú
    button.addEventListener("click", function (e) {
        e.stopPropagation();
        selector.classList.toggle("active");
    });

    // cerrar al hacer click fuera
    document.addEventListener("click", function () {
        selector.classList.remove("active");
    });

});
//carrusel
let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");

let index = 0;

function showSlide(i) {
    if (i >= slides.length) index = 0;
    if (i < 0) index = slides.length - 1;

    // limpiar estados
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    // activar actual
    slides[index].classList.add("active");
    dots[index].classList.add("active");
}

// botones
document.querySelector(".next").addEventListener("click", () => {
    index++;
    showSlide(index);
});

document.querySelector(".prev").addEventListener("click", () => {
    index--;
    showSlide(index);
});

// dots
dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        index = i;
        showSlide(index);
    });
});

// automático
setInterval(() => {
    index++;
    showSlide(index);
}, 4000);


// EXAMENES ADMISION
    const slider1 = document.querySelector(".examenes-pasados");

    const izquierda2 = document.querySelector(".izquierda2");

    const derecha2 = document.querySelector(".derecha2");

    derecha2.addEventListener("click", function(){

        slider1.scrollBy({
            left: 700,
            behavior: "smooth"
        });

    });

    izquierda2.addEventListener("click", function(){

        slider1.scrollBy({
            left: -700,
            behavior: "smooth"
        });

    });



    // JUEGOS
    const slider2 = document.querySelector(".contenedor-juegos");

    const izquierda1 = document.querySelector(".izquierda1");

    const derecha1 = document.querySelector(".derecha1");

    derecha1.addEventListener("click", function(){

        slider2.scrollBy({
            left: 700,
            behavior: "smooth"
        });

    });

    izquierda1.addEventListener("click", function(){

        slider2.scrollBy({
            left: -700,
            behavior: "smooth"
        });

    });
     // EDUCATIVO
 
    const slider3 = document.querySelector(".contenedor-educativo");

    const izquierda3 = document.querySelector(".izquierda3");

    const derecha3 = document.querySelector(".derecha3");

    derecha3.addEventListener("click", function(){

        slider3.scrollBy({
            left: 700,
            behavior: "smooth"
        });

    });

    izquierda3.addEventListener("click", function(){

        slider3.scrollBy({
            left: -700,
            behavior: "smooth"
        });

    });
     // EXAMENES1
 
    const slider4 = document.querySelector(".examenes-pasados1");

    const izquierda4 = document.querySelector(".izquierda4");

    const derecha4 = document.querySelector(".derecha4");

    derecha4.addEventListener("click", function(){

        slider4.scrollBy({
            left: 700,
            behavior: "smooth"
        });

    });

    izquierda4.addEventListener("click", function(){

        slider4.scrollBy({
            left: -700,
            behavior: "smooth"
        });

    });
// BIBLIOTECA
 
    const slider5 = document.querySelector(".viblioteca");

    const izquierda5 = document.querySelector(".izquierda5");

    const derecha5 = document.querySelector(".derecha5");

    derecha5.addEventListener("click", function(){

        slider5.scrollBy({
            left: 700,
            behavior: "smooth"
        });

    });

    izquierda5.addEventListener("click", function(){

        slider5.scrollBy({
            left: -700,
            behavior: "smooth"
        });

    });
// BIBLIOTECA
 
    const slider6 = document.querySelector(".cursosgg");

    const izquierda6 = document.querySelector(".izquierda6");

    const derecha6 = document.querySelector(".derecha6");

    derecha6.addEventListener("click", function(){

        slider6.scrollBy({
            left: 700,
            behavior: "smooth"
        });

    });

    izquierda6.addEventListener("click", function(){

        slider6.scrollBy({
            left: -700,
            behavior: "smooth"
        });

    });
    // NOVEDADES
 
    const slider7 = document.querySelector(".novedadesps");

    const izquierda7 = document.querySelector(".izquierda7");

    const derecha7 = document.querySelector(".derecha7");

    derecha7.addEventListener("click", function(){

        slider7.scrollBy({
            left: 700,
            behavior: "smooth"
        });

    });

    izquierda7.addEventListener("click", function(){

        slider7.scrollBy({
            left: -700,
            behavior: "smooth"
        });

    });
    // SECCION BECAS
    