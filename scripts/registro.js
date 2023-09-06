document.addEventListener('DOMContentLoaded', function () {
    let formulario = document.getElementById("formularioRegistro");

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        let nombre = document.getElementById('nombre');
        let fechaNac = document.getElementById('fechaNac');
        let email = document.getElementById('email');
        let usuario = document.getElementById('usuario');
        let contraseña = document.getElementById('contraseña');

        const datosUsuario = {
            nombre: nombre,
            fechaNac: fechaNac,
            email: email,
            usuario: usuario,
            contraseña: contraseña
        };

        fetch("../usuarios.json")
            .then(Response => Response.json())
            .then(data => {
                //agrega el usuario al arreglo.
                data.usuarios.push(datosUsuario);

                // convierte el objeto a json
                const datosJSON = JSON.stringify(data);

                // Guarda los datos en el archivo json.
                const blob = new Blob([datosJSON], {type: 'application/json' });
                const url = URL.createObjectURL(blob);

                // Crea un enlace para descargar el archivo JSON actualizado
                const a = document.createElement('a');
                a.href = url;
                a.download = 'formulario.json';
                a.click();

            })

            .catch(error => console.log(error));

        // Limpia los campos del formulario
        formulario.reset();
    });
});