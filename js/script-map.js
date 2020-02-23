ymaps.ready(function () {
  var map = new ymaps.Map("map", {
      center: [59.938931, 30.322055],
      zoom: 17,
      controls: ['zoomControl']
  });

  var mapPlacemark = new ymaps.Placemark([59.938631, 30.323155], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map-marker.png',
    iconImageSize: [155, 190],
    iconImageOffset: [-50, -190]
});

  map.geoObjects.add(mapPlacemark);
});
