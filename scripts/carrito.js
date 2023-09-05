let seccionCarrito = document.getElementById("seccionCarrito");

    for (let i = 0; i < localStorage.length; i++) {
        let claveProducto = localStorage.key(i);
        let productoGuardado = JSON.parse(localStorage.getItem(claveProducto));

        let tarjetaCarrito = document.createElement("div");
        tarjetaCarrito.innerHTML = `
            <img src="../img/eq.jpg" class="imagen">
            <div class="textoTarjeta">
                <div>
                    <h2> ${productoGuardado.nombre}</h2>
                    <p>id: ${productoGuardado.id} - $ ${productoGuardado.precio}</p>
                </div>

                <div>
                    <button id="boton-${productoGuardado.id}">Quitar del carrito</button>
                </div>
            </div>
        `;

        seccionCarrito.append(tarjetaCarrito);
    }

    let limpiarCarrito = document.getElementById("limpiarCarrito");
    limpiarCarrito.addEventListener("click", () => {
        localStorage.clear();
        location.reload();
    });

    if(seccionCarrito.innerHTML == ""){
        let mensajeCarrito = document.createElement("div");
        // mensajeCarrito.innerHTML = `
        //     <h2 id="mensajeCarrito">El carrito está vacio.</h2>
        // `;
        // seccionCarrito.append(mensajeCarrito);
        console.log("Carrito vacio");
    };