$(document).ready(function(){
    console.log($('.hero-slide'));
    $('.slick-dots button').val('assa');
    $('.hero-slides-container').slick({
    dots: true,
    infinite: true,
    autoplay:true,
    autoplaySpeed: 2000,
    arrows: false,
    slidesToScroll: 1
    });
  });