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

  