var swiper = new swiper (".mySwiper-1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swier-button-prev"
    }

});

var swiper = new swiper (".mySwiper-2", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swier-button-prev"
    },
    breakpoints : {
        0: {
            slidesPerView: 1
        },
        520: {
            slidesPerView: 2
        },
        950: {
            slidesPerView: 3
        }
    }

});



//Carrito

const carrito = document.getElementById('carrito');
const elemetos1 = document.getElementById('lista-1');
const elemetos2 = document.getElementById('lista-2');
const elemetos3 = document.getElementById('lista-3');
const lista = document.getElementById('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners() {
    elemetos1.addEventListener('click', comprarElemento);
    elemetos2.addEventListener('click', comprarElemento);
    elemetos3.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);

    vaciarCarritoBtn.addEventListener('click', vaciarcarrito);

}

function comprarElemento(e) {
    e.preventDeFault();
    if(e.target.classList.container('agregar-carrito')) {
        const elemento = e.target.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento) {
    const infoElemento = {
        imagen: elemento.quarySelector('img').src,
        titulo: elemento.quarySelector('h3').textContent,
        precio: elemento.quarySelector('.precio').textContent,
        id: elemento.quarySelector('#').getAtribute('data-ic')
    }

    insertarCarrito(infoElemento);

 }

 function insertarCarrito(elemento) {

    const row = document.createElement('tr');
    row.innerHTML = `
    <td>
        <img src"${elemento.imagen}" width100 >
    </td>
    
    <td>
        ${elemento.titulo}
    </td>
    <td>
        ${elemento.precio}
    </td>
    <td>
        <a herf="#" class="borrar" date-id="${elemento.id}">X</a>
    </td>   
    `;

    lista.appendChild(row);
    
 }

 function eliminarElemento(e) {
    e.preventDeFault();
    let  elemento,
         elementoId;

    if(e.target.classList.contains('borrar')) {
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.quarySelector('a').getAtribute('data-id');
    }
 }

 function vaciarCarrito() {
    while(lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false;
    
 }