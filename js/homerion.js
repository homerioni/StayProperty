$(document).ready(function () {

    $('.review-btn').click(function () {
        $('.modal-review__text').text($(this).parent().find('.review-text').text());
        $('body').addClass('lock');
        $('.modal-review').css('display', 'flex').hide().fadeIn();
    });

    $('.photo-review__slide').click(function () {
        $('.modal-review__text').text($(this).find('.photo-review__hover-text span').text());
        $('body').addClass('lock');
        $('.modal-review').css('display', 'flex').hide().fadeIn();
    });

    $('.filter__btn').click(function () {
        $(this).parents('.filter__header').toggleClass('active');
        $(this).parents('.filter').find('.filter__body').slideToggle();
    });

});