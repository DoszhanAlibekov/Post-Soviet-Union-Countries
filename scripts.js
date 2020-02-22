// this is my mapboxGL token
// the base style includes data provided by mapbox, this links the requests to my account
mapboxgl.accessToken = 'pk.eyJ1IjoiY3dob25nLXFyaSIsImEiOiJjazZncWRkZGowb3kyM25vZXkwbms2cW0xIn0.lbwola6y7YDdaKLMdjif1g';
// we want to return to this point and zoom level after the user interacts
// with the map, so store them in variables
var initialCenterPoint = [54.673831, 53.701172]
var initialZoom = 1

// create an object to hold the initialization options for a mapboxGL map
var initOptions = {
  container: 'map-container', // put the map in this container
  style: 'mapbox://styles/mapbox/light-v10', // use this basemap
  center: initialCenterPoint, // initial view center
  zoom: initialZoom, // initial view zoom level (0-18)
}
// create the new map
var map = new mapboxgl.Map(initOptions);

// add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

// event listeners for the fly to buttons
$('#Russia').on('click', function() {
  var RussiaLngLat = [96.394043, 61.918271]
  map.flyTo({
    center: RussiaLngLat,
    zoom: 3
  })
})

$('#Estonia').on('click', function() {
  var EstoniaLngLat = [25.738220, 58.772472]
  map.flyTo({
    center: EstoniaLngLat,
    zoom: 7
  })
})

$('#Latvia').on('click', function() {
  var LatviaLngLat = [24.953821,56.956957]
  map.flyTo({
    center: LatviaLngLat,
    zoom: 7
  })
})

$('#Lithuania').on('click', function() {
  var LithuaniaLngLat = [24.741956, 55.475740]
  map.flyTo({
    center: LithuaniaLngLat,
    zoom: 7
  })
})

$('#Kazakhstan').on('click', function() {
  var KazakhstanLngLat = [67.741699, 48.327039]
  map.flyTo({
    center: KazakhstanLngLat,
    zoom: 4
  })
})

$('#Kyrgyzstan').on('click', function() {
  var KyrgyzstanLngLat = [74.544983,41.459195]
  map.flyTo({
    center: KyrgyzstanLngLat,
    zoom: 6
  })
})

$('#Tajikistan').on('click', function() {
  var TajikistanLngLat = [71.076050, 38.861098]
  map.flyTo({
    center: TajikistanLngLat,
    zoom: 6
  })
})

$('#Turkmenistan').on('click', function() {
  var  TurkmenistanLngLat = [59.397583, 39.151363]
  map.flyTo({
    center:  TurkmenistanLngLat,
    zoom: 6
  })
})

$('#Uzbekistan').on('click', function() {
  var UzbekistanLngLat = [62.0840315, 41.293847]
  map.flyTo({
    center:  UzbekistanLngLat,
    zoom: 5
  })
})

$('#Belarus').on('click', function() {
  var BelarusLngLat = [28.075562, 53.527248]
  map.flyTo({
    center:  BelarusLngLat,
    zoom: 6
  })
})

$('#Moldova').on('click', function() {
  var MoldovaLngLat = [28.594666, 47.189712]
  map.flyTo({
    center: MoldovaLngLat,
    zoom: 6
  })
})

$('#Armenia').on('click', function() {
  var  ArmeniaLngLat = [44.655304, 40.605612]
  map.flyTo({
    center:  ArmeniaLngLat,
    zoom: 7
  })
})

$('#Azerbaijan').on('click', function() {
  var AzerbaijanLngLat = [47.710876, 40.413496]
  map.flyTo({
    center: AzerbaijanLngLat,
    zoom: 6
  })
})

$('#Georgia').on('click', function() {
  var GeorgiaLngLat = [43.525085, 42.155259]
  map.flyTo({
    center: GeorgiaLngLat,
    zoom: 7
  })
})

$('#Ukraine').on('click', function() {
  var UkraineLngLat = [31.283569, 49.325122]
  map.flyTo({
    center: UkraineLngLat,
    zoom: 5
  })
})

// iterate over each object in studentData
Countries.forEach(function(Country) {
  // for each object in the studentData, add a marker to the map with a popup
  new mapboxgl.Marker()
    .setLngLat([Country.longitude, Country.latitute])
    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
     .setHTML(`${Country.name} left the Soviet Union on ${Country.Independence}`))
    .addTo(map);
})
// new mapboxgl.Marker()
//   .setLngLat([64.6911862, 65.3088017])
//   .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
//    .setHTML('A date when this country left Soviet Union will be available soon'))
//   .addTo(map);
