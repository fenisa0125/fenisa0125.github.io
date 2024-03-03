

// jquery
$(document).ready(function() {
    $(window).scroll( function(){
        $('.fadein').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight()/3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({
                    opacity:'1',
                    top:'0px',
                },600);
            }
            
        }); 
    });
});

$(function() {
    /*按下*/
    $('#gotop').click(function(){
        $('html,body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });
    
    /*出現 */
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 600){
            $('#gotop').fadeIn();
        } else {
            $('#gotop').fadeOut();
        }
    });
});

// lottie
LottieInteractivity.create({
    player:'#clickPlayer',
    mode:"chain",
    actions: [
        {
            state: 'autoplay',
            forceFlag: true,
            transition: 'click',
            frames: [0, 81]
            
        },
        {
            state: 'autoplay',
            reset: true,
            transition: 'click',
            frames: [82, 112]
        },
        {
            state: 'autoplay',
            reset: true,
            transition: 'onComplete',
            frames: [112, 121]
        }
    ]
});


  