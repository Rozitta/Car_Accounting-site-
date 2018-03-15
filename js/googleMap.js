
    function initMap() {
        if($("#map").length != 0) {
        var element = document.getElementById('map');
        var options = {
            zoom: 16,
            center: {
                lat: 55.793151,
                lng: 37.388749
            }, //координаты предприятия

            // styles: [{
            //         "featureType": "all",
            //         "elementType": "labels",
            //         "stylers": [{
            //                 "visibility": "on"
            //             },
            //             {
            //                 "color": "#474749"
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "all",
            //         "elementType": "labels.icon",
            //         "stylers": [{
            //                 "visibility": "on" //элементы на карте включены 
            //             },
            //             {
            //                 "color": "#000000" //цвет этих элементов 
            //             },
            //             {
            //                 "weight": 90
            //             },
            //             {
            //                 "lightness": 28
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "all",
            //         "elementType": "labels.text",
            //         "stylers": [{
            //                 "visibility": "on" //элементы на карте включены 
            //             },
            //             {
            //                 "color": "#000000" //цвет этих элементов 
            //             },
            //             {
            //                 "weight": 0.9
            //             },
            //             {
            //                 "lightness": 15
            //             }
            //         ]
            //     },

            //     {
            //         "featureType": "administrative",
            //         "elementType": "geometry.fill",
            //         "stylers": [{
            //                 "color": "#000000"
            //             },
            //             {
            //                 "lightness": 20
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "administrative",
            //         "elementType": "geometry.stroke",
            //         "stylers": [{
            //                 "color": "#474849"
            //             },
            //             {
            //                 "lightness": 17
            //             },
            //             {
            //                 "weight": 1.2
            //             }
            //         ]
            //     },

            //     {
            //         "featureType": "landscape", //ландшафт
            //         "elementType": "geometry",
            //         "stylers": [{
            //                 "color": "#48484a"
            //             },
            //             // {
            //             //     "lightness": 5
            //             // }
            //         ]
            //     },

            //     {
            //         "featureType": "poi",
            //         "elementType": "geometry",
            //         "stylers": [{
            //                 "color": "#525253"
            //             },
            //             {
            //                 "lightness": -3
            //             }
            //         ]
            //     },
            //     // {
            //     //     "featureType": "road", //название дорог
            //     //     "elementType": "labels.text",
            //     //     "stylers": [{
            //     //             "visibility": "on"
            //     //         },
            //     //         {
            //     //             "color": "#343435"
            //     //         },
            //     //         {
            //     //             "lightness": -24
            //     //         }
            //     //     ]
            //     // },

            //          {
            //         "featureType": "road",
            //         "elementType": "labels.text.fill",
            //         "stylers": [
            //             {
            //                 "color": "#ffffff"
            //             },
            //             {
            //                 "visibility": "on"
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "road",
            //         "elementType": "labels.text.stroke",
            //         "stylers": [
            //             {
            //                 "visibility": "on"
            //             },
            //             {
            //                 "color": "#e5c163"
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "road.highway",
            //         "elementType": "labels.text.fill",
            //         "stylers": [
            //             {
            //                 "color": "#ffffff"
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "road.highway",
            //         "elementType": "labels.text.stroke",
            //         "stylers": [
            //             {
            //                 "color": "#e5c163"
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "road.highway", //выбирает шоссе 
            //         "elementType": "geometry.fill",
            //         "stylers": [{
            //                 "color": "#313134"
            //             },
            //             {
            //                 "lightness": 14
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "road.highway", //выбирает шоссе
            //         "elementType": "geometry.stroke",
            //         "stylers": [{
            //                 "color": "#2d2d30"
            //             },
            //             {
            //                 "lightness": -2
            //             },
            //             // {
            //             //     "weight": -5
            //             // }
            //         ]
            //     },
            //     {
            //         "featureType": "road.arterial", //выбирает большие дороги
            //         "elementType": "geometry",
            //         "stylers": [{
            //                 "color": "#424345"
            //             },
            //             {
            //                 "lightness": 15
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "road.local", //выбирает местные дороги
            //         "elementType": "geometry",
            //         "stylers": [{
            //                 "color": "#424345"
            //             },
            //             {
            //                 "lightness": 15
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "transit", //переход
            //         "elementType": "geometry",
            //         "stylers": [{
            //                 "color": "#000000"
            //             },
            //             {
            //                 "lightness": 24
            //             }
            //         ]
            //     },
            // ]
          
            styles: [
                {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#a7a7a7"
                        }
                    ]
                },
               
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#737373"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#efefef"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#dadada"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#696969"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#b3b3b3"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#d6d6d6"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#ffffff"
                        },
                        {
                            "weight": 1.8
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#d7d7d7"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#808080"
                        },
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#d3d3d3"
                        }
                    ]
                },
                // {
                //             "featureType": "all",
                //             "elementType": "labels.icon",
                //             "stylers": [{
                //                     "visibility": "on" //элементы на карте включены 
                //                 },
                //                 {
                //                     "color": "#000000" //цвет этих элементов 
                //                 },
                //                 {
                //                     "weight": 90
                //                 },
                //                 {
                //                     "lightness": 28
                //                 }
                //             ]
                //         },
         
        
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
}
