ymaps.ready(function () {
  var map = new ymaps.Map("map", {
      center: [59.938631, 30.322055],
      zoom: 17
  });

  var mapMark = new ymaps.GeoObject({
      geometry: {
          type: "Point",
          coordinates: [59.938631, 30.323055]
      }
  });

  var mapPlacemark = new ymaps.Placemark([59.938631, 30.322055], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map-marker.png',
    iconImageSize: [231, 190],
    iconImageOffset: [45, -188]
});

  map.geoObjects.add(mapMark);
  map.geoObjects.add(mapPlacemark);
});
