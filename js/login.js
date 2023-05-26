// Esta función evita que un usuario ya logeado ingrese nuevamiente a la página de INICAR SESIÓN
const ArrayValidacionSeguridad = JSON.parse(localStorage.getItem("user-login")) || false;
    function Validation() {
        if (ArrayValidacionSeguridad) {
            window.location.href = "./solicitar-turno.html";
        }
    };
    Validation(); //---> Función invocada

//-------------------->

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

//--------------------------->

//--- Se crea el objeto Admin y se guarda en el LS sin necesidad de crearlo mediante el formulario, simulando que
// ya se encontraba creado en el backend
const Admin =
    {
        nombre: "Giuliana",
        apellido: "Maggioni",
        email: "admin@psico.com",
        password: "admin"
    };

    const ArraysAdmin = [];
    ArraysAdmin.push(Admin);
    localStorage.setItem("admin", JSON.stringify(ArraysAdmin));

    const ArrayAdminLS = JSON.parse(localStorage.getItem("admin"));
    const ArrayUsersLS = JSON.parse(localStorage.getItem("users"));
    //--- Se crea un usuario vacío para poder informarle al internauta que no podrá ingresar a ninguna opción
    // en caso de no tener una cuenta y además se trae los datos del JSON para iniciar sesión con cualquier usuario
    // creado en el archivo JSON si así lo desea
    function UsuarioAnulado() {
        if (ArrayUsersLS === null) {
            const UserVoid =
                {
                    nombre: "",
                    apellido: "",
                    email: "",
                    password: ""
                };
            const ArrayUserVoid =[];
            ArrayUserVoid.push(UserVoid);
            const ArrayLSNull = ArrayAdminLS.concat(ArrayUserVoid);
            const JsonLocalStorage = JSON.parse(localStorage.getItem("json"));
            const ArrayInicialLog = ArrayLSNull.concat(JsonLocalStorage)
            localStorage.setItem("users-admin", JSON.stringify(ArrayInicialLog));
        }else {
            const ArrayLS = ArrayAdminLS.concat(ArrayUsersLS);
            localStorage.setItem("users-admin", JSON.stringify(ArrayLS));
        }
    };
    UsuarioAnulado(); // Función invocada


//-------------------------------->

// Creación de Objeto mediante Clase - Función constructora
class UsuarioLogeado{
    constructor(email, password){
        this.email = email;
        this.password = password
    }
}
// ------------------------------------------------------------------------------------

// EVENTOS --->
// Evento submit para logear usuario
const login = document.querySelector("#login_js");
login.addEventListener("submit", (e)=>{
    e.preventDefault();

    const UserLogeado = new UsuarioLogeado(); //Objeto creado
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    UserLogeado.email = email;
    UserLogeado.password = password;
    //------- 
    //Esta sección realiza una condición if para avisar cuando se ha ingresado el correo o la contraseña de manera errónea
    const ArrayUsuariosLog = JSON.parse(localStorage.getItem("users-admin")) || [];

    const validUser = ArrayUsuariosLog.find(user => user.email === email && user.password === password);
    //---> Creación de función que muestra error
    function mostrarError(){
        document.getElementById("error-login").style.display = "block";
    }
    if (!validUser) {
        return  mostrarError(); //---> Función invocada
    }
    let identificadorTiempoDeEsperaLogin;
    function temporizadorDeRetraso(){
        identificadorTiempoDeEsperaLogin = setTimeout(funcionConRetraso, 2500);
    };
    //-----> Función con retraso
    function funcionConRetraso(){
        localStorage.setItem("user-login", JSON.stringify(validUser));
        if (validUser.email === "admin@psico.com") {
            window.location.href = "administrador.html";
        } else {
            window.location.href = "solicitar-turno.html";
        }
    };
    temporizadorDeRetraso();    // Función invocada
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: `¡Bienvenid@ a Psico-Online ${validUser.nombre}`,
        showConfirmButton: false,
        timer: 2500,
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
ChangeTxt(); //---> Función invocada

//----------------------------------------------

//Función ocultar el error
function OcultarError(){
    document.getElementById("error-login").style.display = "none";
};
// Una vez mostrado el error, al clickear en cualquiera de los dos input para colocar nuevamente los datos
// el mensaje de error de login desaparecerá
const ClickOnEmail = document.querySelector("#email");
const clickOnPassword = document.querySelector("#password");
ClickOnEmail.addEventListener("click", (e)=>{
    if (ClickOnEmail) {
        OcultarError(); // Función invocada
    };
});
clickOnPassword.addEventListener("click", (e)=>{
    if (clickOnPassword) {
        OcultarError(); // Función invocada
    };
});

