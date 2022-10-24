

$('a').each(function () {
	var linkAttr = $(this).attr('href')

	if (/http/.test(linkAttr) == true)
		$(this).attr('target', '_blank');
});
// $(document).on('click', 'a', function (e) {
// 	var linkAttr = $(this).attr('href')
// 	if (/http/.test(linkAttr) == true)
// 	{
// 		var width = 1300,
// 		height = 800,
// 		left = Number((screen.width / 2) - (width / 2))
// 		top = Number((screen.height / 2) - (height / 2))
// 		windowFeatures = 'channelmode=0,directories=0,fullscreen=0,location=0,menubar=0,resizable=0,scrollbars=0,status=0,width='+width+',height='+height+',top=' + top + ',left=' + left;

// 		e.preventDefault();
// 		window.open(linkAttr, '', windowFeatures);
		
// 		return;
// 	}
// })

// $('.open-in-new-window').on('click', function(e) {
// 	e.preventDefault();
// 	console.log(e)
// 	// window.open(this.href, '', 'width=900,height=500');
// 	return;
// });

$(document).ready(function() {

	

	// console.log('dev');
	// let statesUrl = $('.real-estate__number-wrap').attr('states-url')
	// if(statesUrl)
	// {
	// 	history.pushState(null, null, statesUrl);    // == url.href
	// }

	$('.select__item').on('click', function() {
		data = $(this).attr('data-id');
		parent = $(this).closest('.filter_parent');
		input = parent.find('input');
		input.val(data);
	});

	$('.location_header').on('click', function() {

		num = $('.location_header').index($(this));
		id = $(this).attr('data-id');

		$('.location_info').each(function() {
			if (!$(this).hasClass('element-hidden')) {
				$(this).addClass('element-hidden');
			}
		});

		//console.log($('.location_info')[num]);

		$($('.location_info')[num]).removeClass('element-hidden');

		/*$.ajax({
			url: "/ajax/employees.php",
			method: "POST",
			data: {ID: id}
		})
			.done(function(answer) {
				$('.workers_containter').empty();
				$('.workers_containter').append(answer);
			})
			.fail(function(error) {
				$('.workers_containter').empty();
				$('.workers_containter').append(error);
			});*/

		var r = $.ajax({
			url: "/ajax/employees.php",
			method: "POST",
			data: {ID: id}
		});
		 
		r.done(function( answer ) {
			$('.workers_containter').empty();
			$('.workers_containter').append(answer);
		});
		 
		r.fail(function( jqXHR, textStatus ) {
			alert( "Request failed: " + textStatus );
			console.log(jqXHR);
		});

	});


	const breakpoint = window.matchMedia('(max-width: 48em)');
	const mediaQuery = breakpoint.matches;
	if(mediaQuery)
		$('.filter__clean-filters.desctop').remove();
	else
		$('.filter__clean-filters.mobile').remove();



	// mediaQuery = window.matchMedia('(min-width: 48em)');
	// a = mediaQuery.matches;

	// window.addEventListener('resize', function() {
	// 	mediaQuery = window.matchMedia('(min-width: 48em)');

	// 	if (mediaQuery.matches != a) {
	// 		a = mediaQuery.matches;
	// 		window.location.reload();
	// 	}
    // });

	if ($('.location_header')[0]) {
		$('.location_header')[0].click();
	}

	$.fn.toEm = function(settings){
	    settings = jQuery.extend({
	        scope: 'body'
	    }, settings);
	    var that = parseInt(this[0],10),
	        scopeTest = jQuery('<div style="display: none; font-size: 1em; margin: 0; padding:0; height: auto; line-height: 1; border:0;">&nbsp;</div>').appendTo(settings.scope),
	        scopeVal = scopeTest.height();
	    scopeTest.remove();
	    return (that / scopeVal).toFixed(8);
	};

	$('.card-more-btn').click(function () {
		$(this).parent().toggleClass('active');
		$(this).toggleClass('active');
	});

	$('.video-play').click(function () {
		let getLink = $(this).attr('video')
			.replace('.com/embed/', '.com/watch?v=')
			.replace('.be/', '.com/watch?v=')
			.split(".com/watch?v=")[1]
			.split("&index")[0]
			.replace('&', '?');

		$('body').css('width', $('body').width());
		$('body').addClass('lock');
		$('.modal-video iframe').attr('src', 'https://www.youtube.com/embed/' + getLink);
		$('.modal-video').css('display', 'flex').hide().fadeIn();
	});
	$('.modal-video .close').click(function () {
		$('body').removeClass('lock');
		$('body').removeClass('lock').css('width', 'initial');
		$('.modal-video').fadeOut(200);
		$('.modal-video iframe').attr('src', '');
	});

	$('.pop-up .close').click(function () {
		$(this).parents('.pop-up').hide();
		$('body').removeClass('lock').css('width', 'initial');
		$('.pop-up__form').show();
		$('.pop-up__complete').hide();
	});
	// $('.pop-up .complete').click(function () {
	// 	$('.pop-up__form').hide();
	// 	$('.pop-up__complete').show();
	// });
	$('.open-modal-callback').click(function () {
		$('body').css('width', $('body').width());
		$('body').addClass('lock');
		$('.modal-callback').css('display', 'flex').hide().fadeIn();
	});
	$('.open-modal-write').click(function (e) {
		$('input[name="ZAKAZ"]').val($(this).attr('data-name'))
		$('input[name="OBJECT"]').val($(this).attr('data-object'))
		$('body').css('width', $('body').width());
		$('body').addClass('lock');
		$('.modal-write').css('display', 'flex').hide().fadeIn();
		e.preventDefault()
	});
	$('.open-modal-mortgage').click(function () {
		$('body').css('width', $('body').width());
		$('body').addClass('lock');
		$('.modal-mortgage').css('display', 'flex').hide().fadeIn();
	});
	$('.open-modal-vacancy').click(function () {
		$('body').css('width', $('body').width());
		$('body').addClass('lock');
		$('.modal-vacancy').css('display', 'flex').hide().fadeIn();
	});

	const blogContentSlider = new Swiper('.blog__content.swiper-slider', {
		spaceBetween: 40,
		slidesPerView: 1,
		watchSlidesProgress: true,

		breakpoints: {
			769: {
				slidesPerView: 2,
			}
		},

		pagination: {
			el: ".blog__pagination",
		},
	});

	const textReviewSlider = new Swiper('.text-review__slider.swiper', {
		spaceBetween: 40,
		slidesPerView: 1,
		watchSlidesProgress: true,

		navigation: {
			prevEl: '.text-review .prev',
			nextEl: '.text-review .next',
		},
	});



	$('.select__item').on('click', function() {
		let that = $(this)[0];
		let val = that.getAttribute('data-value');
		let id = that.getAttribute('data-input');
		let input = document.getElementById(id);
		input.setAttribute('value', val);

        if (id === 'PROPERTY_12') {
            changeCity(val);
            document.getElementById('PROPERTY_13').value = '';
            document.querySelector('.rooms .select__current').innerHTML = 'Район';
        }
	});

	function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        select.classList.remove('active');
    }

	function changeCity(gorod) {
        let rayoni;
        if (gorod) {
            rayoni = goroda[gorod];
        } else {
            rayoni = vse_rayoni;
        }
        let list = document.getElementById('rayoni_list');
        let el = `<div class="filter__type-item select__item new_item"
                    data-value="#RAYON#" 
                    data-input="PROPERTY_13">#RAYON#</div>`;
        list.innerHTML = '';
        rayoni.forEach((element) => {
            list.innerHTML += el.replaceAll('#RAYON#', element);
        });
        document.querySelectorAll('.new_item').forEach((item) => {
          item.addEventListener('click', selectChoose);
        });
        $('.new_item').on('click', function() {
			let that = $(this)[0];
			let val = that.getAttribute('data-value');
			let id = that.getAttribute('data-input');
			let input = document.getElementById(id);
			$(input).val(val);
        });
    }

    // $("form").submit ( function(e) {
    // 	let choosen_tip = $('#PROPERTY_21').val();
    // 	let choosen_gorod = $('#PROPERTY_12').val();
    // 	let choosen_rayon = $('#PROPERTY_13').val();
    // 	if (tip_links[choosen_tip]) {
    // 		$('#filter_form').attr('action', tip_links[choosen_tip]);
    // 	}
    // 	if (goroda_links[choosen_gorod]) {
    // 		$('#filter_form').attr('action', goroda_links[choosen_gorod]);
    // 	}
    // 	if (rayoni_links[choosen_rayon]) {
    // 		$('#filter_form').attr('action', rayoni_links[choosen_rayon]);
    // 	}
    // 	if (!(rayoni_links[choosen_rayon] || goroda_links[choosen_gorod] || tip_links[choosen_tip])) {
    // 		$('#filter_form').attr('action', '/states/');
    // 	}
	// });
	//
	// if (now_gorod) {
	// 	$('[data-value="'+now_gorod+'"]').click();
	// }
	//
	// if (now_rayon) {
	// 	$('[data-value="'+now_rayon+'"]').click();
	// }
	//
	// if (now_tip) {
	// 	$('[data-value="'+now_tip+'"]').click();
	// }


	let timeOut;
	$('.feedback-simple-ajax').submit(function (e) {
		e.preventDefault()
		var that  = $(this),
			data  = that.serialize(),
			name  = that.find('input[name="NAME"]').val(),
			phone = that.find('input[name="PHONE"]').val()

		if(name.length <= 1)
		{
			$('.feedback-simple.errortext-name').show()
			clearTimeout(timeOut);
			timeOut = setTimeout(function() {
				$('.feedback-simple.errortext-name').hide()
			}, 3000)
			return;
		}
		else if(phone.length <= 9)
		{
			$('.feedback-simple.errortext-phone').show()
			clearTimeout(timeOut);
			timeOut = setTimeout(function() {
				$('.feedback-simple.errortext-phone').hide()
			}, 3000)
			return;
		}

		$.ajax({
			type: 'POST',
			url: '/ajax/feedback/simpleForm.php',
			data: data,
			dataType: 'html',
			success: function (response) {
				if(response == 1)
				{
					$('.pop-up__complete').show();
					that.hide()
				}
				else console.log(response)
			},

		});


		return false;

	});

	$('.feedback-advanced-ajax').submit(function (e) {

		e.preventDefault()
		var that  = $(this),
			data  = that.serialize(),
			name  = that.find('input[name="NAME"]').val(),
			phone = that.find('input[name="PHONE_OR"]').val()

		if(name.length <= 1)
		{
			$('.feedback-advanced.errortext-name').show()

			clearTimeout(timeOut);
			timeOut = setTimeout(function() {
				$('.feedback-simple.errortext-name').hide()
			}, 3000)
			return;
		}
		else if(phone.length <= 9)
		{
			$('.feedback-advanced.errortext-phone').show()
			clearTimeout(timeOut);
			timeOut = setTimeout(function() {
				$('.feedback-advanced.errortext-phone').hide()
			}, 3000)
			return;
		}


		$.ajax({
			type: 'POST',
			url: '/ajax/feedback/advancedForm.php',
			data: data,
			dataType: 'html',
			success: function (response) {
				if(response == 1)
				{
					$('.pop-up__complete').show();
					that.hide()
				}
				else console.log(response)
			},

		});


		return false;

	});


	$('.feedback-mortgage-ajax').submit(function (e) {

		e.preventDefault()
		var that  = $(this),
			data  = that.serialize(),
			name  = that.find('input[name="NAME"]').val(),
			phone = that.find('input[name="PHONE"]').val(),
			mortgageCont = $('.mortgage__calculation')

		if(mortgageCont !== undefined && mortgageCont)
		{
			var priceFlat   = mortgageCont.find('.mortgage__ranger .irs--round .irs .irs-single').text(),
				initPayment = mortgageCont.find('.mortgage__rangers-wrap .mortgage__ranger-payment .irs--round .irs .irs-single').text(),
				creditTime  = mortgageCont.find('.mortgage__rangers-wrap .mortgage__ranger-term .irs--round .irs .irs-single').text(),
				priceFrom   = mortgageCont.find('.mortgage__bottom .mortgage__price #mortgage-price').text()
		}

		if(name.length <= 1)
		{
			$('.feedback-advanced.errortext-name').show()

			clearTimeout(timeOut);
			timeOut = setTimeout(function() {
				$('.feedback-simple.errortext-name').hide()
			}, 3000)
			return;
		}
		else if(phone.length <= 9)
		{
			$('.feedback-advanced.errortext-phone').show()
			clearTimeout(timeOut);
			timeOut = setTimeout(function() {
				$('.feedback-advanced.errortext-phone').hide()
			}, 3000)
			return;
		}


		$.ajax({
			type: 'POST',
			url: '/ajax/feedback/advancedForm.php?PRICE_FLAT='+priceFlat+'&INIT_PAYMENT='+initPayment+'&CREDIT_TIME='+creditTime+'&PRICE_FROM='+priceFrom,
			data: data,
			dataType: 'html',
			success: function (response) {
				if(response == 1)
				{
					$('.pop-up__complete').show();
					that.hide()
				}
				else console.log(response)
			},

		});


		return false;

	});

	
});