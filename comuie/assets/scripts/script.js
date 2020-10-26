$(function(){
    $('#js-buttonHamburger').click(function(){
        $('body').toggleClass('is-drawerActive');
        if($(this).attr('aria-expanded') == 'false'){
           $(this).attr('aria-expanded', true);
        }
        else{
            $(this).attr('aria-expanded',false);
        }
    });
});

var $mv = $('.l-mv')
$(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > $mv.outerHeight(true)) {
        $('.l-header').addClass('u-fixed');
      } else {
        $('.l-header').removeClass('u-fixed');
      }
    });
  });
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > $mv.outerHeight(true)) {
        $('.l-cp').addClass('u-fixed--cp');
      } else {
        $('.l-cp').removeClass('u-fixed--cp');
      }
    });
  });

  function checkBreakPoint() {
    w = $(window).width();
    if (w <= 1000) {
      // スマホ向け（767px以下のとき）
      $('.slider').slick({
        centerMode: true,
        centerPadding: '20%'
      });
    } else {
      // PC向け
      $('.slider').slick('unslick');
    }
  }
  // ウインドウがリサイズする度にチェック
  $(window).resize(function(){
    checkBreakPoint();
  });
  // 初回チェック
  checkBreakPoint();