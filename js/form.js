
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
    
    const UsuarioFinal = [{
        nombre: name,
        apellido: surname,
        email: mail,
        password: pass,
        ...UsuarioConTurno
    }];
    console.log(UsuarioFinal);

    localStorage.setItem("users-final", JSON.stringify(UsuarioFinal));
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: `¡Turno solicitado exitosamente`,
        showConfirmButton: false,
        timer: 1500
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
        const nombre = ArrayUsuarioLSa[0].nombre;
            console.log(nombre);
        const apellido = ArrayUsuarioLSa[0].apellido;
            console.log(apellido);
        const servicio = ArrayUsuarioLSa[0].servicio;
            console.log(servicio);
        const dia = ArrayUsuarioLSa[0].dia;
            console.log(dia);
        const horario = ArrayUsuarioLSa[0].hora;
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
        h3D.textContent = `La sesión será el día: ${dia} a las ${horario}`;
        MostrarD.appendChild(h3D);
    };
    temporizadorDeRetraso(); //Función invocada
});

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
});


//-------------------------------------------------------

// Se trae el objeto guardado en el Local Storage
const ArrayUsuarioFormulario= JSON.parse(localStorage.getItem("user-login"));
console.log(ArrayUsuarioFormulario);
// EVENTO ---->
// Evento click para redirigir ingreso a página "login" o "solicitar-turno" 
const LoginORegistroForm = document.querySelector("#boton-login-turno");
LoginORegistroForm.addEventListener("click", ()=>{
    if (ArrayUsuarioFormulario) {
        window.location.href = "./solicitar-turno.html";
    }else{
        window.location.href = "./login.html";
    };
});

//----------------------------------------------

//Función para aplicar innerHTML
function Change() {
    document.querySelector("#boton-login-turno").innerHTML = "SOLICITAR TURNO";
};
// Al estar un usurio logeado, cambia el nombre del enlace "INICIAR AHORA" por "SOLICITAR TURNO" en el encabezado del header
if (ArrayUsuarioFormulario) {
    Change(); //Función invocada
}; //---> Caso contrario figurará la leyenda "INICIAR AHORA"

// Evento click redirección al Home
const IrAlHome = document.querySelector("#inicio__");
IrAlHome.addEventListener("click", ()=>{
    if (IrAlHome) {
        window.location.href = "../index.html";
    };
});






