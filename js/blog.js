// Se trae el objeto guardado en el Local Storage
const ArrayUsuarioLoger = JSON.parse(localStorage.getItem("user-login"));
// EVENTO ---->
// Evento click para redirigir ingreso a página "login" o "solicitar-turno" o "Admin"
const LoginORegistroLoger = document.querySelector("#boton-login-turno");
LoginORegistroLoger.addEventListener("click", ()=>{
    if (ArrayUsuarioLoger) {
        if (ArrayUsuarioLoger.email === "admin@psico.com") {
            window.location.href = "./administrador.html";
        } else {
            window.location.href = "./solicitar-turno.html";
        }
    } else {
        window.location.href = "./login.html";
    }
});

//---------------------------------------------->

//Funciones para aplicar innerHTML
function Change() {
    document.querySelector("#boton-login-turno").innerHTML = "SOLICITAR TURNO";
};
function ChangeAdmin() {
    document.querySelector("#boton-login-turno").innerHTML = "ADMIN";
};
// Al estar un usurio logeado, cambia el nombre del enlace "INICIAR AHORA" por "SOLICITAR TURNO" o por
// ADMIN (en caso que el administrador este logeado) en el encabezado del header
function ChangeTxt() {
    if (ArrayUsuarioLoger) {
        if (ArrayUsuarioLoger.email === "admin@psico.com") {
            ChangeAdmin(); //Función invocada
        }else{
            Change(); //Función invocada
        }
    } else {
    } //----> Queda el texto "INICIAR SESIÓN"
};
ChangeTxt();

//----------------------->

// Evento click redirección al Home
const IrAlHome = document.querySelector("#inicio__");
IrAlHome.addEventListener("click", ()=>{
    if (IrAlHome) {
        window.location.href = "../index.html";
    };
});

//-------------------------->

// Animación título principal
const textoPrincipal = "Psico-Online";

let i = 0;
let txt = "";
let velocidad = 70; //---> milisegundos

function escribir() {
    if (i < textoPrincipal.length) {
        txt += textoPrincipal.charAt(i);
        document.querySelector("#texto-js").innerHTML = txt;
        i++;
        setTimeout(escribir, velocidad);
    }else{
        setTimeout(borrar, 1000);
    };
};
function borrar() {
    if (i >= 0) {
        txt = textoPrincipal.substring(0, i);
        document.querySelector("#texto-js").innerHTML = txt;
        i--;
        setTimeout(borrar, velocidad);
    }else{
        i = 0
        setTimeout(escribir, 1000);
    };
};
escribir(); //---> Función invocada
