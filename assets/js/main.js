$(window).scroll(function () {
  if ($(this).scrollTop() > 400) {
    $("header").addClass("sticky");
  } else {
    $("header").removeClass("sticky");
  }
});
$(window).scroll(function () {
  if ($(this).scrollTop() > 900) {
    $(".top-arrow").addClass("top-arrow-show ");
  } else {
    $(".top-arrow").removeClass("top-arrow-show ");
  }
});
$(".loan-slider").slick({
  infinite: true,
  arrows: false,
  dots: false,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".grow-background-img").slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  pauseOnHover: false,
  autoplay: true,
  autoplaySpeed: 2000,
  fade: true,
  cssEase: "linear",
});
$(".grow-background-img-2").slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  pauseOnHover: false,
  autoplay: true,
  autoplaySpeed: 2000,
  fade: true,
  cssEase: "linear",
});
$(".ambition-slider").slick({
  dots: false,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        arrows: false,
      },
    },
  ],
});
$(".investors-slider").slick({
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 5000,
  cssEase: "linear",
  pauseOnHover: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".board-directors-slick").slick({
  arrows: true,
  dots: false,
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 1000,
  speed: 800,
  cssEase: "linear",
  centerPadding: "80px",
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".resources-slider").slick({
  arrows: false,
  dots: false,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
