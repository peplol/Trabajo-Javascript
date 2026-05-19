// Mapa de contacto con OpenStreetMap y ruta automática
var empresa = [40.4168, -3.7038];
var mapa = L.map('mapa').setView(empresa, 13);
var rutaActual;

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'OpenStreetMap'
}).addTo(mapa);

L.marker(empresa).addTo(mapa).bindPopup('Du Web - Madrid').openPopup();

function calcularRutaAutomatica(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(posicion){
            var usuario = [posicion.coords.latitude, posicion.coords.longitude];

            L.marker(usuario).addTo(mapa).bindPopup('Tu ubicación');

            if(rutaActual){
                mapa.removeControl(rutaActual);
            }

            rutaActual = L.Routing.control({
                waypoints: [
                    L.latLng(usuario[0], usuario[1]),
                    L.latLng(empresa[0], empresa[1])
                ],
                routeWhileDragging: false,
                show: true
            }).addTo(mapa);
        }, function(){
            L.popup()
                .setLatLng(empresa)
                .setContent('No se ha podido obtener la ubicación. Revisa los permisos del navegador.')
                .openOn(mapa);
        });
    }else{
        L.popup()
            .setLatLng(empresa)
            .setContent('Este navegador no permite geolocalización.')
            .openOn(mapa);
    }
}

calcularRutaAutomatica();
