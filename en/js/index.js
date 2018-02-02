'use strict';


var deadline = '2018-03-16';
initializeClock('clock', deadline);
initializeClock('clock_1', deadline);
initializeClock('clock_2', deadline);

var status = 1;
var status_1 = 1;

var cookie = getCookie('subscribe');

$(window).on('load', function () {

    $('#preloader').fadeOut();

    $('.header__earth').animate({
        width: '1400px',
        height: '1400px',
        marginLeft: '-700px',
        top: '45vh',
    }, 1000);

    setTimeout(function(){

        $('.section__content--faq .section__faq').animate({
            opacity: 1,
        }, 1000);

        $('.section__content--faq .section__title').animate({
            left: 0,
            opacity: .4
        }, 1000)

        $('.header').css({
            backgroundPosition: '50% 20%',
            opacity: 1
        });

        $('.header__text').css({
            opacity: 1,
            bottom: 0,
        });

        $('.header__btn--1').css({
            opacity: 1,
            left: 0,
        });

        $('.header__btn--2').css({
            opacity: 1,
            right: 0,
        });

        $('.navbar').animate({
            opacity: 1
        }, 1000);

    },400);



    setTimeout(function(){
        $('.header__title').animate({
            opacity: .4,
            top: 0
        }, 1000);
    },500);

    setTimeout(function(){
        $('.header__title--sub').animate({
            opacity: 1,
            top: 0
        }, 1000);
    },550);

    setTimeout(function(){
        $('.countdown__title').animate({
            opacity: 1,
            top: 0
        }, 1000);
    },650);

    setTimeout(function(){
        $('.countdown__clock').animate({
            opacity: 1,
            top: 0
        }, 1000);
    },650);

    setTimeout(function(){
        $('.btn__buy').animate({
            opacity: 1,
            top: 0
        }, 1000);
    },650, function() {
        $('.border-blik').css({
            opacity: 1
        });
    });

    // SOCIAL

    setTimeout(function(){

        $('.link--1').css({
            opacity: 1,
            transform: 'scale('+1+')'
        });
    },1400);

    setTimeout(function(){
        $('.link--2').css({
            opacity: 1,
            transform: 'scale('+1+')'
        });
    },1500);

    setTimeout(function(){
        $('.link--3').css({
            opacity: 1,
            transform: 'scale('+1+')'
        });
    },1600);

    setTimeout(function(){
        $('.link--4').css({
            opacity: 1,
            transform: 'scale('+1+')'
        });
    },1700);

    setTimeout(function(){
        $('.link--5').css({
            opacity: 1,
            transform: 'scale('+1+')'
        });
    },1800);

    setTimeout(function(){
        $('.link--6').css({
            opacity: 1,
            transform: 'scale('+1+')'
        });
    },1900);


    // setTimeout(function(){
    //         $('.subscribe__overlay').fadeIn(400);
    //     },1000);


    if (cookie == null || cookie == undefined) {


        setTimeout(function(){
            $('.subscribe__overlay').fadeIn(400);
        },5000);

        setCookie('subscribe', '1', {expires:0});

    }

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

    $(".navbar-desktop, .navbar-collapse").on('click', 'a:not(a[href="blog.html"])', function (e) {
        e.preventDefault();

        var hash = $(this).attr("href");
        var target = $(hash);

        $("html, body").animate({
            scrollTop: target.offset().top - 100
        }, 1000);

    });

});


