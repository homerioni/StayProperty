$(document).ready(function () {

    $('.review-btn').click(function () {
        $('.modal-review__text').html($(this).parent().find('.review-text').html());
        $('body').css('width', $('body').width());
        $('body').addClass('lock');
        $('.modal-review').css('display', 'flex').hide().fadeIn();
    });

    $('.photo-review__slide').click(function () {
        $('.modal-review__text').html($(this).find('.photo-review__hover-text span').html());
        $('body').css('width', $('body').width());
        $('body').addClass('lock');
        $('.modal-review').css('display', 'flex').hide().fadeIn();
    });

    $('.filter__header').click(function () {
        $(this).toggleClass('active');
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
        $('.modal-img__close').css({
            'right': ($('.modal-img__content img').position().left) + 'px',
            'top': ($('.modal-img__content img').position().top) + 'px',
        });
    });

    $('.stages__progressbar span').each(function () {
        $(this).css('width', $(this).parent().attr('val') + '%');
    });

    if ($('.progress').attr('val') > 50) {
        $('.progress__circle-val-bg').addClass('over-half');
    }
    $('.progress__circle-val').css('transform', 'translate(-50%, -50%) rotate(' +
        ($('.progress').attr('val') * 3.6) +
        'deg)');
    $('.progress__circle-val-point').css('transform', 'translate(-50%, -50%) rotate(' +
        ($('.progress').attr('val') * 3.6) +
        'deg)');

    if ($('.progress-min').attr('val') > 50) {
        $('.progress-min__circle-val-bg').addClass('over-half');
    }
    $('.progress-min').each(function () {
        $(this).find('.progress-min__circle-val').css('transform', 'translate(-50%, -50%) rotate(' + ($(this).attr('val') * 3.6) + 'deg)');
    });

});