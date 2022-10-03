$(document).ready(function() {
    // табы на странице недвижимости
    const tabsBtn = document.querySelectorAll(".tab-btn");
    const tabsItems = document.querySelectorAll(".tab-item");
    tabsBtn.forEach(onTabClick);
    function onTabClick(item) {
        item.addEventListener("click", function () {
            let currentBtn = item;
            let tabId = currentBtn.getAttribute("data-tab");
            let currentTab = document.querySelector(tabId);

            if (!currentBtn.classList.contains('active')) {
                tabsBtn.forEach(function (item) {
                    item.classList.remove('active');
                });

                tabsItems.forEach(function (item) {
                    item.classList.remove('active');
                });

                currentBtn.classList.add('active');
                currentTab.classList.add('active');
            }
        });
    }
    if ($(".tab-btn")[0]) {
        document.querySelector('.tab-btn').click();
    }

// function openTabContacts(evt, tabsName) {
//     var i, tabcontent, tablinks;

//     tabcontent = document.getElementsByClassName("tabcontent-contacts");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }

//     tablinks = document.getElementsByClassName("contacts__tablink-item");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }

//     document.getElementById(tabsName).style.display = "block";
//     evt.currentTarget.className += " active";
// }

// функция для кастомных селектов
    let select = function () {
        let selectHeader = document.querySelectorAll('.select__header');
        let selectItem = document.querySelectorAll('.select__item');

        selectHeader.forEach(item => {
            item.addEventListener('click', selectToggle)
        });

        selectItem.forEach(item => {
            item.addEventListener('click', selectChoose)
        });

        function selectToggle() {
            if ($(this).parent().hasClass('active')) {
                $(this).parent().removeClass('active');
            } else {
                $('.select').removeClass('active');
                $(this).parent().addClass('active');
            }
            // $('.select').removeClass('active');
            // this.parentElement.classList.toggle('active');
        }

        function selectChoose() {
            let text = this.innerText,
                select = this.closest('.select'),
                currentText = select.querySelector('.select__current');
            currentText.innerText = text;
            select.classList.remove('active');
        }
    };

    select();

// мобильное меню
    $('.header__burger-btn').on('click', function (e) {
        e.preventDefault();
        document.body.classList.toggle('lock');
        $('.header__burger-btn').toggleClass("active");
        $('.header__menu-mobile').toggleClass("active");
    });

// появление дополнителньой информации в текстовом блоке карточек с недвижимостью на Главной странице
//     $(document).ready(function () {
//         $('.real-estate__text-block').on('mouseenter', function () {
//             $(this).parent().toggleClass('active');
//         });
//         $('.real-estate__text-block').on('mouseleave', function () {
//             $(this).parent().toggleClass('active');
//         });
//     });

// кнопки
    $(".real-estate__button-top").click(function (e) {
        e.preventDefault();
        $(".real-estate__button-top").removeClass('active');
        $(this).addClass('active');
    })

    $(".real-estate__button-bottom").click(function (e) {
        e.preventDefault();
        $(".real-estate__button-bottom").removeClass('active');
        $(this).addClass('active');
    })

    $(".objects-box__like").click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
    })

// $(".real-estate__top-sorting-item").click(function (e) {
//     e.preventDefault();
//     $(".real-estate__top-sorting-item").removeClass('active');
//     $(this).addClass('active');
// })

    $(".real-estate__view-btn").click(function (e) {
        e.preventDefault();
        $(".real-estate__view-btn").removeClass('active');
        $(this).addClass('active');
    })

    $(".real-estate__like").click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
    })


//   переключение класса в вакансиях
    $(".vacancies__item-name").click(function (e) {
        e.preventDefault();
        $(".vacancies__item-name").removeClass('active');
        $(this).addClass('active');
    })

//   переключение класса на странице "наша команда"
    $(".command__lacation-item").click(function (e) {
        e.preventDefault();
        $(".command__lacation-item").removeClass('active');
        $(this).addClass('active');
    })


// слайдеры
    const objectSwiper = new Swiper('.objects-box__slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 800,
        watchSlidesProgress: true,

        pagination: {
            el: ".objects-box__pagination",
            bullets: true,
            clickable: true,
        },

        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
    });


// const supportSwiper = new Swiper('.support__slider', {
//     slidesPerView: 1,
//     spaceBetween: 0,
//     speed: 800,

//     pagination: {
//         el: ".support__slider-pagination",
//         bullets: true,
//         clickable: true,
//     },

