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

//Слайдер в блоке с отзывами
var slideNumber = 1;
showDivs(slideNumber);

function plusDivs(n) {
  showDivs(slideNumber += n);
}

function currentDiv(n) {
  showDivs(slideNumber = n);
}

function showDivs(n) {
  var i;
  var slides = document.getElementsByClassName("slider__item");
  var toggles = document.getElementsByClassName("slider__toggle");
  if (n > slides.length) {slideNumber = 1}
  if (n < 1) {slideNumber = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < toggles.length; i++) {
    toggles[i].className = toggles[i].className.replace(" slider__toggle--active", "");
  }
  slides[slideNumber-1].style.display = "flex";
  toggles[slideNumber-1].className += " slider__toggle--active";
}

//Слайдер в блоке с тарифами
if (document.querySelector(".price-list")) {
  var table = document.querySelector(".price-list__table");
  var toggleBase = document.querySelector(".price-list__toggle--base");
  var toggleStd = document.querySelector(".price-list__toggle--std");
  var toggleUnlim = document.querySelector(".price-list__toggle--unlim");

  toggleBase.addEventListener("click", function (evt) {
    var toggleActive = document.querySelector(".price-list__toggle--active");
    toggleActive.classList.remove("price-list__toggle--active");
    toggleBase.classList.add("price-list__toggle--active");
    table.classList.remove("price-list__table--translate-33");
    table.classList.remove("price-list__table--translate-66");
    table.classList.add("price-list__table--translate-0");
  });

  toggleStd.addEventListener("click", function (evt) {
    var toggleActive = document.querySelector(".price-list__toggle--active");
    toggleActive.classList.remove("price-list__toggle--active");
    toggleStd.classList.add("price-list__toggle--active");
    table.classList.remove("price-list__table--translate-0");
    table.classList.remove("price-list__table--translate-66");
    table.classList.add("price-list__table--translate-33");
  });

  toggleUnlim.addEventListener("click", function (evt) {
    var toggleActive = document.querySelector(".price-list__toggle--active");
    toggleActive.classList.remove("price-list__toggle--active");
    toggleUnlim.classList.add("price-list__toggle--active");
    table.classList.remove("price-list__table--translate-0");
    table.classList.remove("price-list__table--translate-33");
    table.classList.add("price-list__table--translate-66");
  });
}
