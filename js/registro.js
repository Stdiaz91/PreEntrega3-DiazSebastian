// Creación de Objeto mediante Clase - Función constructora
class Usuario{
    constructor(nombre, apellido, email, password){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password
    }
};
// ------------------------------------------------------------------------------------
//---> Si la key "users" está nula porque aún no se registro ningún usuario desde el sitio, se cargarán los users del JSON
// En caso de que ya se haya registrado un usuario desde el sitio, el flujo seguirá por el else.
const ArrayUsersLS = JSON.parse(localStorage.getItem("users"));
console.log(ArrayUsersLS);
function UsuarioAnulado() {
    if (ArrayUsersLS === null) {
        const JsonLS = JSON.parse(localStorage.getItem("json"));
        console.log(JsonLS);
        localStorage.setItem("users", JSON.stringify(JsonLS));
    } else{
    };
};
UsuarioAnulado(); // Función invocada

//----------------------------------------------------

// EVENTOS --->
// Evento submit para creación de usuario
const registro = document.querySelector("#register_js");
registro.addEventListener("submit", (e)=>{
    e.preventDefault();
    const UsuarioCreated = new Usuario(); //Objeto creado
    
    const nombre = document.querySelector("#name").value;
    const apellido = document.querySelector("#surname").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    UsuarioCreated.nombre = nombre;
    UsuarioCreated.apellido = apellido;
    UsuarioCreated.email = email;
    UsuarioCreated.password = password;
//------- 
//Esta sección realiza una codición if que impide que distintos usuarios se registren con el mismo correo
    const ArrayUsuarios = JSON.parse(localStorage.getItem("users")) || [];
    const UsuarioRegistrado = ArrayUsuarios.find(user => user.email === email);
    //---> Creación de función que muestra error de email ya registrado
    function mostrarErrorMail(){
        document.getElementById("error-mail-reg").style.display = "block";
    }
    if (UsuarioRegistrado) {
        return mostrarErrorMail(); //---> Función invocada;
    } 
    ArrayUsuarios.push(UsuarioCreated);
    localStorage.setItem("users", JSON.stringify(ArrayUsuarios));
    //----> Función Temporizador 
    let identificadorTiempoDeEspera;
    function temporizadorDeRetraso(){
        identificadorTiempoDeEspera = setTimeout(funcionConRetraso, 1500);
    };
    //-----> Función con retraso
    function funcionConRetraso(){
        window.location.href = "./login.html";
    };
    temporizadorDeRetraso();    // Función invocada
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: '¡Registro Exitoso!',
        showConfirmButton: false,
        timer: 2000,
        background: '#976ca1',
        color: '#fff'
    });
});

//-------------------------------------------------------

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

//----------------------------------------------

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

//----------------->

//Función ocultar el error de email registrado
function OcultarErrorMail(){
    document.getElementById("error-mail-reg").style.display = "none";
};
// Una vez mostrado el error, al clickear en el input para colocar nuevamente el correo
// el mensaje de error de login desaparecerá
const ClickOnEmail = document.querySelector("#email");
ClickOnEmail.addEventListener("click", (e)=>{
    if (ClickOnEmail) {
        OcultarErrorMail(); // Función invocada
    };
});

//----------------->

// Evento click redirección al Home
const IrAlHome = document.querySelector("#inicio__");
IrAlHome.addEventListener("click", ()=>{
    if (IrAlHome) {
        window.location.href = "../index.html";
    };
});

//------------------>

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