$(window).scroll(function() {

    var item = document.getElementById('company');

    if ($(window).width() >= 576) {
        if (item != null) {
            var top = item.getBoundingClientRect().top;
            if (top <= 0) {
                $('.btn__pulse--fixed').fadeIn(200);

                $('#main__video').css({
                    zIndex: 11
                }).attr('src', null);
            } else {
                $('.btn__pulse--fixed').fadeOut(200);
            }
        }
    }

    var scroll = $(window).scrollTop();
    var body = $('body').height();
    var body_ = Math.round(body) / 100;

    var items = $('.section__animated');

    for (var i = 0; i < items.length; i++) {
        if($('.section__animated:eq('+i+')').offset().top - scroll <= $(window).height() / 1.2) {
            $('.section__animated:eq('+i+')').animate({
                opacity: 1,
            }, 1000);

            if ($(window).width() <= 575) {
                $('.section__animated:eq('+i+') .section__title').animate({
                    opacity: .4,
                    left: '15',
                });
            } else if($(window).width() <= 992) {
                $('.section__animated:eq('+i+') .section__title').animate({
                    opacity: .4,
                    left: '30',
                });
            } else {
                $('.section__animated:eq('+i+') .section__title').animate({
                    opacity: .4,
                    left: '100',
                });
            }

        }
    }

    $('.body__bg').css({
        'top':  - (scroll / body_ ) + '%'
    });


    if($('.section__structure--ico').offset().top - scroll <= $(window).height() / 1.2) {


        var dataset = [

            { name: 'FUTURE DEVELOP',   count: $('.chart .progressbar:eq(0)').data('value'), },
            { name: 'ICO ',             count: $('.chart .progressbar:eq(1)').data('value'), },
            { name: 'PRE-ICO',          count: $('.chart .progressbar:eq(2)').data('value'), },
            { name: 'FOUNDERS',         count: $('.chart .progressbar:eq(3)').data('value'), },
            { name: 'TEAM',             count: $('.chart .progressbar:eq(4)').data('value'), },
            { name: 'ADVISER',          count: $('.chart .progressbar:eq(5)').data('value'), },
            { name: 'BOUNTY',           count: $('.chart .progressbar:eq(6)').data('value'), },

        ];

        var color_array = [
            $('.chart .progressbar:eq(0)').data('color'),
            $('.chart .progressbar:eq(1)').data('color'),
            $('.chart .progressbar:eq(2)').data('color'),
            $('.chart .progressbar:eq(3)').data('color'),
            $('.chart .progressbar:eq(4)').data('color'),
            $('.chart .progressbar:eq(5)').data('color'),
            $('.chart .progressbar:eq(6)').data('color')
        ];

        if (status == 1) {
            Chart('chart', dataset, color_array, "Token Sale", "scheme");
            status = 0;
        }



        var items = $('.chart').find('li.progressbar');

        setTimeout(function(){

            for (var i = 0; i < items.length; i++) {

            $('.chart li.progressbar:eq('+i+')').css({
                backgroundColor: $('.chart li.progressbar:eq('+i+')').data('color'),
            });

            $('.chart li.progressbar:eq('+i+')').animate({
                width: $('.chart li.progressbar:eq('+i+')').data('value') * 2.5 + '%',
            });
        }

        }, 1000);

    }

    if($('.section__structure--cost').offset().top - scroll <= $(window).height() / 1.2) {


        var dataset = [

            { name: 'FUTURE DEVELOP',   count: $('.chart_1 .progressbar:eq(0)').data('value'), },
            { name: 'ICO ',             count: $('.chart_1 .progressbar:eq(1)').data('value'), },
            { name: 'PRE-ICO',          count: $('.chart_1 .progressbar:eq(2)').data('value'), },
            { name: 'FOUNDERS',         count: $('.chart_1 .progressbar:eq(3)').data('value'), },
            { name: 'TEAM',             count: $('.chart_1 .progressbar:eq(4)').data('value'), },
            { name: 'ADVISER',          count: $('.chart_1 .progressbar:eq(5)').data('value'), },
            { name: 'BOUNTY',           count: $('.chart_1 .progressbar:eq(6)').data('value'), },

        ];

        var color_array = [
            $('.chart_1 .progressbar:eq(0)').data('color'),
            $('.chart_1 .progressbar:eq(1)').data('color'),
            $('.chart_1 .progressbar:eq(2)').data('color'),
            $('.chart_1 .progressbar:eq(3)').data('color'),
            $('.chart_1 .progressbar:eq(4)').data('color'),
            $('.chart_1 .progressbar:eq(5)').data('color'),
            $('.chart_1 .progressbar:eq(6)').data('color')
        ];

        if (status_1 == 1) {
            Chart('chart_1', dataset, color_array, "Cost structure", "");
            status_1 = 0;
        }



        var items = $('.chart_1').find('li.progressbar');

        setTimeout(function(){

            for (var i = 0; i < items.length; i++) {

            $('.chart_1 li.progressbar:eq('+i+')').css({
                backgroundColor: $('.chart_1 li.progressbar:eq('+i+')').data('color'),
            });

            $('.chart_1 li.progressbar:eq('+i+')').animate({
                width: $('.chart_1 li.progressbar:eq('+i+')').data('value') * 2.5 + '%',
            });
        }

        }, 1000);

    }

    if($('.section__video').offset().top - scroll <= $(window).height() / 1.4 ) {
        $('.video__content').css({
            opacity: 1,
            width: '100%',
            height: '100%',
        });
    }

    if( scroll < $(window).height() ) {
        $('.header__earth').css({

            top: (($('.header').height() - scroll) / $('.header').height() * 100 - 55).toFixed(2)  + 'vh'

        });
    }

    if (scroll >= 20) {
        $('#navigation').addClass('fixed');

    } else {
        $('#navigation').removeClass('fixed');
    }

});

