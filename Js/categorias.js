const apiCategorias = 'https://fakestoreapi.in/api/products/category'
let headerNav = document.getElementById('headerNav');


//Funcion que hace el llamado a la api
async function traerCategorias(apiCategorias) {
    let categorias = await fetch(apiCategorias)
    let categoriasJson = await categorias.json()
    console.log(categoriasJson.categories);
    categoriasJson.categories.forEach(categoria => {
    let objetoCategoria = new CategoriasNavBar()
    objetoCategoria.templateNavBar(categoria)
    });
}

//Llamando la funcion
traerCategorias(apiCategorias)


//template para mostrar las categorias en el Header Nav
class CategoriasNavBar {
    constructor(){}
    templateNavBar(categoria){
        let h3Categoria = document.createElement('h4');
        h3Categoria.textContent = categoria
        headerNav.append(h3Categoria)
    }
}
