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



  