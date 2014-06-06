jQuery.fn.verticalAlign = function ()
{
    return this
            .css("padding-top",$(this).parent().height()/3 + 'px' )
};


function swapSlogan() {
  var slogans = [ "'m an aspiring Javascript developer", 
                  "'m a full-stack Ruby developer",
                  "'m a fledgling iOS developer",
                  "'m an amateur photographer",
                  "'m a Gaucho",
                ]
  $('.slogan').text(slogans[Math.round(Math.random() * slogans.length)]);
}


$('.header .content').verticalAlign();
$(document).foundation();
window.setInterval(swapSlogan, 3000);
$('.slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  useCSS: true,
  dots: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '2px',
        slidesToShow: 2,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '2px',
        slidesToShow: 1,
        dots: true
      }
    }
  ]
});