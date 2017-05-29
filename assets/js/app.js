function initMap() {

      var Lima = {lat: -12.1042, lng: -77.0299};
      var map = new google.maps.Map(document.getElementById("map"), {
          zoom: 18,
          center: Lima
      });
      var markador = new google.maps.Marker({
          position: Lima,
          map: map
      });
       var map = new google.maps.Map(document.getElementById('map'), {
         center: {lat: -34.397, lng: 150.644},
         zoom: 18
       });
       var infoWindow = new google.maps.InfoWindow({map: map});
       var markadorLaboratoria = new google.maps.Marker({
           position: map,
           map: map
       });

       // Try HTML5 geolocation.
       if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(function(position) {
           var pos = {
             lat: position.coords.latitude,
             lng: position.coords.longitude
           };

           infoWindow.setPosition(pos);
           infoWindow.setContent('Location found.');
           map.setCenter(pos);
         }, function() {
           handleLocationError(true, infoWindow, map.getCenter());
         });
       } else {
         // Browser doesn't support Geolocation
         handleLocationError(false, infoWindow, map.getCenter());
       }
     }

     function handleLocationError(browserHasGeolocation, infoWindow, pos) {
       infoWindow.setPosition(pos);
       infoWindow.setContent(browserHasGeolocation ?
                             'Error: The Geolocation service failed.' :
                             'Error: Your browser doesn\'t support geolocation.');
     }





// function initMap() {
//
//     var map = new google.maps.Map(document.getElementById("map"), {
//       center: {lat: -34.397, lng: 150.644},
//       zoom: 6,
//     });
//
//     var infoWindow = new google.maps.InfoWindow({
//       map: map
//     });
//
//
//
//     var latitud,longitud,miUbicacion;
//
//     var posicion = function(e) {
//
//         latitud = e.coords.latitude;
//         longitud = e.coords.longitude;
//
//         miUbicacion = new google.maps.Marker({
//             position: {lat:latitud, lng:longitud},
//             map: map
//         });
//         infoWindow.setPosition(posicion);
//         map.setZoom(18);
//         map.setCenter({lat:latitud, lng:longitud});
//     }
//
//     var error = function (error) {
//         alert("Tenemos un problema con encontrar tu ubicación");
//     }
//
//     function ubicacion(){
//         if(navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(posicion, error);
//         }
//       //  direccionDisplay.setDireccion("null");
//     }
//
//     window.addEventListener("load", ubicacion);
//
//     var inputPartida=document.getElementById("punto-partida");
//     var inputDestino=document.getElementById("punto-destino");
//
//     new google.maps.places.Autocomplete(inputPartida);
//     new google.maps.places.Autocomplete(inputDestino);
//
//     var directionsService= new google.maps.DirectionsService;
//     var directionsDisplay= new google.maps.DirectionsRenderer;
//
//     var tarifa=document.getElementById("tarifa");
//
//     var calculateAndDisplayRoute= function(directionsService,directionsDisplay){
//       directionsService.route({
//         origin:inputPartida.value,
//         destination:inputDestino.value,
//         travelMode: "DRIVING"
//       }, function(response,status){
//           if(status==="OK"){
//             var distancia= Number((response.routes[0].legs[0].distance.text.replace("km","")).replace(",","."));
//
//             tarifa.classList.remove("none");
//             var costo=distancia*1.75;
//
//             if (costo<4) {
//               tarifa.innerHTML="S/.4";
//             } else {
//               tarifa.innerHTML="S/." + parseInt(costo);
//             }
//
//             console.log(response.routes[0].legs[0].distance.text);
//
//             if (miUbicacion !== undefined) {
//               miUbicacion.setMap(null);
//             }
//
//             directionsDisplay.setDirections(response);
//           }else{
//               window.alert("No encontramos una ruta");
//             }
//       });
// }
//     directionsDisplay.setMap(map);
//     markador.setMap(map);
//
//     var trazarRuta = function(){
//       calculateAndDisplayRoute(directionsService,directionsDisplay);
//     };
//
//     document.getElementById("trazar-ruta").addEventListener("click", trazarRuta);
// }
