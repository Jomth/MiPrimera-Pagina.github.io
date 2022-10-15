/**
 * Declaración de variables para el formulario
 */
const formulario = document.getElementById("formulario");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
//Variable para la expresión regular
const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//Validar cosas del Formulario
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
//Validar Nombre
    if (!userName.value.trim() || !regUserName.test(userName.value)) {
        alert("Nombre Invalido");
    }
//Validar Email
    if (!userEmail.value.trim() || !regUserEmail.test(userEmail.value)) {
        alert("Email inválido");
    }
//Validar Mensaje
    if (mensaje.value.length<1) {
        alert("Debes dejar un mensaje");
    }
    console.log("datos enviados");
//Los datos han sido enviados
    alert("Los datos han sido enviados correctamente")
})