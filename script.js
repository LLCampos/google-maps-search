initMap = function(latitude, longitude) {

    var myCenter = {lat: latitude, lng: longitude};

    map = new google.maps.Map(document.getElementById('google-maps'), {
        center: myCenter,
        zoom: 7,
    });

    marker = new google.maps.Marker({
        position: myCenter,
        map: map,
    });
};

var showInfoWindowOnClick = function(message) {

    var infowindow = new google.maps.InfoWindow({
        content: message,
    });

    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
};


$(function() {

$('form').submit(function(event) {

    var latitude = Number($('#latitude').val());
    var longitude = Number($('#longitude').val());
    var message = $('#message').val();

    initMap(latitude, longitude);
    showInfoWindowOnClick(message);

    event.preventDefault();

});


});
