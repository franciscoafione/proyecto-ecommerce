const productos = [
    { id: 1, nombre: "Smooth Reverb", precio: 240 },
    { id: 2, nombre: "Grand Reverb", precio: 300 },
    { id: 3, nombre: "Platinum Reverb", precio: 90 },
    { id: 4, nombre: "Delay", precio: 100 },
    { id: 5, nombre: "Psy-Delay", precio: 110 },
    { id: 6, nombre: "Chorus", precio: 120 },
    { id: 7, nombre: "Comp", precio: 200 },
    { id: 8, nombre: "Booster", precio: 200 },
    { id: 9, nombre: "EQ", precio: 90 }
];

let seccionProductos = document.getElementById("seccionProductos");


productos.forEach(i => {
    let div = document.createElement("div");
    div.className = "productos";
    div.innerHTML = `
        <img src="./img/eq.jpg" class="imagen">
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
    boton.addEventListener("click", () =>{
        console.log(i.nombre);
        let claveProducto = `producto-${i.id}`;
        localStorage.setItem(claveProducto, JSON.stringify(i));

        Swal.fire({
            icon: 'success',
            title: 'Articulo agregado',
            text: `${i.nombre} - $${i.precio}`,
          })
          
    })
});

// ************************* Carrito ***************************
// Espera a que el DOM esté completamente cargado antes de ejecutar este código
document.addEventListener("DOMContentLoaded", function () {
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
});



/*
for(let i = 0; i < localStorage.length; i++){
    let productoGuardado = localStorage.getItem(JSON.parse(localStorage[i]));

    let tarjetaCarrito = document.createElement("div");
    tarjetaCarrito.innerHTML = `
        <img src="./img/eq.jpg" class="imagen">
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

    let seccionCarrito = getElementById("seccionCarrito");

    seccionCarrito.append(tarjetaCarrito);
}
*/
