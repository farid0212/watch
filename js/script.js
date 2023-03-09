$(document).ready(function () {
  $(".carousel__intel").slick({
    speed: 700,
    variableWidth: true,
    prevArrow:
      '<button type="button" class="slick-prev"><div><img src="img/l.svg" alt="kar_1" /></button>',
    nextArrow:
      '<button type="button" class="slick-next"><div><img src="img/r.svg" alt="kar_1" /></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
