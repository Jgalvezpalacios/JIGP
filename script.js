
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

document.addEventListener('DOMContentLoaded', function() {
    // Crea un elemento de script
    var script = document.createElement('script');

    // Asigna el src con la URL del script de SMTP
    script.src = 'https://smtpjs.com/v3/smtp.js';

    // Añade el script al final del cuerpo del documento
    document.body.appendChild(script);

    // Ahora puedes utilizar funciones o métodos proporcionados por el script de SMTP
});

function sendEmail(){
    Email.send({
        Host : "mail.cinfo.cl",
        Username : "cinfo@cinfo.cl",
        Password : "Jaga1570",
        To : 'jgalvezabarca@gmail.com',
        From : document.getElementById("email").value,
        Subject : "Nuevo contacto Cinfo",
        Body : "Nombre" + document.getElementById("name").value
            + "<br> Correo:" + document.getElementById("email").value
            + "<br> Teléfono:" + document.getElementById("telefono").value
            + "<br> Empresa:" + document.getElementById("empresa").value
            + "<br> Mensaje:" + document.getElementById("mensaje").value
    }).then(
      message => alert("¡Mensaje enviado con exito!")
    );
}

//en caso de querer utilizar el slider con js, se puede usar el siguiente codigo
//  var copy = document.querySelector(".logo-slide").cloneNode(true);
//  document.querySelectorx(.logos).appendChild(copy);
//  la funcion copia el carrusel con los logos lo que permite no tener duplicadas las imagenes. Comprobar si reduce tiempos de carga