var app = angular.module('helloWorld', []);
app.controller('mapController', function ($scope){
    var mapConfig = {
        zoom: 1,
        center: {lat: 40.0000, lng: -98.0000},
    }

    $scope.map = new google.maps.Map(document.getElementById('map'), mapConfig);

    $scope.marker;

    var createMarker = function(info) {
        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.city
        });
        $scope.marker = marker;  
    }

    var chicago = {
        city : 'Chicago',
        lat : 41.8819,
        long : -87.6278
    }

    createMarker(chicago);

});