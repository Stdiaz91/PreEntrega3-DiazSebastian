
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
    //Esta sección realiza una codición if para avisar cuando se ha ingresado el correo o la contraseña de manera errónea
    const ArrayUsuariosLog = JSON.parse(localStorage.getItem("users")) || [];
    const validUser = ArrayUsuariosLog.find(user => user.email === email && user.password === password);
    console.log(validUser);
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
        window.location.href = "solicitar-turno.html";
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
const ArrayUsuarioLoger= JSON.parse(localStorage.getItem("user-login"));
console.log(ArrayUsuarioLoger);
// EVENTO ---->
// Evento click para redirigir ingreso a página "login" o "solicitar-turno" 
const LoginORegistroLoger = document.querySelector("#boton-login-turno");
LoginORegistroLoger.addEventListener("click", ()=>{
    if (ArrayUsuarioLoger) {
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
if (ArrayUsuarioLoger) {
    Change(); //Función invocada
}; //---> Caso contrario figurará la leyenda "INICIAR AHORA"

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

// Evento click redirección al Home
const IrAlHome = document.querySelector("#inicio__");
IrAlHome.addEventListener("click", ()=>{
    if (IrAlHome) {
        window.location.href = "../index.html";
    };
});

