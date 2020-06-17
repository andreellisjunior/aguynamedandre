$(document).ready(() => {
  $(window).scroll(() => {

    let wScroll = $(this).scrollTop();

    $(".parallax").css({
      'transform': 'translate(0px, ' + wScroll / 2 + '%)'
    });

    if (wScroll > $(".services").offset().top - ($(window).height() / 1.4)) {
      $(".services .code").each((i) => {

        setTimeout(() => {
          $(".services .code").eq(i).addClass("is-showing");
        }, 300 * (i + 1));
      });
    }

    if(wScroll) {
      $('nav').addClass('black');
    } else {
      $('nav').removeClass('black');
    }
  });

  setTimeout(() => {
    $(".headText").addClass("ht-is-showing");
  }, 500);

  $(".menu-icon").on("click", () => {
    $("nav ul").toggleClass("showing");
  });

  
});