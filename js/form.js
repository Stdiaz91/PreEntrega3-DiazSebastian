
// Validación de seguridad (No dejará ingresar a la página de turnos si el usuario no está logeado)
const ArrayValidacionSeguridad = JSON.parse(localStorage.getItem("user-login")) || false;
    if (!ArrayValidacionSeguridad) {
        window.location.href = "./login.html";
    }

// ----------------------------------------------------------------

// Función saludoUser: Utilizada para dar la bienvenida al usuario mediante modificación del DOM
function saludoUser(){
    const ArrayUsuarioLS = JSON.parse(localStorage.getItem("user-login"));
    let nombre = ArrayUsuarioLS.nombre;
        console.log(nombre);
    const saludar = document.querySelector("#saludar");
    const h2 = document.createElement("h2");
    h2.textContent = `¡Bienvenid@ ${nombre}!`;
    saludar.appendChild(h2);
}

saludoUser(); // Función invocada

// ----------------------------------------------------------------
//---> Si la key "users-final" está nula porque aún los usuarios no registraron ningún turno desde el sitio, se cargarán los users del JSON
// En caso de que ya se haya registrado un turno desde el sitio, el flujo seguirá por el else.

const ArrayUsersLS = JSON.parse(localStorage.getItem("users-final"));
console.log(ArrayUsersLS);
function UsuarioAnulado() {
    if (ArrayUsersLS === null) {
        const JsonLS = JSON.parse(localStorage.getItem("json"));
        console.log(JsonLS);
        localStorage.setItem("users-final", JSON.stringify(JsonLS));
    } else{
    };
};
UsuarioAnulado(); // Función invocada

//-----------------------------------------------
//Función Date para obtener el día actual y para evitar registrar turnos días anteriores al actual
window.onload = function(){
    var fecha = new Date();
    var month = fecha.getMonth()+1;
    var dates = fecha.getDate();
    var year = fecha.getFullYear();
    if(dates<10)
        dates='0'+dates;
    if(month<10)
        month='0'+ month;
    document.getElementById('date_').value=year+"-"+month+"-"+dates;
    document.getElementById('date_').min=year+"-"+month+"-"+dates;
}

//----------------------------------------------

// SOLICITUD DE TURNOS

// Creación de Clase - Función constructora
class UsuarioTurno{
    constructor(servicio, dia, hora, comentarios){
        this.servicio = servicio;
        this.dia = dia;
        this.hora = hora;
        this.comentarios = comentarios
    };
};

// Evento submit para la solicitud de turno
const formulario = document.querySelector("#form_js");
formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    const UsuarioConTurno = new UsuarioTurno(); // Objeto creado

    const servicio = document.querySelector("#services").value;
    const dia = document.querySelector("#date_").value;
    const hora = document.querySelector("#hours").value;
    const comentarios = document.querySelector("#coments").value;

    UsuarioConTurno.servicio = servicio;
    UsuarioConTurno.dia = dia;
    UsuarioConTurno.hora = hora;
    UsuarioConTurno.comentarios = comentarios;

//------- 
    //Esta sección realiza una codición if para evitar que los turnos se superpongan durante el día
    const ArrayUsuarioFinalLocalStorage = JSON.parse(localStorage.getItem("users-final")) || [];
    const UsuarFinalCreado = ArrayUsuarioFinalLocalStorage.find(user => user.hora === hora && user.dia === dia);
    if (UsuarFinalCreado) {
        return Swal.fire({
            icon: 'error',
            title: 'Lo sentimos. Este turno está dado',
            color: '#fff',
            confirmButtonColor: '#3085d6',
            background: '#976ca1'
        });
    };
