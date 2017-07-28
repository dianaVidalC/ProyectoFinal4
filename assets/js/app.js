
function initMap() {
    var latitud,longitud, firstMarker;

    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat:-12.143932,lng:-77.021874},
        zoom: 14
    });

    function ubicacion(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(markador);

        } else {
            alert('No se puede obtener la ubicaciòn');
        }
    }

    function markador(position){
        latitud  = position.coords.latitude;
        longitud = position.coords.longitude;

        firstMarker = new google.maps.Marker({
            draggable: true,
            animation: google.maps.Animation.DROP,
            position:{lat:latitud,lng:longitud},
            map:map
        });

        map.setZoom(16);
        map.setCenter({lat:latitud,lng:longitud});
    }

    var inputPartida     = document.getElementById("punto-partida");
    var inputDestino     = document.getElementById("punto-destino");

    new google.maps.places.Autocomplete(inputPartida);
    new google.maps.places.Autocomplete(inputDestino);

    var directionsService= new google.maps.DirectionsService;
    var directionsDisplay= new google.maps.DirectionsRenderer({map: map});

    function trazarRuta(){

        directionsService.route({
            origin      : inputPartida.value,
            destination : inputDestino.value,
            travelMode  : 'DRIVING'
        },function(response,status){
            if (status=='OK'){
                directionsDisplay.setDirections(response);
                firstMarker.setMap(null);
                tarifaPorRuta(response);
            }else{
                alert("No encontramos la ruta");
            }
        })
    }

    var tarifaPorRuta= function (response) {
        var precioViaje = document.getElementById("precio-viaje");
        var distancia   = response.routes[0].legs[0].distance.text.replace('km', '').replace(',', '.');
        var tarifa      = distancia * 2;
        if(tarifa > 5){

            precioViaje.append("La tarifa por este viaje es de: S/. " + parseInt(tarifa));
        }else{
            precioViaje.append("La tarifa por este viaje es de: S/. 5");
        }
    }

    $(_=>{
        ubicacion();
        $("#ruta").on("click",()=>{
            trazarRuta()
        });
    })
}