$.ajax({
    url: "/en/progress.json",
    type: "GET",
    cache: false,
    beforeSend: function() {


    },

    success: function(response) {
        // console.log(response);

        // $('.progress__count').html(response.count);
        $('.progress__sold').html(response.sold);
        $('.progress__min').html(response.min);
        $('.progress__max').html(response.max);


    },
    error: function(response) {
        // console.log(response);
    }

});

$.ajax({
    url: "/en/team.json",
    type: "GET",
    cache: false,
    beforeSend: function() {


    },

    success: function(response) {

        $.each( response.advisers, function( i, val ) {

            var social = '';

            if (response.advisers[i].soc_1 != '') {
                social += '<a target="blank" class="member__link" href="'+response.advisers[i].soc_1+'"><i class="fa fa-linkedin" aria-hidden="true"></i></a>'
            }

            if (response.advisers[i].soc_2 != '') {
                social += '<a target="blank" class="member__link" href="'+response.advisers[i].soc_2+'"><i class="fa fa-twitter" aria-hidden="true"></i></a>'
            }

            if (response.advisers[i].soc_3 != '') {
                social += '<a target="blank" class="member__link" href="'+response.advisers[i].soc_3+'"><i class="fa fa-facebook" aria-hidden="true"></i></a>'
            }

            $("#member_adviser .member__slider").append(

                    '<div class="member">' +
                        '<div class="member__image">' +
                            '<img src="/en/img/team/'+response.advisers[i].image+'" alt="">' +
                            '<div class="member__social">'+ social +'</div>' +
                        '</div>' +
                        '<div class="member__info">' +
                            '<div class="member__name">'+ response.advisers[i].name +'</div>' +
                            '<div class="member__position">'+ response.advisers[i].position +'</div>' +
                            '<div class="member__text">' + response.advisers[i].text + '</div>' +
                        '</div>' +
                    '</div>'
            );

        });

        $.each( response.members, function( i, val ) {


            var social = '';

            if (response.members[i].soc_1 != '') {
                social += '<a target="blank" class="member__link" href="'+response.members[i].soc_1+'"><i class="fa fa-linkedin" aria-hidden="true"></i></a>'
            }

            if (response.members[i].soc_2 != '') {
                social += '<a target="blank" class="member__link" href="'+response.members[i].soc_2+'"><i class="fa fa-twitter" aria-hidden="true"></i></a>'
            }

            if (response.members[i].soc_3 != '') {
                social += '<a target="blank" class="member__link" href="'+response.members[i].soc_3+'"><i class="fa fa-facebook" aria-hidden="true"></i></a>'
            }

            $("#member_team .member__slider").append(

                '<div class="member">' +
                    '<div class="member__image">' +
                        '<img src="/en/img/team/'+response.members[i].image+'" alt="">' +
                        '<div class="member__social">'+ social +'</div>' +
                    '</div>' +
                    '<div class="member__info">' +
                        '<div class="member__name">'+ response.members[i].name +'</div>' +
                        '<div class="member__position">'+ response.members[i].position +'</div>' +
                        '<div class="member__text">' + response.members[i].text + '</div>' +
                    '</div>' +
                '</div>'
            );

        });



    },
    error: function(response) {
        // console.log(response);
    }

});

