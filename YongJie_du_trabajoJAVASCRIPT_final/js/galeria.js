// Galería dinámica sencilla
var imagenes = [
    '../assets/images/proyecto1.svg',
    '../assets/images/proyecto2.svg',
    '../assets/images/proyecto3.svg',
    '../assets/images/proyecto4.svg',
    '../assets/images/proyecto5.svg',
    '../assets/images/proyecto6.svg'
];

var galeria = document.getElementById('galeria');
var visor = document.getElementById('visor');
var imagenGrande = document.getElementById('imagenGrande');
var posicion = 0;

for(var i = 0; i < imagenes.length; i++){
    var foto = document.createElement('img');
    foto.src = imagenes[i];
    foto.alt = 'Proyecto web ' + (i + 1);
    foto.width = 800;
    foto.height = 500;
    foto.setAttribute('data-posicion', i);

    foto.onclick = function(){
        posicion = Number(this.getAttribute('data-posicion'));
        imagenGrande.src = imagenes[posicion];
        visor.style.display = 'block';
    };

    galeria.appendChild(foto);
}

function cambiarImagen(cambio){
    posicion = posicion + cambio;
    if(posicion < 0){
        posicion = imagenes.length - 1;
    }
    if(posicion >= imagenes.length){
        posicion = 0;
    }
    imagenGrande.src = imagenes[posicion];
}

document.getElementById('cerrar').onclick = function(){
    visor.style.display = 'none';
};

document.getElementById('anterior').onclick = function(){
    cambiarImagen(-1);
};

document.getElementById('siguiente').onclick = function(){
    cambiarImagen(1);
};
