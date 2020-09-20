var pointsTX = [31.9686, -99.9018]
var pointsTN = [35.5175, -86.5804]
var mymap = L.map('mapid').setView([33,-92], 5);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 5,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidmEyNzYiLCJhIjoiY2tmYWc0MGJzMHZrNDJwcnF4dHY3cXVxdyJ9.5dVx8bKl6CIb7YcS-wxwgw'
}).addTo(mymap);


//mymap.setView(points, 13);
L.marker(pointsTX).addTo(mymap).bindPopup('Office II');
L.marker(pointsTN).addTo(mymap).bindPopup('Main Office');


