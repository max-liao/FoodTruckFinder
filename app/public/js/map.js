// var requireFromUrl = require('require-from-url/sync');
//Google Maps initialization
async function getAPIkey() {
    var data = await $.ajax("/api/google");
    return data;
}

var atlanta = { lat: 33.748995, lng: -84.387982 };

// Create an array used to label the markers.
var labels = [];
for (let l = 1; l < 100; l++) {
    labels.push(String(l));
}

// Array to populate with marker location info
var locations = [];

//POPULATE LOCATIONS FROM SQL DB
async function init() {
    // Address Data
    var data = await $.ajax("/locations");
    var promises = [];
    for (let i = 0; i < data.length; i++) {
        promises[i] = await mapQuery(data[i].location, i);
    };

    return promises;
}

//Display Maps
async function initMap() {
    var grabLocs = await init();
    var locations = [];

    for (i = 0; i < grabLocs.length; i++) {
        locations.push(grabLocs[i]);
    };
    // console.log(locations);

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: atlanta
    });

    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.{
    var marker = locations.map(function (data, i) {
        return new google.maps.Marker({
            position: data,
            label: labels[i % labels.length],
            // animation: google.maps.Animation.BOUNCE,
            //         // icon:"./images/food-truck.png"        
        });
    });

    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, marker,
        { maxZoom: 22, imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' })

    // console.log(markerCluster);
    clusterclick(map, markerCluster);

    // Map events
    map.addListener('click', function (event) {
        var data = {};
        console.log(event);
        data.lat = event.latLng.lat();
        data.lng = event.latLng.lng();
        // console.log("Longitude: "+ data.lng);
        // console.log("Latitidue: "+ data.lat);
        // placeMarker(map, data);
    });

    //Handles Marker Click events
    for (i = 0; i < marker.length; i++) {
        markerclick(map, marker[i], false);
    }
}

//Places a new temporary marker
function placeMarker(map, location) {
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
    var infowindow = new google.maps.InfoWindow({
        content: 'Latitude: ' + location.lat +
            '<br>Longitude: ' + location.lng
    });
    infowindow.open(map, marker);
}

//Listener for marker clicks
async function clusterclick(map, markerCluster) {
    var names = await getNames();
    // console.log(names);
    google.maps.event.addListener(markerCluster, 'clusterclick', async function (cluster) {
        // var size = cluster.getSize();
        // console.log("clustersize", size);
        var marks = cluster.getMarkers();
        // console.log("markers", marks);

        var array = [];
        for (let i = 0; i < marks.length; i++) {
            array.push(marks[i].label - 1);
        }

        var infoWindow = new google.maps.InfoWindow({
            content: "Hello World!"
        });

        var infonames = "";

        for (let i = 0; i < array.length; i++) {
            infonames += `${names[array[i]]}, `;
        }
        infonames = infonames.slice(0, -2);
        // console.log(infonames);

        if (map.getZoom() > 15) {
            infoWindow.setContent(array.length + " markers <br>" + infonames);
            infoWindow.setPosition(cluster.getCenter());
            infoWindow.open(map);
        }

        var info = [];
        for (let i = 0; i < marks.length; i++) {
            var truckobj = await getInfo("food_truck", "id", marks[i].label);
            info.push(truckobj);
        }
        // console.log(info);

        $(".truck-name").empty();
        $(".descr").empty();
        $(".location").empty();
        $(".contact").empty();
        $(".menulist").empty();

        for (let i = 0; i < marks.length; i++) {
            var GoogleAddress = info[i][0].location;
            // console.log(GoogleAddress);GIT
            $('#Mapjumbo').append(`<div class="truck-name"><h4 class="truck-name" title="Truck Name"><b><strong>\
                ${info[i][0].foodtruck_name}</b></strong></h4></div>\
                <div class="descr" title="Truck Information"> ${info[i][0].descr} </div> \
                <div class="location" title="Click for directions from your location!">\
                <a title="Click for directions from your location!"  \
                href="https://www.google.com/maps/dir/?api=1&destination=${GoogleAddress}">${info[i][0].location}</a></div>\
                <div class="contact">${info[i][0].contact}</div><hr>`
            );
        }
    });
}

//Listener for marker clicks
function markerclick(map, marker) {
    google.maps.event.addListener(marker, 'click', async function () {
        var name = await getNames();
        $('#menulist').empty();

        // console.log("NAME:", name);
        console.log(marker);
        // console.log(truckinfo);
        map.setZoom(18);
        map.setCenter(marker.getPosition());
        // console.log(marker.getPosition());
        var index = marker.label;

        var info = await getInfo("food_truck", "id", index);

        //print the truck info to maps.html
        $('.truck-name').html('<h4 class="truck-name" title="Truck Name">' + info[0].foodtruck_name + "</h4>");
        $('.descr').html(`<div title='Truck Information'>${info[0].descr}</div>`);
        $('.location').append(`<a title="Click for directions from your location!" href= "https://www.google.com/maps/dir/?api=1&destination=\
        ${info[0].location}">${info[0].location}</a>`);
        $('.contact').text(info[0].contact);
        $('.contact').append("<hr>");

        //get the menu info and add it to maps.html
        var menuinfo = await getInfo("truck_menu", "truck_id", index);
        //  console.log("menu info: " + menuinfo[0].menu_item);
        if (menuinfo.length > 1) {
            //  $("#menulist").html("<b>Menu Highlights</b><hr>");
        }
        else {
            $("#menulist").text("");
        }
        for (let i = 0; i < menuinfo.length; i++) {

            var menuitem = "<li>" + menuinfo[i].menu_item + " -- "
                + menuinfo[i].menu_description + " -- $"
                + menuinfo[i].price
                + "</li>"
            $("#menulist").append(menuitem);
        }

        console.log(name[index - 1]);
        var infowindow = new google.maps.InfoWindow({
            content: name[index - 1]//truckinfo
        });
        infowindow.open(map, marker);
    });
}

// Grabs coordinates and saves to database
async function mapQuery(addr, i) {
    const googlemapskey = await getAPIkey();
    
    var mapquery = "https://maps.googleapis.com/maps/api/geocode/json?address=" + addr + "&key=" + googlemapskey;
    var promise = await $.ajax({ url: mapquery })

    // console.log(promise);

    //Google maps api takes input -> lat, lng, address
    var latit = promise.results[0].geometry.location.lat;
    var longi = promise.results[0].geometry.location.lng;
    var coordinates = { lat: latit, lng: longi };

    // var add = response.results[0].formatted_address;
    // console.log(coordinates);
    return coordinates;
}

async function getNames() {
    var data = await $.ajax("/data", { type: "GET" });
    var TruckNames = [];

    for (let i = 0; i < data.length; i++) {
        TruckNames[i] = data[i].foodtruck_name;
    }
    return TruckNames;
}

async function getInfo(table, col, id) {
    var promise = await $.ajax("/data/" + table + "/" + col + "/" + id);
    // console.log(promise);
    return promise;
}

initMap();
