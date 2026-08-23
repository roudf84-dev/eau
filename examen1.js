const preguntas = document.querySelectorAll(".pregunta");

preguntas.forEach((pregunta)=>{

    const btnPista =
    pregunta.querySelector(".btn-pista");

    const btnFormula =
    pregunta.querySelector(".btn-formula");

    const popupPista =
    pregunta.querySelector(".pista-popup");

    const popupFormula =
    pregunta.querySelector(".formula-popup");

    /* PISTA */

    btnPista.addEventListener("click",()=>{

        popupPista.classList.toggle("activo");

        popupFormula.classList.remove("activo");

    });

    /* FORMULA */

    btnFormula.addEventListener("click",()=>{

        popupFormula.classList.toggle("activo");

        popupPista.classList.remove("activo");

    });

});

/* RESPUESTAS */

const respuestasCorrectas = {

    p1:"a",
    p2:"c",
    p3:"b",
    p4:"d",
    p5:"a"

};

/* BOTON */

const botonNota =
document.getElementById("calcular");

const resultado =
document.getElementById("resultado");

/* EVENTO */

botonNota.addEventListener("click",()=>{

    let correctas = 0;

    let total = Object.keys(respuestasCorrectas).length;

    /* RECORRER RESPUESTAS */

    for(let pregunta in respuestasCorrectas){

        const seleccionada =
        document.querySelector(
            `input[name="${pregunta}"]:checked`
        );

        /* SI RESPONDIO */

        if(seleccionada){

            /* SI ES CORRECTA */

            if(
                seleccionada.value ===
                respuestasCorrectas[pregunta]
            ){

                correctas++;

            }

        }

    }

    /* CALCULAR NOTA */

   

});
/* prueba */

  function calificar(){

    let puntaje = 0;

    //Obtiene todos los nombres de grupos (p1,p2,p3...)
    const nombres = [...new Set(
        [...document.querySelectorAll('input[type="radio"]')]
        .map(r=>r.name)
    )];

    nombres.forEach(nombre=>{

        const seleccion = document.querySelector(
            `input[name="${nombre}"]:checked`
        );

        if(seleccion?.dataset.correct==="true"){
            puntaje++;
        }

    });

    document.getElementById("resultado").textContent = puntaje;

}