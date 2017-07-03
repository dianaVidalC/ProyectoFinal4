   function initMap() {

    var latitud,longitud;

        var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat:-34.397,lng:150.644},
            zoom: 3
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

            var marker= new google.maps.Marker({
                position:{lat:latitud,lng:longitud},
                map:map

            })

            map.setZoom(18);
            map.setCenter({lat:latitud,lng:longitud});
        }

        var inputPartida     = document.getElementById("punto-partida");
        var inputDestino     = document.getElementById("punto-destino");

        new google.maps.places.Autocomplete(inputPartida);
        new google.maps.places.Autocomplete(inputDestino);

        var directionsService= new google.maps.DirectionsService;
        var directionsDisplay= new google.maps.DirectionsRenderer;
        
        var calcularRuta=function (directionsService,directionsDisplay) {

            directionsService.route({

                origin      : inputPartida.value,
                destination : inputDestino.value,
                travelMode  : 'DRIVING'
            },function(response,status){
                if (status=='ok'){
                    directionsDisplay.setDirections(response);
                }else{
                    alert("No encontramos la ruta");
                }
            })
            directionsDisplay.setMap(map);
        }

        var trazarRuta= function () {
            calcularRuta(directionsService,directionsDisplay);
        }

        window.addEventListener("load",ubicacion);
        document.getElementById("ruta").addEventListener("click",trazarRuta);
    }

