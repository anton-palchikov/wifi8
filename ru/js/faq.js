$(window).on('load', function () {

    $('#preloader').fadeOut();

    setTimeout(function () {

        $('.section__content--faq .section__faq').animate({
            opacity: 1,
        }, 1000);

        $('.section__content--faq .section__title').animate({
            left: '0',
            opacity: .4
        }, 1000);

        $('.navbar').animate({
            opacity: 1
        }, 1000);

    }, 400);


    var item = document.getElementById('company');

    if ($(window).width() >= 576) {
        if (item != null) {
            var top = item.getBoundingClientRect().top;
            if (top <= 0) {
                $('.btn__pulse--fixed').fadeIn(200);
            } else {
                $('.btn__pulse--fixed').fadeOut(200);
            }
        }
    }

});

$(window).scroll(function () {


    var scroll = $(window).scrollTop();
    var body = $('body').height();
    var body_ = Math.round(body) / 100;

    $('.body__bg').css({
        'top': -(scroll / body_) + '%'
    });


    if (scroll < $(window).height()) {
        $('.header__earth').css({

            top: (($('.header').height() - scroll) / $('.header').height() * 100 - 55).toFixed(2) + 'vh'

        });
    }

    if (scroll >= 20) {
        $('#navigation').addClass('fixed');

    } else {
        $('#navigation').removeClass('fixed');
    }

});



$.ajax({
    url: "/ru/faq.json",
    type: "GET",
    cache: false,
    beforeSend: function () {


    },

    success: function (response) {

        $.each(response, function (i, val) {
            if (i != 'main') {
                $('#accordion_faq--full').append('<div class="faq__title">' + i + '<div/>');
            }
            $.each(val, function (ii, v) {

                var collapsed, show;

                if (i == 'main' && ii == 0) {
                    collapsed = '';
                } else {
                    collapsed = 'collapsed';
                }

                if (i == 'main' && ii == 0) {
                    show = 'show';
                } else {
                    show = '';
                }

                if (i != 'main') {
                    $("#accordion_faq--full").append(
                        '<div class="card">' +
                        '<div class="card-header" id="headingOne' + i + '_' + ii + '">' +

                        '<button class="btn btn-link ' + collapsed + '" data-toggle="collapse" data-target="#collapseOne' + i + '_' + ii + '" aria-expanded="true" aria-controls="collapseOne' + i + '_' + ii + '">' + v.question + '<span></span></button>' +

                        '</div>' +

                        '<div id="collapseOne' + i + '_' + ii + '" class="collapse ' + show + '" aria-labelledby="headingOne' + i + '_' + ii + '" data-parent="#accordion_faq--full">' +
                        '<div class="card-body">' + v.answer + '</div>' +
                        '</div>' +
                        '</div>'
                    );
                }
            });
        });


    },
    error: function (response) {
        // console.log(response);
    }

});