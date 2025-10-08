let map = L.map('map').setView([0,0], 13); //serve pra redefinir o nome map para qualquer nome
//.setview é um funcao
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// -23.514733, -406.433802

function FindMe(){
if(!navigator.geolocation){
    alert('atualize o navegador')
    return;
}

navigator.geolocation.getCurrentPosition((location)=>{
    console.log(location);
})
}

//whatchposition - apw para localização em tempo real

let userMarker = null;
let userCircle = null;

function success(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const accuracy = position.coords.accuracy;
    const Latlon = [lat,lon];
    
    if(userMarker){
        map.setView(Latlon,10)
    }
    if(userMarker){userMarker.setLatlng(Latlon)
    } else{
    userMarker= L.marker(Latlon)
        .addTo(map)
        .bindPopup('vc esta aq')
        .openPopup();
    }
    if (userCircle){
        userCircle.setLatlng(Latlon);setRadius(accuracy)
    } else {userCircle = L.circle(Latlon, {radius: accuracy}).addTo(map)}

}

function error(){}

if (navigator.geolocation){
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    }
    navigator.geolocation.watchPosition(success,error, options)
} else{
    console.error('seu navegador não suporta geolocalização')
}