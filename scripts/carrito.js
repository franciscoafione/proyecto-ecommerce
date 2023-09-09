let seccionCarrito = document.getElementById("seccionCarrito");

if (localStorage.length <= 1) {
    let mensajeCarrito = document.createElement("div");
    mensajeCarrito.innerHTML = `
             <h2 id="mensajeCarrito">El carrito está vacio.</h2>
         `;
    seccionCarrito.append(mensajeCarrito);
    console.log("Carrito vacio");
} else {
    for (let i = 1; i < localStorage.length; i++) {

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
                        <button id="botonRemueve-${productoGuardado.id}">Quitar del carrito</button>
                    </div>
                </div>
            `;

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