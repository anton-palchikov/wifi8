
$(window).on('load', function () {

        $('#preloader').fadeOut();

        setTimeout(function(){

            $('.section__content--blog .section__blog').animate({
                opacity: 1,
            }, 1000);

            $('.section__content--blog .section__title').animate({
                left: '0',
                opacity: .4
            }, 1000);

            $('.navbar').animate({
                opacity: 1
            }, 1000);

            $('.btn__buy').css({
                opacity: 1
            })

        },400);

   
});

$(window).scroll(function() {


    var scroll = $(window).scrollTop();
    var body = $('body').height();
    var body_ = Math.round(body) / 100;

    $('.body__bg').css({
        'top':  - (scroll / body_ ) + '%'
    });

    if (scroll >= 20) {
        $('#navigation').addClass('fixed');
        
    } else {
        $('#navigation').removeClass('fixed');
    }

});


