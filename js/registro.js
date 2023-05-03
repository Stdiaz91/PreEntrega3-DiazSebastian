
// Creación de Objeto mediante Clase - Función constructora
class Usuario{
    constructor(nombre, apellido, email, password){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password
    }
}
// ------------------------------------------------------------------------------------

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
    //---> Creación de función que muestra error de email ya resgistrado
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
        timer: 2000
    });
});

//-------------------------------------------------------

// Se trae el objeto guardado en el Local Storage
const ArrayUsuarioRegistered= JSON.parse(localStorage.getItem("user-login"));
console.log(ArrayUsuarioRegistered);
// EVENTO ---->
// Evento click para redirigir ingreso a página "login" o "solicitar-turno" 
const LoginORegistroReg = document.querySelector("#boton-login-turno");
LoginORegistroReg.addEventListener("click", ()=>{
    if (ArrayUsuarioRegistered) {
        window.location.href = "./solicitar-turno.html";
    }else{
        window.location.href = "./login.html";
    };
});

//----------------------------------------------

//Función para aplicar innerHTML
function Change() {
    document.querySelector("#boton-login-turno").innerHTML = "SOLICITAR TURNO";
}
// Al estar un usurio logeado, cambia el nombre del enlace "INICIAR AHORA" por "SOLICITAR TURNO" en el encabezado del header
if (ArrayUsuarioRegistered) {
    Change(); //Función invocada
} //---> Caso contrario figurará la leyenda "INICIAR AHORA"

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

// Evento click redirección al Home
const IrAlHome = document.querySelector("#inicio__");
IrAlHome.addEventListener("click", ()=>{
    if (IrAlHome) {
        window.location.href = "../index.html";
    }
});



