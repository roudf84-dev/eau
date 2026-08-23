const form = document.getElementById("becaForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const data = {
        nombre: form.nombre.value,
        celular: form.celular.value,
        carta: form.carta.value
    };

    try{

      await fetch(
    "https://script.google.com/macros/s/AKfycbzoByzxjX4XPhFebaTJN-hw9Z9NENLRL1ywjGJCGQV6zw31IJMR4_pZmVh79fbqdOGwQQ/exec",
    {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(data)
    }
);

        alert("Solicitud enviada correctamente");

        form.reset();

    }catch(error){

        alert("Error al enviar");

    }

});