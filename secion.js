var width = $(window).width();
var height = $(window).height();
$('.jarallax').css({'height':height});

/*-----------------------------------------------------------------
    Dropdown nav
-----------------------------------------------------------------*/

(function($) {
  $(function() {
    // Toggle open and close nav styles on click
    $('.nav-mobile').click(function() {
      $('.main-header .main-nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('.nav-mobile').on('click', function() {
      this.classList.toggle('-on');
    });
  }); 
})(jQuery);
        
/*-----------------------------------------------------------------
    Scroll dowm arrow
-----------------------------------------------------------------*/

$(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('.main').offset().top }, 1000);
      return false;
    });
  });

/*-----------------------------------------------------------------
    Fixed top header
-----------------------------------------------------------------*/

var handleMatchMedia = function(mediaQuery) {
    if (mediaQuery.matches) {
      $(window).on('scroll', function() {
            if ($(window).scrollTop() > 100) {
                $('.main-header').addClass('fixed-top animated slideInDown');
            } else {
                $('.main-header').removeClass('fixed-top animated slideInDown');
            }
        });
        
    } 
},
mql = window.matchMedia('all and (min-width: 767px)');
handleMatchMedia(mql);
mql.addListener(handleMatchMedia);

/*-----------------------------------------------------------------
    Menu mobile
-----------------------------------------------------------------*/

$( document ).ready(function() {

    var burger = document.querySelector('.nav-mobile'),
        header = document.querySelector('.main-header');
    
    burger.onclick = function() {
        header.classList.toggle('menu-opened');
    }

});

     


/* init Jarallax */
$('.jarallax').jarallax({
speed: 0.5,
})

AOS.init({
  duration: 1200,
})
/* init ScrollIt */

  $.scrollIt({ 
upKey: 38,             // key code to navigate to the next section
  downKey: 40,           // key code to navigate to the previous section
  easing: 'linear',      // the easing function for animation
  scrollTime: 1000,       // how long (in ms) the animation takes
  activeClass: 'active', // class given to the active nav element
  onPageChange: null,    // function(pageIndex) that is called when page is changed
  topOffset: 0           // offste (in px) for fixed top navigation
});