$(window).scroll(function(){
    if($(this).scrollTop() > 600) {
        $('#up').fadeIn()
    } else {
        $('#up').fadeOut()
    }
})

$('#up').on('click', function(){
    $('html, body').animate({scrollTop: 0}, 1500)
})
let navHeight = - $('.header-fixed').outerHeight(true);

$('#about').on('click', function(e){
    e.preventDefault();
    $('.bar-input').prop('checked', false);
    let opening = function(){
        $('html, body').animate({scrollTop: navHeight + $('#features').offset().top}, 1500);
    }
    setTimeout(opening, 2000);
})

$('.scrolling').on('click', function(e){
    e.preventDefault();
    $('.bar-input').prop('checked', false);
    let opening = function(){
        $('html, body').animate({scrollTop: navHeight + $('.prefooter').offset().top}, 1500);
    }
    setTimeout(opening, 2000);
})

$(window).scroll(function(){
    if($(this).scrollTop() > 70) {
        $('.header-fixed').addClass('active')
    } else {
        $('.header-fixed').removeClass('active')
    }
})

$('button').on('click', function(e) {
    e.preventDefault();
})

$('a').on('click', function(e) {
    e.preventDefault();
})