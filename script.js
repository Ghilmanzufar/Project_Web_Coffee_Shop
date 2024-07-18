$(window).on('scroll', function() {
    var tabs = $('#fixedTabs');
    var scrollPosition = $(window).scrollTop();

    if (scrollPosition > $('#hero-menu').height() - 70) {
        tabs.addClass('fixed');
    } else {
        tabs.removeClass('fixed');
    }
});

$('#fixedTabs a').on('click', function(event) {
    event.preventDefault();
    $('#fixedTabs a').removeClass('active');
    $(this).addClass('active');

    var target = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(target).offset().top - 130
    }, 500);
});