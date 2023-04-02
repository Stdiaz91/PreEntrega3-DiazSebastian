
// FUNCIÓN A UTILIZAR EN EL SIMULADOR ------------------------------
function turnoAsignado(param1, param2, param3) {
    return ("Muchas gracias por confiar en Psico-Online." + "\n\nEstimado/a " + param1 + " " + param2 + "." + "\nD.N.I: " + param3 + "\nSu turno fue guardado exitosamente." + "\nLe aconsejamos que disponga de buena señal de internet para evitar interrupciones en la sesión." + "\n\nSaludos cordiales.");
}
//-----------------------------------------------------------------

// INICIO DEL SIMULADOR -------------------------------------------

let solicitar = confirm("Bienvenido/a Psico-Online" + "\n\nSi desea solicitar un turno, por favor haga click en el botón 'Aceptar'" +
    "\nSi desea seguir navegando, por favor haga click en el botón 'Cancelar'");

let nombre;
if (solicitar == true) {
    do {
        nombre = prompt("Ingrese su nombre");
        console.log(nombre);
        if (nombre == "" || nombre == " " || !isNaN(nombre)) {
            alert("[Error]'Nombre' debe contener caracteres alfabéticos. Vuelva a intentarlo.");
            console.log(nombre);
        }
    } while (nombre == "" || nombre == " " || !isNaN(nombre));
}

let apellido;
if (solicitar == true) {
    do {
        apellido = prompt("Ingrese su apellido");
        console.log(apellido);
        if (apellido == "" || apellido == " " || !isNaN(apellido)) {
            alert("[Error]'Apellido' debe contener carateres alfabéticos. Vuelva a intentarlo.");
            console.log(apellido);
        }
    } while (apellido == "" || apellido == " " || !isNaN(apellido))
}

let documento = 0;
if (solicitar == true) {
    do {
        documento = parseInt(prompt("Ingrese su n° de documento"));
        console.log(documento);
        if (isNaN(documento)) {
            alert("[Error]'Documento' debe contener caracteres numéricos. Vuelva a intentarlo.");
            console.log(documento);
        }
    } while (isNaN(documento));
}

let prestacion;
if (solicitar == true) {

    alert("Hola estimado/a " + nombre + " " + apellido + "." + "\n\nA continuación haga click en el botón 'Aceptar' para seleccionar una prestación.");

    do {
        prestacion = prompt("Ingrese la prestación que desea." + "\n" +
            "\nColocando la letra 'A' para el servicio de Psicooncología o la letra 'B' para el servicio de Psicoterapia.").toUpperCase();
        if (prestacion != "A" && prestacion != "B") {
            alert("[Error]No existe prestación asignada. Vuelva a intentarlo.");
        }
    } while (prestacion != "A" && prestacion != "B");
    if (prestacion == "A") {
        alert("Usted seleccionó el servicio de Psicooncología.");
        console.log(prestacion);

    } else if (prestacion == "B") {
        alert("Usted seleccionó el servicio de Psicoterapia (TCC).");
        console.log(prestacion);
    }
}

let horario;
if (solicitar == true) {

    do {
        horario = prompt("Ingrese por favor el horario que desea tener la sesión" + "\n" +
            "\nSiendo 'A' para el horario de mañana y 'B' para el de la tarde").toUpperCase();
        if (horario != "A" && horario != "B") {
            alert("[Error]No existe horario asignado. Vuelva a intentarlo.");
        }
    } while (horario != "A" && horario != "B");
    if (horario == "A") {
        alert("Usted seleccionó el horario de mañana.");
        console.log(horario);
        let manana = 0;
        do {
            manana = parseInt(prompt("Por último ingrese la hora de la mañana que desea realizar la sesión." + "\n\nColocando el número correspondiente a la hora asignada:" + "\nColoque '1' para el horario de 9:00 a 9:45" + "\nColoque '2' para el horario de 10:00 a 10:45" + "\nColoque '3' para el horario de 11:00 a 11:45" + "\nColoque '4' para el horario de 12:00 a 12:45"));
            if (manana != 1 && manana != 2 & manana != 3 && manana != 4) {
                alert("[Error]No existe hora asignada. Vuelva a intentarlo.");
            }
        } while (manana != 1 && manana != 2 & manana != 3 && manana != 4);
        if (manana == 1) {
            alert("El turno seleccionado es de 9:00 a 9:45 de la mañana.");
        } else if (manana == 2) {
            alert("El turno seleccionado es de 10:00 a 10:45 de la mañana.");
        } else if (manana == 3) {
            alert("El turno seleccionado es de 11:00 a 11:45 de la mañana.");
        } else if (manana == 4) {
            alert("El turno seleccionado es de 12:00 a 12:45 de la mañana.");
        }

    } else if (horario == "B") {
        alert("Usted seleccionó el horario de tarde.");
        console.log(horario);
        let tarde = 0;
        do {
            tarde = parseInt(prompt("Por último ingrese la hora de la tarde que desea realizar la sesión." + "\n\nColocando el número correspondiente a la hora asignada:" + "\nColoque '1' para el horario de 16:00 a 16:45" + "\nColoque '2' para el horario de 17:00 a 17:45" + "\nColoque '3' para el horario de 18:00 a 18:45" + "\nColoque '4' para el horario de 19:00 a 19:45"));
            if (tarde != 1 && tarde != 2 & tarde != 3 && tarde != 4) {
                alert("[Error]No existe hora asignada. Vuelva a intentarlo.");
            }
        } while (tarde != 1 && tarde != 2 & tarde != 3 && tarde != 4);
        if (tarde == 1) {
            alert("El turno seleccionado es de 16:00 a 16:45 de la tarde.");
        } else if (tarde == 2) {
            alert("El turno seleccionado es de 17:00 a 17:45 de la tarde.");
        } else if (tarde == 3) {
            alert("El turno seleccionado es de 18:00 a 18:45 de la tarde.");
        } else if (tarde == 4) {
            alert("El turno seleccionado es de 19:00 a 19:45 de la tarde.");
        }
    }
}

if (solicitar == true) {
    // FUNCION -----
    alert(turnoAsignado(nombre, apellido, documento));
}

