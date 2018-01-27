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
