let seccionProductos = document.getElementById("seccionProductos");

const pedirProductos = async () => {
    const Response = await fetch("./data.json");
    const data = await Response.json();

    data.forEach(i => {
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
        boton.addEventListener("click", () => {
            console.log(i.nombre);
            let claveProducto = `producto-${i.id}`;
            localStorage.setItem(claveProducto, JSON.stringify(i));

            Swal.fire({
                icon: 'success',
                title: 'Articulo agregado',
                text: `${i.nombre} - $${i.precio}`,
            });
        });
    });
};

pedirProductos();