//     navigation: {
//         prevEl: '.support__slider-prev',
//         nextEl: '.support__slider-next',
//     },

//     effect: "fade",
//     fadeEffect: {
//         crossFade: true
//     },
// });


    const realSwiper = new Swiper('.real-estate__slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 800,
        watchSlidesProgress: true,

        pagination: {
            el: ".real-estate__pagination",
            bullets: true,
            clickable: true,
        },

        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
    });

    const bigBoxSwiper = new Swiper('.real-estate__big-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 800,
        watchSlidesProgress: true,

        pagination: {
            el: ".real-estate__pagination-big",
            bullets: true,
            clickable: true,
        },

        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
    });


    const liveSwiper = new Swiper(".live__slider", {
        spaceBetween: 38,
        watchSlidesProgress: true,

        grid: {
            rows: 4,
            fill: 'row'
        },

        navigation: {
            prevEl: '.live__slider-prev',
            nextEl: '.live__slider-next',
        },

        pagination: {
            el: ".pagination-custom",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + 0 + (index + 1) + "</span>";
            },
        },

        breakpoints: {

            769: {
                slidesPerView: 4,
                spaceBetween: 37,

                grid: {
                    rows: 1,
                },
            }
        }
    });

    const bannerSwiper = new Swiper('.banner__slider', {
        slidesPerView: 1,
        spaceBetween: 35,
        speed: 800,
        loop: true,
        watchSlidesProgress: true,

        navigation: {
            prevEl: '.swiper__arrow-prev',
            nextEl: '.swiper__arrow-next',
        },

        pagination: {
            el: ".swiper__pagination",
            bullets: true,
            clickable: true,
        },

        effect: "fade",
        fadeEffect: {
            crossFade: true
        },

        on: {
            init: sliderCounter,
            slideChange: sliderCounter
        },
    });


    function sliderCounter() {
        let currentSlide = this.realIndex + 1;
        if (currentSlide < 10) {
            currentSlide = '0' + currentSlide
        }

        $('.slider__number').text(currentSlide);
    }


    const videoSwiper = new Swiper('.blog-slider', {
        slidesPerView: 1,
        spaceBetween: 40,
        speed: 800,
        watchSlidesProgress: true,

        navigation: {
            prevEl: '.blog__slider-prev',
            nextEl: '.blog__slider-next',
        },

        breakpoints: {

            769: {
                slidesPerView: 2,
            }
        },
    });

    const subscribeSwiper = new Swiper('.subscribe__slider', {
        slidesPerView: 1.15,
        spaceBetween: 30,
        speed: 800,
        watchSlidesProgress: true,

        navigation: {
            prevEl: '.subscribe__slider-prev',
            nextEl: '.subscribe__slider-next',
        },

        breakpoints: {

            769: {
                slidesPerView: 3.5,
                spaceBetween: 18,
            }
        },
    });



    const articleSwiper = new Swiper('.articles__slider', {
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 800,
        watchSlidesProgress: true,

        navigation: {
            prevEl: '.articles__slider-prev',
            nextEl: '.articles__slider-next',
        },

        pagination: {
            el: ".card-news__slider-pagination",
        },
    });




// const newsSwiper = new Swiper('.articles__box-photo', {
//     slidesPerView: 1,
//     spaceBetween: 50,
//     speed: 800,
//
//     navigation: {
//         prevEl: '.articles__prev',
//         nextEl: '.articles__next',
//     },
//
//     pagination: {
//         el: ".articles__box-pagination",
//         bullets: true,
//         clickable: true,
//     },
// });

    const staffSwiper = new Swiper('.staff__slider', {
        spaceBetween: 37,
        speed: 800,
        slidesPerView: 1,
        watchSlidesProgress: true,

        navigation: {
            prevEl: '.staff__slider-prev',
            nextEl: '.staff__slider-next',
        },

        breakpoints: {

            769: {
                slidesPerView: 3,
                spaceBetween: 39,
            }
        },
    });


    const catalogSwiper = new Swiper('.catalog__content', {
        spaceBetween: 37,
        watchSlidesProgress: true,
        // direction: "vertical",

        grid: {
            rows: 4,
            fill: 'row'
        },


        navigation: {
            prevEl: '.catalog__slider-prev',
            nextEl: '.catalog__slider-next',
        },

        breakpoints: {

            769: {
                slidesPerView: 4,
                spaceBetween: 37,

                grid: {
                    rows: 1,
                },
            }
        }
    });


    const videoReviewSwiper = new Swiper('.review-video__slider', {
        spaceBetween: 37,
        speed: 800,
        watchSlidesProgress: true,

        navigation: {
            prevEl: '.review-video__slider-prev',
            nextEl: '.review-video__slider-next',
        },

        breakpoints: {

            769: {
                slidesPerView: 3,
                spaceBetween: 37,
            }
        }
    });

    const activitySlider2 = new Swiper('#destroy_2', {
        slidesPerView: 1,
        speed: 800,
        spaceBetween: 15,
        loop: true,
        watchSlidesProgress: true,

        pagination: {
            el: ".representation__pagination",
        },
    });

