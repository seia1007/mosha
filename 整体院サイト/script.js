// メイン画像カルーセル
$(document).ready(function () {
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
    arrows: false
  });
});
