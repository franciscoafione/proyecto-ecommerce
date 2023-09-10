let seccionProductos = document.getElementById("seccionProductos");
const arregloUsuarios = localStorage.getItem('usuarios');
let arregloUsuariosObjetos = JSON.parse(arregloUsuarios);
let tituloRegistro = document.getElementById("tituloRegistro");
let listaHeader = document.getElementById("listaHeader");

// Boton logOut:
let cierroSesion = document.createElement("li");
cierroSesion.innerHTML = `
  <a href="#">Cerrar sesión</a>
`;
listaHeader.append(cierroSesion);

cierroSesion.addEventListener("click", () => {
  Swal.fire({
    title: '¿Está seguro?',
    text: '¿Seguro que desea cerrar sesión?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, cerrar sesión'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        '¡Perfecto!',
        'Ha cerrado sesión con éxito.',
        'success'
      );

      localStorage.clear();
      location.reload();
    }
  });
});


if (localStorage.length === 0){ 
    tituloRegistro.innerHTML = `Registrarse`;
    cierroSesion.className = "oculto";
} else {
    tituloRegistro.innerHTML = `${arregloUsuariosObjetos[0].nombre}`
}

const pedirProductos = async () => {
    const Response = await fetch("./data.json");
    const data = await Response.json();

    //Muestro las tarjetas:
    data.forEach(i => {
        let div = document.createElement("div");
        div.className = "productos";
        div.innerHTML = `
                <img src="${i.imagen}" class="imagen">
                <div class="textoTarjeta">
                    <div>
                        <h2> ${i.nombre}</h2>
                        <p>id: ${i.id} - $ ${i.precio}</p>
                    </div>
        
                    <div>
                        <button id="boton-${i.id}">Agregar al carrito </button>
                    </div>
                </div>
            `;

        seccionProductos.append(div);

        let boton = document.getElementById(`boton-${i.id}`);

        //Agrego al carrito:
        boton.addEventListener("click", () => {
            if (arregloUsuarios !== null && arregloUsuarios !== undefined) {
                console.log(i.nombre);
                let claveProducto = `producto-${i.id}`;
                localStorage.setItem(claveProducto, JSON.stringify(i));

                Swal.fire({
                    icon: 'success',
                    title: 'Articulo agregado',
                    text: `${i.nombre} - $${i.precio}`,
                });
            } else {
                //No registrado.
                Swal.fire({
                    icon: 'error',
                    title: 'No puede realizar esta accion',
                    text: `Debe registrarse para guardar productos en el carrito.`,
                });
            }
        });
    });
};
pedirProductos();



