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

//---------------------------------->

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

//-------------------------->

//Creación de objeto mediante clase - función constructora
class UserContacto{
    constructor(nombre, apellido, email, telefono, mensaje, date){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.telefono = telefono;
        this.mensaje = mensaje;
    };
};
// EVENTOS --->
// Evento submit para creación de usuario
const contacto = document.querySelector("#contact-js");
contacto.addEventListener("submit", (e)=>{
    e.preventDefault();
    const UsuarioContacto = new UserContacto();  //Objeto creado
    
    //-----
    const nombre = document.querySelector("#name__f").value;
    const apellido = document.querySelector("#surname__f").value;
    const email = document.querySelector("#email__f").value;
    const telefono = document.querySelector("#phone__f").value;
    const mensaje = document.querySelector("#comments").value;

    //------
    UsuarioContacto.nombre = nombre;
    UsuarioContacto.apellido = apellido;
    UsuarioContacto.email = email;
    UsuarioContacto.telefono = telefono;
    UsuarioContacto.mensaje = mensaje;

    //----
    const ArrayContacto = [];
    ArrayContacto.push(UsuarioContacto);
    localStorage.setItem("contacto", JSON.stringify(ArrayContacto));
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: '¡Mensaje enviado exitosamente!',
        showConfirmButton: false,
        timer: 2500
    });
});


