
// FUNCIÓN A UTILIZAR EN EL SIMULADOR ------------------------------
function turnoAsignado(param1, param2, param3) {
    return ("Muchas gracias por confiar en Psico-Online." + "\n\nEstimado/a " + param1 + " " + param2 + "." + "\nD.N.I: " + param3)
}
//-----------------------------------------------------------------
// OBJETO
class Paciente{
    constructor(nombre, apellido, documento){
        this.nombre = nombre;
        this.apellido = apellido;
        this.documento = documento;
    }
}
// ARRAYS
const turnosManana = [
    {inicio: 9},
    {inicio: 10},
    {inicio: 11},
    {inicio: 12}
];
console.log(turnosManana);

const turnosTarde = [
    {inicio: 16},
    {inicio: 17},
    {inicio: 18},
    {inicio: 19}
];
console.log(turnosTarde);

const servicios = [
    {nombre: "Psicooncología"}, 
    {nombre: "Psicoterapia (T.C.C.)"}
];
console.log(servicios);

let turnoSolicitado = [];


// INICIO DEL SIMULADOR -------------------------------------------

let solicitar = confirm("Bienvenido/a Psico-Online" + "\n\nSi desea solicitar un turno, por favor haga click en el botón 'Aceptar'" +
    "\nSi desea seguir navegando, por favor haga click en el botón 'Cancelar'");

const paciente1 = new Paciente();

if (solicitar == true) {
    do {
        paciente1.nombre = prompt("Ingrese su nombre");
        if (paciente1.nombre == "" || paciente1.nombre == " " || !isNaN(paciente1.nombre)) {
            alert("[Error]'Nombre' debe contener caracteres alfabéticos. Vuelva a intentarlo.");
        }
    } while (paciente1.nombre == "" || paciente1.nombre == " " || !isNaN(paciente1.nombre));
}
console.log(`El nombre del paciente ingresado es: ${paciente1.nombre}`);

if (solicitar == true) {
    do {
        paciente1.apellido = prompt("Ingrese su apellido");
        if (paciente1.apellido == "" || paciente1.apellido == " " || !isNaN(paciente1.apellido)) {
            alert("[Error]'Apellido' debe contener carateres alfabéticos. Vuelva a intentarlo.");
        }
    } while (paciente1.apellido == "" || paciente1.apellido == " " || !isNaN(paciente1.apellido))
}
console.log(`El apellido del paciente ingresado es: ${paciente1.apellido}`);

if (solicitar == true) {
    do {
        paciente1.documento = parseInt(prompt("Ingrese su n° de documento"));
        if (isNaN(paciente1.documento)) {
            alert("[Error]'Documento' debe contener caracteres numéricos. Vuelva a intentarlo.");
        }
    } while (isNaN(paciente1.documento));
}
console.log(`El documento del paciente ingresado es: ${paciente1.documento}`);

if (solicitar == true) {

    alert("Hola estimado/a " + paciente1.nombre + " " + paciente1.apellido + "." + "\n\nA continuación haga click en el botón 'Aceptar' para seleccionar una prestación.");
    console.log(`El nombre es: ${paciente1.nombre} - el apellido es: ${paciente1.apellido} - El documento es: ${paciente1.documento}`);
    let seleccionarServicio;
    do {
        seleccionarServicio = prompt("Ingrese la prestación que desea." + "\n" +
            "\nColocando la letra 'A' para el servicio de Psicooncología o la letra 'B' para el servicio de Psicoterapia.").toUpperCase();
        if (seleccionarServicio != "A" && seleccionarServicio != "B") {
            alert("[Error]No existe prestación asignada. Vuelva a intentarlo.");
        }
    } while (seleccionarServicio != "A" && seleccionarServicio != "B");
    if (seleccionarServicio == "A") {
        alert("Usted seleccionó el servicio de Psicooncología.");
        const prestacion1 = servicios.find((service) => service.nombre === "Psicooncología");
        console.log(prestacion1);
    } else if (seleccionarServicio == "B") {
        alert("Usted seleccionó el servicio de Psicoterapia (TCC).");
        const prestacion2 = servicios.find((service) => service.nombre === "Psicoterapia (T.C.C.)");
        console.log(prestacion2);
    }
}

