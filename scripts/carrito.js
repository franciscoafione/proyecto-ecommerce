let seccionCarrito = document.getElementById("seccionCarrito");

    // Recorre todas las claves del localStorage
    for (let i = 0; i < localStorage.length; i++) {
        let claveProducto = localStorage.key(i);
        let productoGuardado = JSON.parse(localStorage.getItem(claveProducto));

        // Crea una tarjeta para cada producto guardado en el carrito
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