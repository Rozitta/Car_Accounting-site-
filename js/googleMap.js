function initMap() {

    var element = document.getElementById('map');
    var options = {
        zoom: 16,
        center: {
            lat: 55.793151,
            lng: 37.388749
        }, //координаты предприятия

        styles: [{
                "featureType": "all",
                "elementType": "labels",
                "stylers": [{
                        "visibility": "on"
                    },
                    {
                        "color": "#474749"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [{
                        "visibility": "on" //элементы на карте включены 
                    },
                    {
                        "color": "#000000" //цвет этих элементов 
                    },
                    {
                        "weight": 90
                    },
                    {
                        "lightness": 28
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text",
                "stylers": [{
                        "visibility": "on" //элементы на карте включены 
                    },
                    {
                        "color": "#000000" //цвет этих элементов 
                    },
                    {
                        "weight": 0.9
                    },
                    {
                        "lightness": 15
                    }
                ]
            },

            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [{
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [{
                        "color": "#474849"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            },

            {
                "featureType": "landscape", //ландшафт
                "elementType": "geometry",
                "stylers": [{
                        "color": "#48484a"
                    },
                    // {
                    //     "lightness": 5
                    // }
                ]
            },

            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                        "color": "#525253"
                    },
                    {
                        "lightness": -3
                    }
                ]
            },
            {
                "featureType": "road", //название дорог
                "elementType": "labels.text",
                "stylers": [{
                        "visibility": "on"
                    },
                    {
                        "color": "#343435"
                    },
                    {
                        "lightness": -24
                    }
                ]
            },
            {
                "featureType": "road.highway", //выбирает шоссе 
                "elementType": "geometry.fill",
                "stylers": [{
                        "color": "#313134"
                    },
                    {
                        "lightness": 14
                    }
                ]
            },
            {
                "featureType": "road.highway", //выбирает шоссе
                "elementType": "geometry.stroke",
                "stylers": [{
                        "color": "#2d2d30"
                    },
                    {
                        "lightness": -2
                    },
                    // {
                    //     "weight": -5
                    // }
                ]
            },
            {
                "featureType": "road.arterial", //выбирает большие дороги
                "elementType": "geometry",
                "stylers": [{
                        "color": "#424345"
                    },
                    {
                        "lightness": 15
                    }
                ]
            },
            {
                "featureType": "road.local", //выбирает местные дороги
                "elementType": "geometry",
                "stylers": [{
                        "color": "#424345"
                    },
                    {
                        "lightness": 15
                    }
                ]
            },
            {
                "featureType": "transit", //переход
                "elementType": "geometry",
                "stylers": [{
                        "color": "#000000"
                    },
                    {
                        "lightness": 24
                    }
                ]
            },
            {
                "featureType": "water", //вода
                "elementType": "geometry",
                "stylers": [{
                        "color": "#424345"
                    },
                    {
                        "lightness": 7
                    }
                ]
            }
        ]
    };
    var myMap = new google.maps.Map(element, options);


    addMarker({
        coordinates: {
            lat: 55.793151,
            lng: 37.388749
        },
        image: './img/marker.png',
        //info: 'bla bla bla'
    });

    function addMarker(properties) {
        var marker = new google.maps.Marker({
            position: properties.coordinates,
            map: myMap,
            icon: properties.image
        });
        if (properties.info) {
            // устанавливаем информационное окошко
            // 1 инициализируем окошко
            var InfoWindow = new google.maps.InfoWindow({
                content: properties.info
            });
            // говорим то чтобы она появилась и указываем карту и координаты(где нужно чтобы это окошко появилось)
            marker.addListener('click', function () {
                InfoWindow.open(myMap, marker);
            });
        }
    }
}