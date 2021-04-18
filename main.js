$(document).ready(function(){
    console.log($('.hero-slide'));
    $('.hero-slides-container').slick({
    dots: true,
    infinite: true,
    autoplay:true,
    autoplaySpeed: 2000,
    arrows: false,
    slidesToScroll: 1
    });
    $('.pojects-slider-container').slick({
        dots: true,
        infinite: true,
        autoplay:true,
        autoplaySpeed: 2000,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1
        });
  });
  function initMap() {
    let ourLocation = {
        lat: 42.661911567240736,
        lng: 21.162545989865308
    }
  let map = new google.maps.Map(document.getElementById('map'),{
    center: ourLocation,
    zoom: 10
  });

  let iconURL = 'assets/location-icon-for-map.png';
  let icon = {
      url: iconURL,
      scaledSize: new google.maps.Size(100, 100)
  };


    let marker = new google.maps.Marker({
      map: map,
      icon: icon,
      position: ourLocation
    });
}