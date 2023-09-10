let seccionCarrito = document.getElementById("seccionCarrito");

if(localStorage.length == 0){
    let mensajeCarrito = document.createElement("div");
    mensajeCarrito.innerHTML = `
             <h2 id="mensajeCarritoSinUsuario">Debe iniciar sesion para poder usar el carrito.</h2>
         `;
    seccionCarrito.append(mensajeCarrito);
} else if (localStorage.length == 1) {
    let mensajeCarrito = document.createElement("div");
    mensajeCarrito.innerHTML = `
             <h2 id="mensajeCarrito">El carrito está vacio.</h2>
         `;
    seccionCarrito.append(mensajeCarrito);

    let tituloCarrito = document.getElementById(tituloCarrito);
    tituloCarrito.className(oculto);
    console.log("Carrito vacio");
} else {


    for (let i = 1; i < localStorage.length; i++) {

        let claveProducto = localStorage.key(i);
        let productoGuardado = JSON.parse(localStorage.getItem(claveProducto)); //Para acceder a las rutas de las imagenes, hay que agregar un '.' para lograr el "../"
        
            let tarjetaCarrito = document.createElement("div");
            
            tarjetaCarrito.innerHTML = `
                <img src=".${productoGuardado.imagen}" class="imagen">
                <div class="textoTarjeta">
                    <div>
                        <h2> ${productoGuardado.nombre}</h2>
                        <p>id: ${productoGuardado.id} - $ ${productoGuardado.precio}</p>
                    </div>
    
                    <div>
                        <button id="botonRemueve-${productoGuardado.id}">Quitar del carrito</button>
                    </div>
                </div>
            `;
            tarjetaCarrito.className = "productos";

            seccionCarrito.append(tarjetaCarrito);
            let botonRemueve = document.getElementById(`botonRemueve-${productoGuardado.id}`);

            botonRemueve.addEventListener("click", () => {
                let claveProductoRemov = localStorage.key(i);
                localStorage.removeItem(claveProductoRemov);
                location.reload();
            });

    }
}

let botonVaciarCarrito = document.getElementById("vaciarCarrito");


    botonVaciarCarrito.addEventListener("click", () => {
        while(localStorage.length > 1){
            let i = 1;
            const key = localStorage.key(i);
            if (key !== 'usuarios'){
                localStorage.removeItem(key);
            }
            i++;
        }
        location.reload();
    });