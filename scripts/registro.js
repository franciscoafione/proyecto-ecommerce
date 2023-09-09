let formulario = document.getElementById("formulario");

function cargarDatosLS() {
  const usuariosGuardados = localStorage.getItem('usuarios');
  if (usuariosGuardados) {
    return JSON.parse(usuariosGuardados);
  } else {
    return [];
  }
}
function guardarDatosLS(usuarios) {
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

const usuarios = cargarDatosLS();

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let nombre = document.getElementById('nombre').value;
  let fechaNac = document.getElementById('fechaNac').value;
  let email = document.getElementById('email').value;
  let contraseña = document.getElementById('contraseña').value;

  const nuevoUsuario = {
    nombre: nombre,
    fechaNac: fechaNac,
    email: email,
    contraseña: contraseña
  };

  usuarios.push(nuevoUsuario);
  guardarDatosLS(usuarios);



  Swal.fire({
    icon: 'success',
    title: 'Registro exitoso',
    text: `${nombre}, has sido registrado con éxito.`,
  });

});