// if ($('#destroy_2').length) {
//     if ($(window).width() >= 769) {
//         activitySlider2.destroy();
//     }
// }


// const activitySlider4 = new Swiper('#destroy-4', {
//     slidesPerView: 1,
//     speed: 800,
//     spaceBetween: 15,
//     loop: true,
//
//
//     pagination: {
//         el: ".blog__pagination",
//     },
// });
//
// if ($('#destroy-4').length) {
//     if ($(window).width() >= 769) {
//         activitySlider4.destroy();
//     }
// }


// счетчик страниц слайдов в слайдере
// var totalSlides = $('.photo-review__slide').length;
// const slidesPerView = 6
// const $counter = document.querySelector(".counter")
    const photoReviewSwiper = new Swiper('.photo-review__slider', {
        watchSlidesProgress: true,

        grid: {
            rows: 2,
            fill: 'row'
        },
        spaceBetween: 25,
        speed: 800,
        navigation: {
            prevEl: '.photo-review__slider-prev',
            nextEl: '.photo-review__slider-next',
        },

        pagination: {
            el: ".photo-review__slider-pagination",
            type: 'bullets',
        },

        breakpoints: {

            769: {
                slidesPerView: 3,
                spaceBetween: 35,

                pagination: {
                    el: ".photo-review__slider-pagination",
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '">' + 0 + (index + 1) + "</span>";
                    },
                },
            }
        },

        on: {
            init: function () {
                // $counter.innerHTML = 'Показано ' + (this.activeIndex + 1) + ' из ' + (totalSlides);
            },
            slideChange: function () {
                // $counter.innerHTML = 'Показано ' + (this.activeIndex + 1) + ' из ' + (totalSlides);
            }
        }
    });

    var rem = function (rem) {
        if ($(window).width() > 768) {
            return 0.005208335 * $(window).width() * rem;
        } else {
            // где 375 это ширина моб версии макета
            return (100/375) * (0.1 * $(window).width()) * rem;
        }
    }

    const cardSwiperThumb = new Swiper('.card__slider-thumb', {
        direction: 'vertical',
        slidesPerView: 4,
        spaceBetween: rem(3.4),
        watchSlidesProgress: true,
    });

    const cardSwiper = new Swiper('.card__slider', {
        slidesPerView: 1,
        spaceBetween: 37,
        speed: 800,
        watchSlidesProgress: true,

        navigation: {
            prevEl: '.card__slider-prev',
            nextEl: '.card__slider-next',
        },

        thumbs: {
            swiper: cardSwiperThumb,
        },
    });

    const photoSwiper = new Swiper('.photo__slider', {
        slidesPerView: 1,
        spaceBetween: 15,
        speed: 800,
        loop: true,
        watchSlidesProgress: true,

        pagination: {
            el: ".photo__bullets",
        },
    });

// $(".header__item-link").click(function (e) {
//     e.preventDefault();
//     $(this).toggleClass('active');
//     $(this).next(".header__sub-list").slideToggle();
//   })

//   $(".header__sub-item-link").click(function (e) {
//     e.preventDefault();
//     $(this).toggleClass('active');
//     $(this).next(".header__sub-sub-list").slideToggle();
//   })
    if ($(window).width() <= 768) {
        $(".header__item-link").click(function (e) {
            e.preventDefault();
            $(this).toggleClass('active');
            $(this).next(".header__sub-list").slideToggle();
        })

        $(".header__sub-item-link").click(function (e) {
            e.preventDefault();
            $(this).toggleClass('active');
            $(this).next(".header__sub-sub-list").slideToggle();
        })
    }

// Споллер faq
    $(document).ready(function () {
        $('.faq__spoller-title-wrap').click(function (event) {
            $(this).toggleClass('active').next().slideToggle(300);
        });
    });