$.ajax({
    url: "/en/faq.json",
    type: "GET",
    cache: false,
    beforeSend: function() {


    },

    success: function(response) {

        $.each( response.main, function( i, val ) {

            var collapsed, show;

            if (i == 0) {
                collapsed = '';
            } else {
                collapsed = 'collapsed';
            }

            if (i == 0) {
                show = 'show';
            } else {
                show = '';
            }


            $("#accordion_faq").append(
                '<div class="card">' +
                    '<div class="card-header" id="headingOne'+i+'">' +

                        '<button class="btn btn-link '+collapsed+'" data-toggle="collapse" data-target="#collapseOne'+i+'" aria-expanded="true" aria-controls="collapseOne'+i+'">'+response.main[i].question+'<span></span></button>' +

                    '</div>' +

                    '<div id="collapseOne'+i+'" class="collapse '+show+'" aria-labelledby="headingOne'+i+'" data-parent="#accordion_faq">' +
                        '<div class="card-body">'+ response.main[i].answer +'</div>' +
                    '</div>'+
                '</div>'
            );

        });


    },
    error: function(response) {
        // console.log(response);
    }

});

$('.section__video .play__video').click(function(e){
    e.preventDefault();


    $('#main__video').attr('src', $(this).data('target'));

    $('#main__video').css({
        zIndex: 12
    });


    return false;
});




$('.blog__item .play__video').click(function(e){
    e.preventDefault();

    $('.overlay').fadeIn();

    $('iframe').attr('src', $(this).data('target'));


    return false;
});

$('.overlay').click(function(e){
    e.preventDefault();

    $('iframe').attr('src', '');

    $('.overlay').fadeOut();


    return false;
});

$('.subscribe__overlay a.close').click(function(e){
    e.preventDefault();

    $('.subscribe__overlay').fadeOut(400);

    return false;
});


$("#subscribeForm").submit(function( e ) {

    e.preventDefault();

    var form = $(this).serializeArray();
    var submit = $('button[name=submit]', $(this));
    // console.log(form);
    ajax(form);
    return false;

});

$('.history__arrow').click(function(e){
    e.preventDefault();

    $('.roadmap__history').slideToggle(900);
    $(this).toggleClass('collapse');
    if($(this).hasClass('collapse')) {
        $('.history__arrow span').text('Hide Our History');
        $('.history__arrow .fa').removeClass('fa-angle-double-up').addClass('fa-angle-double-down');
    }else {
        $('.history__arrow span').text('Show Our History');
        $('.history__arrow .fa').removeClass('fa-angle-double-down').addClass('fa-angle-double-up');
    }

    return false;
});



function ajax(data){
    $.post('/en/mail.php', data, function(data){
        data = JSON.parse(data);

        if (data.status == 'success') {
            $('.block__content').text(data.text);
            $('.message__block').fadeIn();
        } else {
            $('.block__content').text(data.text);
            $('.message__block').fadeIn();
            setTimeout(function (){
                $('.message__block').fadeOut();
            }, 1500);
        }

    });

}

//




// console.log($('.cases__text').length);

// $.each($('.cases__text'), function(i,val) {
//     $(this).text($(this).text().substr(0, 200) + '...')
// })