firebase.initializeApp(firebaseConfig);


document.addEventListener('DOMContentLoaded', function () {
    let formulario = document.getElementById("formularioRegistro");

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        let nombre = document.getElementById('nombre').value;
        let fechaNac = document.getElementById('fechaNac').value;
        let email = document.getElementById('email').value;
        let usuario = document.getElementById('usuario').value;
        let contraseña = document.getElementById('contraseña').value;

        const nuevoUsuario = {
            nombre: nombre,
            fechaNac: fechaNac,
            email: email,
            usuario: usuario,
            contraseña: contraseña
        };

        // Guarda el nuevo usuario en Firebase Realtime Database o Firestore
        firebase.database().ref('PF-Afione').push(nuevoUsuario)
            .then(() => {
                console.log('Usuario agregado correctamente.');
            })
            .catch(error => console.log(error));

        // Limpia los campos del formulario
        formulario.reset();
    });

    /*
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        let nombre = document.getElementById('nombre');
        let fechaNac = document.getElementById('fechaNac');
        let email = document.getElementById('email');
        let usuario = document.getElementById('usuario');
        let contraseña = document.getElementById('contraseña');

        const nuevoUsuario = {
            nombre: nombre,
            fechaNac: fechaNac,
            email: email,
            usuario: usuario,
            contraseña: contraseña
        };

        // Lee el archivo JSON existente
        fetch('../usuarios.json')
            .then(response => response.json())
            .then(data => {
                // Agrega el nuevo usuario al arreglo existente
                data.push(nuevoUsuario);

                // Convierte el objeto actualizado a formato JSON
                const datosJSON = JSON.stringify(data);

                // Guarda los datos actualizados en el archivo JSON existente
                fetch('../usuarios.json', {
                    method: 'PUT', // Puedes usar 'POST' o 'PUT' según las configuraciones de tu servidor
                    body: datosJSON,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(response => {
                        if (response.ok) {
                            console.log('Archivo JSON actualizado correctamente.');
                        } else {
                            console.log('Error al actualizar el archivo JSON.');
                        }
                    })
                    .catch(error => console.log(error));
            })
            .catch(error => console.log(error));

        // Limpia los campos del formulario
        formulario.reset();
    });
    */
});



/*
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

                // Crea un enlace para descargar el archivo JSON actualizado      **********Asi solo descargo un archivo json nuevo.
                const a = document.createElement('a');
                a.href = url;
                a.download = 'formulario.json';
                a.click();

            })

            .catch(error => console.log(error));
*/