// споллер на странице карточка товара с картами
    $(document).ready(function () {
        $('.description__spoller-title-wrap').click(function (event) {
            $(this).toggleClass('active').next().slideToggle(300);
        });
    });

// раскрытие фильтра в баннере в мобильной версии
    if ($('#spoller-filter').length) {
        if ($(window).width() <= 769) {
            $(document).ready(function () {
                $('.filter__header').click(function (event) {
                    $(this).toggleClass('active').next().slideToggle(300);
                });
            });
        }
    }

// раскрытие доп фильров в фильтре
    $(document).ready(function () {
        $('.filter__more-filters').click(function (event) {
            $(this).toggleClass('active');
            $('.filter__body-top').toggleClass('active');
            if ($(this).hasClass('active')) {
                $(this).find('span').html('Скрыть фильтры');
                $('.filter__select.active').removeClass('active');
            } else {
                $(this).find('span').html('Ещё фильтры');
            }
        });
    });

// раскрытие доп информации в футере в мобильной версии
    if ($('#footer-spoller').length) {
        if ($(window).width() <= 769) {
            $(document).ready(function () {
                $('.footer__nav-title').click(function (event) {
                    $(this).toggleClass('active').next().slideToggle(300);
                });
            });
        }
    }

// Споллер саппорт
    $('.service__spoller-title-wrap').on('click', function (e) {
        e.preventDefault();

        if ($(this).closest('.service__spoller-title-wrap').hasClass('active')) {
            $('.service__spoller-title-wrap').removeClass('active');
        } else {
            $('.service__spoller-title-wrap').removeClass('active');
            $(this).closest('.service__spoller-title-wrap').addClass('active');
        }

        // Show the content
        var $content = $(this).next();
        $content.slideToggle();
        $('.service__spoller-content').not($content).slideUp(200);

        let _this = $(this);
        setTimeout(function () {
            $('html, body').animate({
                scrollTop: _this.parent().offset().top
            }, 200);
        }, 201);
    });

// $(document).ready(function () {
//     $('.tablinks').click(function (event) {
//         $(this).toggleClass('active').next().slideToggle(300);
//     });
// });

    if ($('#service-destroy').length) {
        if ($(window).width() <= 769) {
            $(document).ready(function () {
                $('.service__spoller-title-wrap').click(function (e) {
                    e.preventDefault();
                    $(this).removeClass("active");
                    $(this).toggleClass("open").next().slideToggle();
                });
            });
        }
    }


// Табы при наведении на странице карточка товара
    function openTab(evt, cityName) {
        // Объявить все переменные
        var i, tabcontent, tablinks;

        // Получить все элементы с class="tabcontent" и скрыть их
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // Получить все элементы с class="tablinks" и снять класс "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // Показать на текущей вкладке, и добавить класс "active" по ссылке, которая откроется вкладка
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }

// Регулировка высоты контента в секции поддержки
// $('.service__spoller-title-wrap').on('click', function (e) {
//     e.preventDefault();

//     if ($(this).closest('.paid').hasClass('active')) {
//         $('.item-paid').addClass('open-bottom');
//     } else {
//         $('.item-paid').removeClass('open-bottom');
//     }
// });


// Споллер  страница новости
    $(document).ready(function () {
        $('.other-news__spoller-wrap').click(function (event) {
            $(this).toggleClass('active').next().slideToggle(300);
        });
    });

// Споллер текстовые отзывы
    $(document).ready(function () {
        $('.text-review__spoller-wrap').click(function (event) {
            $(this).toggleClass('active').next().slideToggle(300);
        });
    });

// переключение класса в новостях
    $(".other-news__spoller-pagination-num").click(function (e) {
        e.preventDefault();
        $(".other-news__spoller-pagination-num").removeClass('active');
        $(this).addClass('active');
    })


// кастомная пагинация слайдера
    $(".spoller-pagination-num").click(function (e) {
        e.preventDefault();
        $(".spoller-pagination-num").removeClass('active');
        $(this).addClass('active');
    })


