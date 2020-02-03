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

  map.geoObjects.add(mapMark);
});
