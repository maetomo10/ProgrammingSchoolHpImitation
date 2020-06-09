$(function() {
  //アコーディオン
  $("#acordion dt").on("click", function() {
    $(this).next().slideToggle();
    $(this).toggleClass("ac")
  });
  //ページ内遷移
  $('a[href^=#]').click(function() {
    var speed = 700;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
 });
 //トップボタン
 $(".top-button").hide();
 $(window).scroll(function () {
     if ($(this).scrollTop() > 100) { 
      $(".top-button").fadeIn();
     } else {
      $(".top-button").fadeOut();
     }
    });
});