//------- 
    // Se desconstruye el Array del user logeado, guardado en el LS para formar el usuario final con todos los datos cargados 
    const ArrayUserLoginLocalStorage = JSON.parse(localStorage.getItem("user-login"));
    let name = ArrayUserLoginLocalStorage.nombre;
    let surname = ArrayUserLoginLocalStorage.apellido;
    let mail = ArrayUserLoginLocalStorage.email;
    let pass = ArrayUserLoginLocalStorage.password;
    
    const UsuarioFinal = {
        nombre: name,
        apellido: surname,
        email: mail,
        password: pass,
        ...UsuarioConTurno
    };
    console.log(UsuarioFinal);

    //----> Esta sección evita que un usuario solicite mas de un turno a la vez sin el aval del psicólogo
    const ArrayTotal = ArrayUsuarioFinalLocalStorage.concat(ArrayUserLoginLocalStorage);
    const busqueda = ArrayTotal.reduce((acc, user) => {
        acc[user.email] = ++acc[user.email] || 0;
        return acc;
    }, {});

    const duplicados = ArrayTotal.filter( (user) => {
        return busqueda[user.email];
    });
    
    console.log(duplicados);
    
    if (duplicados) {
        if (duplicados.length > 0) {
            return Swal.fire({
                icon: 'error',
                title: 'Lo sentimos. Usted ya ha solicitado un turno',
                color: '#fff',
                confirmButtonColor: '#3085d6',
                background: '#976ca1'
            });
        } else {
        };
    };

    //----------------------

    ArrayUsuarioFinalLocalStorage.push(UsuarioFinal);
    localStorage.setItem("users-final", JSON.stringify(ArrayUsuarioFinalLocalStorage));
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: `¡Turno solicitado exitosamente`,
        showConfirmButton: false,
        timer: 1500,
        background: '#976ca1',
        color: '#fff'
    });
//---------> Código para ventana modal (aparecerá con el evento submit con los datos relevantes del turno)
    let modal = document.querySelector(".m-o");
    let modalC = document.querySelector(".modal__section");
    let identificadorTiempoDeEsperaModal;
    function temporizadorDeRetraso(){
        identificadorTiempoDeEsperaModal = setTimeout(funcionConRetraso, 1600);
    };
    //-----> Función con retraso
    function funcionConRetraso(){
        modalC.style.opacity = "1";
        modalC.style.visibility = "visible";
        modal.classList.toggle("m-o-c");

        const ArrayUsuarioLSa = JSON.parse(localStorage.getItem("users-final"));
            console.log(ArrayUsuarioLSa);
        const ArrayUsuarioTurno = ArrayUsuarioLSa[ArrayUsuarioLSa.length - 1];
        const nombre = ArrayUsuarioTurno.nombre;
            console.log(nombre);
        const apellido = ArrayUsuarioTurno.apellido;
            console.log(apellido);
        const servicio = ArrayUsuarioTurno.servicio;
            console.log(servicio);
        const dia = ArrayUsuarioTurno.dia;
            console.log(dia);
        const horario = ArrayUsuarioTurno.hora;
            console.log(horario);
        //-----
        const MostrarNyA = document.querySelector("#colocar_textNyA");
        const h3NyA = document.createElement("h3");
        h3NyA.textContent = `Nombre y Apellido: ${nombre} ${apellido}`;
        MostrarNyA.appendChild(h3NyA);
        //-----
        const MostrarS = document.querySelector("#colocar_textS");
        const h3S = document.createElement("h3");
        h3S.textContent = `Servicio: ${servicio}`;
        MostrarS.appendChild(h3S);
        //-----
        const MostrarD = document.querySelector("#colocar_textD");
        const h3D = document.createElement("h3");
        h3D.textContent = `La sesión será el día: ${MostrarFecha(dia)} a las ${horario}`;
        MostrarD.appendChild(h3D);
    };
    temporizadorDeRetraso(); //Función invocada
});

//--------------------->
// Función para mostrar la fecha de manera convencional a la región
function MostrarFecha(fecha) {
    return `${fecha.slice(8,11)}/${fecha.slice(5,7)}/${fecha.slice(0,4)}`;
};
//---------------------
//------------------> EVENTO
//Evento click para cerrar ventana modal
const cerrar = document.querySelector("#close");
cerrar.addEventListener("click", ()=>{
    let modal = document.querySelector(".m-o");
    modal.classList.toggle("m-o-c");
    let modalC = document.querySelector(".modal__section");
    setTimeout(function(){
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";    
    },850);
    window.location.href = "../index.html";
});

//------------------------------------------------------->

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

//---------------------------------------->

// Evento click redirección al Home
const IrAlHome = document.querySelector("#inicio__");
IrAlHome.addEventListener("click", ()=>{
    if (IrAlHome) {
        window.location.href = "../index.html";
    };
});

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





