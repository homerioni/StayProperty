$(document).ready(function () {

    $('.review-btn').click(function () {
        $('.modal-review__text').text($(this).parent().find('.review-text').text());
        $('body').css('width', $('body').width());
        $('body').addClass('lock');
        $('.modal-review').css('display', 'flex').hide().fadeIn();
    });

    $('.photo-review__slide').click(function () {
        let coord = this.getBoundingClientRect();
        $('.modal-review__text').text($(this).find('.photo-review__hover-text span').text());
        $('body').css('width', $('body').width());
        $('body').addClass('lock');
        $('.modal-review__content').css({
            'position': 'absolute',
            'top': coord.top + coord.height / 2,
        });
        $('.modal-review').css('display', 'flex').hide().fadeIn();
        console.log(this.getBoundingClientRect());
    });

    $('.filter__btn').click(function () {
        $(this).parents('.filter__header').toggleClass('active');
        $(this).parents('.filter').find('.filter__body').slideToggle();
    });

    $('.articles__text-block > *:not(.articles__slider, .articles__video-wrap) img').each(function () {
        $(this).css({
            'width': $(this).attr('width') / 10 + 'rem',
            'height': $(this).attr('height') / 10 + 'rem',
        });
    }).click(function () {
        $('body').addClass('lock');
        $('.modal-img__content img').attr('src', $(this).attr('src'));
        $('.modal-img').css('display', 'flex').hide().fadeIn();
    });

    $('.stages__progressbar span').each(function () {
        $(this).css('width', $(this).parent().attr('val') + '%');
    });

    if ($('.progress').attr('val') > 50) {
        console.log($('.progress').attr('val'))
        $('.progress__circle-val-bg').addClass('over-half');
    }
    $('.progress__circle-val').css('transform', 'translate(-50%, -50%) rotate(' +
        ($('.progress').attr('val') * 3.6) +
        'deg)');
    $('.progress__circle-val-point').css('transform', 'translate(-50%, -50%) rotate(' +
        ($('.progress').attr('val') * 3.6) +
        'deg)');

});