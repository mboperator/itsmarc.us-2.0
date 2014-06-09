jQuery.fn.verticalAlign = function ()
{
    return this
            .css("padding-top",$(this).parent().height()/3 + 'px' )
};


function swapSlogan() {
  var slogans = [ "'m an aspiring Javascript developer", 
                  "'m a full-stack Ruby developer",
                  " make location aware mobile apps",
                  "'m an amateur photographer",
                  "'m a Gaucho",
                ]
  $('.slogan').text(slogans[Math.round(Math.random() * slogans.length)]);
}


$('.header .content').verticalAlign();
$(document).foundation();
window.setInterval(swapSlogan, 3000);