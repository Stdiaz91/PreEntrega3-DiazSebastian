// Esta función evita que un usuario ya logeado QUE NO SEA EL ADMIN ingrese a la página administradora ADMIN
const ArrayValidacionSeguridad = JSON.parse(localStorage.getItem("user-login")) || false;
    function Validation() {
        if (ArrayValidacionSeguridad) {
            if (ArrayValidacionSeguridad.email === "admin@psico.com") {
            }else{
                window.location.href = "./solicitar-turno.html";
            }
        };
    };
    Validation(); //---> Función invocada

//-------------------->

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

//-------------------------------------------------------------

// Evento click redirección al Home
const IrAlHome = document.querySelector("#inicio__");
IrAlHome.addEventListener("click", ()=>{
    if (IrAlHome) {
        window.location.href = "../index.html";
    };
});

//-------------------------------------->

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
ChangeTxt(); //-- Función invocada

// ------------------------->

//---> Se trae el array de usuarios ya registrados con sus respectivos turnos para ser imprimidos en una tabla
let contenido = document.querySelector("#contenido");
let BotonEliminar = document.querySelector(".btn-delete");
const usuariosLSTabla = JSON.parse(localStorage.getItem("users-final"));
console.log(usuariosLSTabla);

function MostrarTabla() {

    function llenarTabla(usuariosLSTabla) {
        contenido.innerHTML = "";
        usuariosLSTabla.forEach(usuarioLSTabla =>{
            console.log(usuarioLSTabla);
            contenido.innerHTML += `
            <tr>
                <td>${usuarioLSTabla.nombre} ${usuarioLSTabla.apellido}</td>
                <td>${usuarioLSTabla.servicio}</td>
                <td>${MostrarFecha(usuarioLSTabla.dia)}</td>
                <td>${usuarioLSTabla.hora}</td>
            </tr>`
        });
    };
    llenarTabla(usuariosLSTabla); //--- Función invocada
};

//--------------------->
// Función para mostrar la fecha de manera convencional a la región
function MostrarFecha(fecha) {
    return `${fecha.slice(8,11)}/${fecha.slice(5,7)}/${fecha.slice(0,4)}`;
};
//---------------------------->

//--> Se agrega un loader para simular la espera de los datos buscados en el backend
const loader = document.querySelector("#loader");
const tabla = document.querySelector("#table__");
let TiempoDeEspera;
function Loading() {
    TiempoDeEspera = setTimeout(OcultarLoader, 3500);
};
function OcultarLoader() {
    MostrarTabla(); //-- Función invocada
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
    tabla.style.opacity = "1";
    tabla.style.visibility = "visible";
};
Loading(); //-- Función invocada
AnimationLoading(); //-- Función invocada

//--------------------->

//--> Función para animar el texto del loader
function AnimationLoading() {
    const textoLoading = "Cargando datos...";

    let index = 0;
    let texto = "";
    let vel = 70; //---> milisegundos

    function escribirLoading() {
        if (index < textoLoading.length) {
            texto += textoLoading.charAt(index);
            document.querySelector("#txt-loader").innerHTML = texto;
            index++;
            setTimeout(escribirLoading, vel);
        }else{
            setTimeout(borrarLoading, 10);
        };
    };
    function borrarLoading() {
        if (index >= 0) {
            texto = textoLoading.substring(0, index);
            document.querySelector("#txt-loader").innerHTML = texto;
            index--;
            setTimeout(borrar, velocidad);
        }else{
            index = 0
            setTimeout(escribir, 10);
        };
    };
    escribirLoading(); //---> Función invocada
};