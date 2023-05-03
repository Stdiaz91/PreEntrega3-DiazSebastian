//-------------------------------------------------------

// Se trae el objeto guardado en el Local Storage
const ArrayUsuarioTCC= JSON.parse(localStorage.getItem("user-login"));
console.log(ArrayUsuarioTCC);
// EVENTO ---->
// Evento click para redirigir ingreso a página "login" o "solicitar-turno" 
const LoginORegistroTCC = document.querySelector("#boton-login-turno");
LoginORegistroTCC.addEventListener("click", ()=>{
    if (ArrayUsuarioTCC) {
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
if (ArrayUsuarioTCC) {
    Change(); //Función invocada
}; //---> Caso contrario figurará la leyenda "INICIAR AHORA"

// Evento click redirección al Home
const IrAlHome = document.querySelector("#inicio__");
IrAlHome.addEventListener("click", ()=>{
    if (IrAlHome) {
        window.location.href = "../index.html";
    };
});

