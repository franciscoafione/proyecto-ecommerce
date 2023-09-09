let formulario = document.getElementById("formulario");
let logOut = document.getElementById("logOut");
const usuariosGuardados = localStorage.getItem('usuarios');

function cargarDatosLS() {

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

  //Si faltan datos...
  if(nuevoUsuario.nombre !== null && nuevoUsuario.email !== null && nuevoUsuario.contraseña !== null){
    Swal.fire({
      icon: 'success',
      title: 'Registro exitoso',
      text: `${nombre}, has sido registrado con éxito.`,
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Registro fallido',
      text: `Falta llenar datos`,
    });
  }


});

//Oculta el boton de logOut
if(!usuariosGuardados){
  logOut.className = "oculto";
}

// Funcionalidad Boton logOut
logOut.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});