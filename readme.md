Al ingresar al sitio web el internauta va poder solicitar sesiones de psicología de forma online. El primer paso que se debe realizar, es la creación de la cuenta. Para ingresar a esa sección, se debe ingresar en la sección INICIAR SESIÓN encontrada en la parte superior derecha del nav. Una vez allí, debe clickear en el enlace de REGISTRATE, allí lo llevará al formulario de registro.

Una vez dentro de la página de registro podrá llenar sus datos y así crear una cuenta. Si sus datos son correctos y si no coincide el email con uno ya registrado le aparecer un Sweet Alert que dirá que su registro fue exitoso. En caso de que el email ya esté registrado, le figurar mediante una modificación del DOM que el email esta registrado por otro usuario. Si no hubo incovenientes con el email, al hacer click en el botón REGISTRATE automáticamente lo llevará a la página de INICIAR SESIÓN.

Dentro de ella podrá colocar su email y su contraseña. Al estar guardados ya los datos del registro en el LocalStorage, usted podrá logearse tranquilamente. Además en caso de que haya un error en la contraseña o el email, un mensaje mediante modificación de DOM le avisará el error (éste desaparecerá una vez intente realizar la acción nuevamente). Al ingresar los datos correctamente, clickea INGRESAR y una ventana Sweet Alert le avisará que ingresó correctamente dandole la bienvenida con su Nombre.

Luego automáticamente lo llevará a la página de SOLICITAR TURNO donde se encontrará con un mensaje con su nombre en la parte superior del formulario (modificación del DOM). Aquí podrá solicitar el turno para la especialidad que desee, el dia que desee a las horas especificadas por el profesional. En caso de que un turno ya esté dado se le avisará mediante una ventana Sweet Alert. En caso que el turno esté libre, se le avisará un Sweet Alert en modo Success y luego aparecerá una ventana MODAL con modificación del DOM con todos los datos del turno solicitado.

En el caso que usted ESTE logeado, pero no desee solicitar un turno aún, al salir de la página SOLICITAR TURNO, puede interactuar en las demás partes del sitio, UN DETALLE PARTICULAR es que al estar logeado, se modifica el DOM para que en la sección de INICIAR SESION cambie por SOLICITAR TURNO. Además se le colocó una condicional que evitar que cuando el usuario NO ESTÁ LOGEADO no pueda ingresar a la pagina de SOLICITAR TURNO, por mas que sepa la ruta URL, automáticamente lo dirigirá a iniciar la sesión.

Para deslogerse, en el HOME del sitio, en la parte inferior izquierda se encuentra un icono rojo con una opacidad del 50%, al hacer click sobre el ocurrá que este se visibilizará y realizará un evento que deslogeará el usuario, removiendo la key del localStorage, se le avisará si esta seguro cerrar sesión, en caso de aceptar, lo deslogeará. Si usted no está logeado y clickea el icono, le avisará mediante un sweet alert que usted no está logeado. AL DESLOGEARSE VUELVE A CAMBIAR EL DOM y aparecerá nuevamente el INICIAR SESIÓN en el NAV.

Tambien en la sección CONTACTO del nav, puede ingresar y contactarse directamente con el profesional, sin necesidad de crearse una cuenta. Solo se le piden datos especificos y un mensaje con su inquietud o consulta.

Otro pequeño detalle es que al logo de Psico-Online que se encuentra en el NAV, al hacerle click se inicia un evento click (ya que es una imagen sin enlace) y lleva a INICIO, esto ocurre en todas las páginas del sitio para darle más dinamismo en lso dispositivos mobile.

Espero le guste profe. Saludos.

