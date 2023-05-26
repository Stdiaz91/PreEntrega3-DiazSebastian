
// Se trae el objeto guardado en el Local Storage
const ArrayUsuarioDeslog = JSON.parse(localStorage.getItem("user-login"));

// ------------------------------------------------------------------------------------

//-----> Función temporizadora
let identificadorTiempoDeEsperaLogout;
function temporizadorDeRetraso(){
    identificadorTiempoDeEsperaLogout = setTimeout(funcionConRetraso, 1500);
};
//-----> Función con retraso
function funcionConRetraso(){
    localStorage.removeItem("user-login");
    window.location.href = "index.html";
};
//-----------------------------------------------------
// EVENTOS --->
// Evento click para boton Logout
const logout = document.querySelector("#logout");
logout.addEventListener("click", ()=>{
    if (ArrayUsuarioDeslog) {
        Swal.fire({
            title: '¿Estás seguro que deseas cerrar sesión?',
            color: '#fff',
            icon: 'warning',
            iconColor: '#fff',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar',
            background: '#976ca1',
            }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                icon: 'success',
                title: `Hasta pronto ${ArrayUsuarioDeslog.nombre}`,
                color: '#fff',
                showConfirmButton: false,
                background: '#976ca1'
            });
            temporizadorDeRetraso();    // Función invocada
            };
        });
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Usted no ha iniciado sesión',
            color: '#fff',
            confirmButtonColor: '#3085d6',
            background: '#976ca1',
            footer: '<a href="./pages/login.html">¡Inicia sesión ahora!</a>'
        });
    };
});

//-------------------------------------------

// Evento click para redirigir ingreso a página "login" o "solicitar-turno" 
const ArrayUsuarioLoger = JSON.parse(localStorage.getItem("user-login"));
// EVENTO ---->
// Evento click para redirigir ingreso a página "login" o "solicitar-turno" o "Admin"
const LoginORegistroLoger = document.querySelector("#boton-login-turno");
LoginORegistroLoger.addEventListener("click", ()=>{
    if (ArrayUsuarioLoger) {
        if (ArrayUsuarioLoger.email === "admin@psico.com") {
            window.location.href = "./pages/administrador.html";
        } else {
            window.location.href = "./pages/solicitar-turno.html";
        }
    } else {
        window.location.href = "./pages/login.html";
    }
});

//-------------------------->

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
        window.location.href = "./index.html";
    };
});

//------------->

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

//-------- JSON y Fetch
const UsersJSON = JSON.parse(localStorage.getItem("json"));

fetch("pacientes.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (UsersJSON === null) {
            localStorage.setItem("json", JSON.stringify(data));
        } else {
            
        };
        // localStorage.setItem("json", JSON.stringify(data));
        
    });

