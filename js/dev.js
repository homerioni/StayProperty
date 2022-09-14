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


	mediaQuery = window.matchMedia('(min-width: 48em)');
	a = mediaQuery.matches;

	window.addEventListener('resize', function() {
		mediaQuery = window.matchMedia('(min-width: 48em)');

		if (mediaQuery.matches != a) {
			a = mediaQuery.matches;
			window.location.reload();
		}
    });

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
		$(this).parent().find('.card__infrastructure-column.desctop').slideToggle();
		$(this).toggleClass('active');
	});

	$('.video-play').click(function () {
		let getLink = $(this).attr('video')
			.replace('.com/embed/', '.com/watch?v=')
			.replace('.be/', '.com/watch?v=')
			.split(".com/watch?v=")[1]
			.split("&index")[0]
			.replace('&', '?');

		$('body').addClass('lock');
		$('.modal-video iframe').attr('src', 'https://www.youtube.com/embed/' + getLink);
		$('.modal-video').css('display', 'flex').hide().fadeIn();
	});
	$('.modal-video .close').click(function () {
		$('body').removeClass('lock');
		$('.modal-video').fadeOut(200);
		$('.modal-video iframe').attr('src', '');
	});

	$('.pop-up .close').click(function () {
		$(this).parents('.pop-up').hide();
		$('body').removeClass('lock');
		$('.pop-up__form').show();
		$('.pop-up__complete').hide();
	});
	// $('.pop-up .complete').click(function () {
	// 	$('.pop-up__form').hide();
	// 	$('.pop-up__complete').show();
	// });
	$('.open-modal-callback').click(function () {
		$('body').addClass('lock');
		$('.modal-callback').css('display', 'flex').hide().fadeIn();
	});
	$('.open-modal-write').click(function () {
		$('body').addClass('lock');
		$('.modal-write').css('display', 'flex').hide().fadeIn();
	});
	$('.open-modal-vacancy').click(function () {
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
			phone = that.find('input[name="PHONE"]').val()

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


	

	// $( document ).on('click', '.real-estate__top-sorting-item', function () {
	// 	var that = $(this),
	// 		field = that.attr('field'),
	// 		method = that.attr('method'),
	// 		url = that.parent().attr('current-url');
	//
	// 		if(method == 'ASC') method = 'DESC';
	// 		else method = 'ASC';
	// 		that.attr('method', method);
	//
	// 	$.ajax({
	// 		type: 'POST',
	// 		url: '/ajax/states/changeURL.php',
	// 		data: data,
	// 		dataType: 'html',
	// 		success: function (response) {
	//
	// 			var uri = url + response
	// 			history.pushState(null, null, uri);    // == url.href
	// 			window.location.reload();
	//
	// 		},
	//
	// 	});
	//
	//
	// })

});