// function initMap() {
//     const berlin = {
//         center: {lat: 52.5200, lng: 13.4050},
//         zoom: 8
//     }
//     const map = new google.map.Map(document.getElementById("map"), berlin);
// }


// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}