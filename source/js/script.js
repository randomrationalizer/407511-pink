//Открытие-закрытие главного меню на мобильной и планшетной версии
var navigation = document.querySelector('.navigation');
var hamburger = document.querySelector('.hamburger');

navigation.classList.remove('navigation--nojs');

hamburger.addEventListener('click', function() {
  if (navigation.classList.contains('navigation--closed')) {
    navigation.classList.remove('navigation--closed');
    navigation.classList.add('navigation--opened');
  } else {
    navigation.classList.add('navigation--closed');
    navigation.classList.remove('navigation--opened');
  }
});

//Настройка карты на Google Maps
if (document.querySelector(".map")) {
  function initMap() {
    var pink = {lat:59.938771, lng:30.323026};
    var map = new google.maps.Map(document.querySelector(".map__block"), {
      zoom: 17,
      center: {lat:59.939036, lng:30.323026},
      disableDefaultUI: true
    });
    var pinkIcon = {
      url: "img/pic-map-marker.svg",
      scaledSize: new google.maps.Size(36, 36)
    };
    var marker = new google.maps.Marker({
      position: pink,
      map: map,
      optimized: false,
      icon: pinkIcon
    });
  }
}
