let sectionProductos = document.getElementById('productos');
let api = 'https://fakestoreapi.in/api/products?limit=20'

class Producto {
    constructor(){}
    mostrarProducto(producto){
        let divProducto = document.createElement('div');
        divProducto.id = producto.id
        divProducto.classList.add('divProducto')

        let tituloProducto = document.createElement('h3');
        tituloProducto.textContent = producto.title

        let imgProducto = document.createElement('img');
        imgProducto.src = producto.image

        let precioProducto = document.createElement('span')
        precioProducto.textContent = producto.price

        
        /* let descripcionProducto = document.createElement('p');
        descripcionProducto.textContent= producto.description */

        divProducto.append(imgProducto)
        divProducto.append(tituloProducto)
    /*     divProducto.append(descripcionProducto) */
        divProducto.append(precioProducto)
        sectionProductos.append(divProducto)

    }
}

async function traerProductos(api) {
    let apiProductos = await fetch(api)
    let productosJson = await apiProductos.json()
    let productos = productosJson.products
    productos.forEach(producto => {
        let claseProducto = new Producto().mostrarProducto(producto)
    });
}

traerProductos(api)