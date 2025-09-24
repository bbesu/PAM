var map = L.map('map').setView([-23.522941,-46.475844], 30); //serve pra redefinir o nome map para qualquer nome
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