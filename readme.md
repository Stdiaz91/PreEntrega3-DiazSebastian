* Este simulador de Javascript recrea la simulación de una solicitud de turnos para tomar sesiones online de psicología.

* Explicación del funcionamiento del simulador:

* Nota importante: A diferencia de la primera entrega, se ha establecido un objeto con clase y su función constructora correspondiente, con el nombre de "Paciente". Y también se implementó el uso de arrays para los turnos y para los servicios. Además con lo estipulado en las consignas de la segunda pre-entrega se hizo el uso de métodos y creación de funciones de orden superior, utilizando el método join, find y map.

Al ingresar al sitio web, principalmente en el inicio, aparece una ventana que indica dos opciones: "Aceptar" para solicitar un turno o "Cancelar" para seguir navegando en el sitio.

Si clickeamos en el botón "Aceptar" el simulador nos lleva en primer lugar a tres ventanas que aparecerán de manera secuencial, donde se deberá colocar el Nombre, Apellido y Documento del usuario. Vale destacar que en el caso del formulario Nombre y Apellido, no se podrá ingresar caracteres numéricos, espacios o dejar el formulario en blanco. Para el formulario de Documento, dicha ventana no permite colocar caracteres alfabéticos, espacios o dejarlo en blanco.
--Además por consola nos mostrará los valores de las variables--

Una vez completados los formularios correspondientes, se cargan los datos ingresados y aparece una ventana con el Nombre y el Apellido del usuario, mas un aviso para continuar con la solicitud.

Luego aparece una ventana para ingresar una letra asignada a cada prestación. La prestaciones que solicita el profesional son Psicooncología y Psicoterapía; siendo A para la primera y B para la segunda. Vale destacar que como en los formularios anteriores las opciones estan totalmente condicionadas a solo las dos letras asignadas (tanto en mayúscula como en minúscula), por lo que el simulador no avanzará a ningún otro punto hasta que no se coloque la letra específica para cada servicio.

Al tipear A o B una ventana de alerta nos brindará el servicio que solicitamos.

Al Aceptar, continuamos a otra ventana  donde nos indica el horario que deseamos tener la sesión online, el cual puede ser en la mañana o en la tarde. Este caso es similar al anterior. A cada horario se le asigna una letra, siendo A  para la mañana y B para la tarde (tanto en mayúscula como en minúscula). También se encuentran condicionados para no poder seleccionar ningún otra letra o número que no sea lo especificado por el simulador.

Al colocar la letra A o B aparece una ventana donde nos mostrará el horario que escogimos.

Luego de Aceptar, el simulador nos lleva a una ventana donde nos permite colocar la hora del día que nos quede cómodos para realizar nuestra sesión online. Hay diversos rangos horarios. Similar a las ventanas anteriores, se deberá colocar un número específico asignado a cada hora de sesión. Cabe destacar que tambien se encuentra condicionado por el sistema, y no permite colocar palabras ni números que no corresponden.

Una vez seleccionada una hora, aparece una ventana de alerta que nos recuerda y confirma la hora elegida. Al Aceptar, nos dirige a una última ventana de confirmación con nuestros datos ingresados (Nombre, Apellido, Documento y turno elegido) y una serie de recomendaciones.
