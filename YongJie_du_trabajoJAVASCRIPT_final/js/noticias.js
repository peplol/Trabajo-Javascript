// Noticias cargadas desde un fichero JSON
fetch('data/noticias.json')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        var caja = document.getElementById('noticias');
        for(var i = 0; i < datos.length; i++){
            var noticia = document.createElement('article');
            noticia.innerHTML = '<h3>' + datos[i].titulo + '</h3>' +
                                '<p><b>' + datos[i].fecha + '</b></p>' +
                                '<p>' + datos[i].texto + '</p>';
            caja.appendChild(noticia);
        }
    })
    .catch(function(){
        document.getElementById('noticias').innerHTML = '<p>No se han podido cargar las noticias.</p>';
    });