// пагинация на странице недвижимости 
    $(".real-estate__pagination-num").click(function (e) {
        //e.preventDefault();
        $(".real-estate__pagination-num").removeClass('active');
        $(this).addClass('active');
    })

    $(".real-estate__pagination-bullet").click(function (e) {
        e.preventDefault();
        $(".real-estate__pagination-bullet").removeClass('active');
        $(this).addClass('active');
    })



    const rewiewsSwiper = new Swiper('.rewiews__slider', {
        spaceBetween: rem(7),
        slidesPerView: 1,
        loop: true,
        watchSlidesProgress: true,

        // grid: {
        //     rows: 3,
        //     fill: 'row'
        // },

        navigation: {
            prevEl: '.rewiews__slider-prev',
            nextEl: '.rewiews__slider-next',
        },

        pagination: {
            el: ".rewiews__bullets",
        },

        breakpoints: {

            769: {
                slidesPerView: 3,
                spaceBetween: 109,
                // grid: {
                //     rows: 1,
                // },
            }
        },
    });


    const activitySlider = new Swiper('#destroy_1', {
        speed: 800,
        spaceBetween: 30,
        watchSlidesProgress: true,

        grid: {
            rows: 2,
            fill: 'row'
        },

        navigation: {
            nextEl: '.blog__slider-next',
            prevEl: '.blog__slider-prev',
        },
    });

    if ($('#destroy_1').length) {
        if ($(window).width() >= 769) {
            activitySlider.destroy();
        }
    }


// сортировка на странице недвижимости
    $('.dropdown').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
    $('.dropdown').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu').slideUp(300);
    });
    $('.dropdown .dropdown-menu li').click(function () {
        $(this).parents('.dropdown').find('span').text($(this).text());
        $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
    });
    /*End Dropdown Menu*/


    $('.dropdown-menu li').click(function () {
        var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
            msg = '<span class="msg">Hidden input value: ';
        $('.msg').html(msg + input + '</span>');
    });



// POPUP
    $('.back-call-link').click(function (e) {
        e.preventDefault();
        $('.back-call').fadeIn(800);
        $('body').toggleClass('lock');
    });

    $('.back-call-close').click(function () {
        $('.back-call').fadeOut(800);
        $('body').toggleClass('lock');
    });


    $('.mortgage-popup-link').click(function (e) {
        e.preventDefault();
        $('.mortgage-popup').fadeIn(800);
        $('body').toggleClass('lock');
    });

    $('.mortgage-popup-close').click(function () {
        $('.mortgage-popup').fadeOut(800);
        $('body').toggleClass('lock');
    });

// модальное окно на странице вакансии
    $('.vacancies-popup-link').click(function (e) {
        e.preventDefault();
        $('#vacancies-popup' + $(this).attr('id')).fadeIn(800);
        $('body').toggleClass('lock');
    });

    $('.vacancies-popup-close').click(function () {
        $('.vacancies-popup').fadeOut(800);
        $('body').toggleClass('lock');
    });

// закрытие основного попапа в случае отправки заявки 
    $('.popup-accepted').click(function () {
        $('.popup').fadeOut(800);
    });


// окно "заявка принята"
    $('.popup-accepted').click(function (e) {
        e.preventDefault();
        $('.accepted').fadeIn(800);
    });

    $('.close-popup').click(function () {
        $('.accepted').fadeOut(800);
    });



///////////////////////////////////////////////////////////////////////////////////////////


    $(document).ready(function () {
        $('.vacancies__list').each(function (i) {
            $(this).find('.vacancies__item-name').click(function () {
                let id_vac = $(this).attr('id_vac')
                $.ajax({
                    url: '/ajax/VACANCIES.php',
                    type: 'POST',
                    data: {id_vac: id_vac},
                    success: function (data) {
                        $('#vacancies__wrapper').html(data);

                        $('.vacancies-popup-link').click(function (e) {
                            e.preventDefault();
                            $('#vacancies-popup' + $(this).attr('id')).fadeIn(800);
                            $('body').toggleClass('lock');
                        });

                        $('.vacancies-popup-close').click(function () {
                            $('.vacancies-popup').fadeOut(800);
                            $('body').toggleClass('lock');
                        });

                        $('.vacancies-popup-close').click(function () {
                            $('.vacancies-popup').fadeOut(800);
                            $('body').removeClass('lock');
                        });

                        /*$('.popup-accepted').click(function () {
                            $('.popup').fadeOut(800);
                        });


                        // окно "заявка принята"
                        $('.popup-accepted').click(function (e) {
                            e.preventDefault();
                            $('.accepted').fadeIn(800);
                        });

                        $('.close-popup').click(function () {
                            $('.accepted').fadeOut(800);
                        });*/

                        $(".vacancies__item-name").click(function (e) {
                            e.preventDefault();
                            $(".vacancies__item-name").removeClass('active');
                            $(this).addClass('active');
                        })

                    }
                })
            })
        })
    });


});