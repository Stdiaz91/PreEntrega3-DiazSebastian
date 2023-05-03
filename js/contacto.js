// Se trae el objeto guardado en el Local Storage
const ArrayUsuarioCt = JSON.parse(localStorage.getItem("user-login"));
console.log(ArrayUsuarioCt);
// EVENTO ---->
// Evento click para redirigir ingreso a página "login" o "solicitar-turno" 
const LoginORegistroCt = document.querySelector("#boton-login-turno");
LoginORegistroCt.addEventListener("click", ()=>{
    if (ArrayUsuarioCt) {
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
if (ArrayUsuarioCt) {
    Change(); //Función invocada
}; //---> Caso contrario figurará la leyenda "INICIAR AHORA"

// Evento click redirección al Home
const IrAlHome = document.querySelector("#inicio__");
IrAlHome.addEventListener("click", ()=>{
    if (IrAlHome) {
        window.location.href = "../index.html";
    };
});

//----------------------------------
//Creación de objeto mediante clase - función constructora
class UserContacto{
    constructor(nombre, apellido, email, telefono, mensaje, date){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.telefono = telefono;
        this.mensaje = mensaje;
    };
};
// EVENTOS --->
// Evento submit para creación de usuario
const contacto = document.querySelector("#contact-js");
contacto.addEventListener("submit", (e)=>{
    e.preventDefault();
    const UsuarioContacto = new UserContacto();  //Objeto creado
    


    const nombre = document.querySelector("#name__f").value;
    const apellido = document.querySelector("#surname__f").value;
    const email = document.querySelector("#email__f").value;
    const telefono = document.querySelector("#phone__f").value;
    const mensaje = document.querySelector("#comments").value;
    

    UsuarioContacto.nombre = nombre;
    UsuarioContacto.apellido = apellido;
    UsuarioContacto.email = email;
    UsuarioContacto.telefono = telefono;
    UsuarioContacto.mensaje = mensaje;


    const ArrayContacto = [];
    ArrayContacto.push(UsuarioContacto);
    localStorage.setItem("contacto", JSON.stringify(ArrayContacto));
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: '¡Mensaje enviado exitosamente!',
        showConfirmButton: false,
        timer: 2500
    });
});


