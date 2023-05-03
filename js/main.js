
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
            background: '#976ca1'
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
            background: '#976ca1'
        });
    };
});

function Change() {
    // const ArrayUsuariolog = JSON.parse(localStorage.getItem("user-login"));
    document.querySelector("#boton-login-turno").innerHTML = "SOLICITAR TURNO";
}

if (ArrayUsuarioDeslog) {
    Change(); // Función invocada
}

// Evento click para redirigir ingreso a página "login" o "solicitar-turno" 
const LoginORegistro = document.querySelector("#boton-login-turno");
LoginORegistro.addEventListener("click", ()=>{
    if (ArrayUsuarioDeslog) {
        window.location.href = "./pages/solicitar-turno.html";
    }else{
        window.location.href = "./pages/login.html";
    };
});

// Evento click redirección al Home
const IrAlHome = document.querySelector("#inicio__");
IrAlHome.addEventListener("click", ()=>{
    if (IrAlHome) {
        window.location.href = "./index.html";
    };
});