if (solicitar == true) {
    let seleccionarHorario;
    do {
        seleccionarHorario = prompt("Ingrese por favor el horario que desea tener la sesión" + "\n" +
                    "\nSiendo 'A' para el horario de mañana y 'B' para el de la tarde").toUpperCase();
            if (seleccionarHorario != "A" && seleccionarHorario != "B") {
            alert("[Error]No existe horario asignado. Vuelva a intentarlo.");
        }
    } while (seleccionarHorario != "A" && seleccionarHorario != "B");
        if (seleccionarHorario == "A") {
            alert("Usted seleccionó el horario de mañana.");
            let horarioManana = turnosManana.map((hora) => `Hora de inicio ${hora.inicio} AM - Profesional: Lic. Maggioni - Dur: (45min)`);
            alert(horarioManana.join("\n"));
            let horaM = 0;
            do {
                horaM = parseInt(prompt("Seleccione con números la hora que desea tener su sesión" +"\nLos números permitidos son: 9, 10, 11 y 12"));
                if (horaM != 9 && horaM != 10 && horaM != 11 && horaM != 12) {
                    alert("[Error]No existe hora asignada. Vuelva a intentarlo.");
                    }
            } while (horaM != 9 && horaM != 10 && horaM != 11 && horaM != 12);
                if (horaM == 9) {
                    alert((turnoAsignado(paciente1.nombre, paciente1.apellido, paciente1.documento)) + "\nEl turno seleccionado es de 9:00 a 9:45 de la mañana con Licenciada Maggioni." + "\nLe aconsejamos que disponga de buena señal de internet para evitar interrupciones en la sesión." + "\n\nSaludos cordiales.");
                } else if (horaM == 10) {
                    alert((turnoAsignado(paciente1.nombre, paciente1.apellido, paciente1.documento)) + "\nEl turno seleccionado es de 10:00 a 10:45 de la mañana con Licenciada Maggioni." + "\nLe aconsejamos que disponga de buena señal de internet para evitar interrupciones en la sesión." + "\n\nSaludos cordiales.");
                } else if (horaM == 11) {
                    alert((turnoAsignado(paciente1.nombre, paciente1.apellido, paciente1.documento)) + "\nEl turno seleccionado es de 11:00 a 11:45 de la mañana con Licenciada Maggioni." + "\nLe aconsejamos que disponga de buena señal de internet para evitar interrupciones en la sesión." + "\n\nSaludos cordiales.");
                } else if (horaM == 12) {
                    alert((turnoAsignado(paciente1.nombre, paciente1.apellido, paciente1.documento)) + "\nEl turno seleccionado es de 12:00 a 12:45 de la mañana con Licenciada Maggioni." + "\nLe aconsejamos que disponga de buena señal de internet para evitar interrupciones en la sesión." + "\n\nSaludos cordiales.");
                }
            
                turnoSolicitado.push({inicio: horaM});
                console.log(turnoSolicitado);

        }else if (seleccionarHorario == "B") {
            alert("Usted seleccionó el horario de tarde.");
            let horarioTarde = turnosTarde.map((hora) => `Hora de inicio ${hora.inicio} PM - Profesional: Lic. Maggioni - Dur: (45min)`);
            alert(horarioTarde.join("\n"));
            let horaT = 0;
            do {
                
                horaT = parseInt(prompt("Seleccione con números la hora que desea tener su sesión" +"\nLos números permitidos son: 16, 17, 18 y 19"));
                if (horaT != 16 && horaT != 17 && horaT != 18 && horaT != 19) {
                    alert("[Error]No existe hora asignada. Vuelva a intentarlo.");
                    }
            } while (horaT != 16 && horaT != 17 && horaT != 18 && horaT != 19);
                if (horaT == 16) {
                    alert((turnoAsignado(paciente1.nombre, paciente1.apellido, paciente1.documento)) + "\nEl turno seleccionado es de 16:00 a 16:45 de la mañana con Licenciada Maggioni." + "\nLe aconsejamos que disponga de buena señal de internet para evitar interrupciones en la sesión." + "\n\nSaludos cordiales.");
                } else if (horaT == 17) {
                    alert((turnoAsignado(paciente1.nombre, paciente1.apellido, paciente1.documento)) + "\nEl turno seleccionado es de 17:00 a 17:45 de la mañana con Licenciada Maggioni." + "\nLe aconsejamos que disponga de buena señal de internet para evitar interrupciones en la sesión." + "\n\nSaludos cordiales.");
                } else if (horaT == 18) {
                    alert((turnoAsignado(paciente1.nombre, paciente1.apellido, paciente1.documento)) + "\nEl turno seleccionado es de 18:00 a 18:45 de la mañana con Licenciada Maggioni." + "\nLe aconsejamos que disponga de buena señal de internet para evitar interrupciones en la sesión." + "\n\nSaludos cordiales.");
                } else if (horaT == 19) {
                    alert((turnoAsignado(paciente1.nombre, paciente1.apellido, paciente1.documento)) + "\nEl turno seleccionado es de 19:00 a 19:45 de la mañana con Licenciada Maggioni." + "\nLe aconsejamos que disponga de buena señal de internet para evitar interrupciones en la sesión." + "\n\nSaludos cordiales.");
                }
            
                turnoSolicitado.push({inicio: horaT});
                console.log(turnoSolicitado);
        }
}
console.log(paciente1);

