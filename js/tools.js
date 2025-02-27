$(document).ready(function() {

    $('.land-g-shaving-menu-item a, .land-g-shaving-welcome-btn a').click(function(e) {
        var curBlock = $($(this).attr('href'));
        if (curBlock.length == 1) {
            var curOffset = 0;
            if ($('.top-bar-menu').length == 1) {
                curOffset = $('.top-bar-menu').outerHeight();
            }
            $('html, body').animate({'scrollTop': curBlock.offset().top - curOffset});
        }
        e.preventDefault();
    });

    if ($('.top-bar-menu').length == 1) {
        $('.land-g-shaving-wrapper').addClass('land-g-shaving-wrapper-full');
    }

    $('.land-g-shaving-functions-video-preview').click(function(e) {
        $('.land-g-shaving-functions-video').html('<video autoplay muted loop playsinline poster="' + $(this).attr('data-preview') + '"><source src="' + $(this).attr('href') + '" type="video/mp4"></video>');
        e.preventDefault();
    });

    $('.land-g-shaving-catalogue-item-point-icon').click(function() {
        var curPoint = $(this).parent();
        if (!curPoint.hasClass('active')) {
            $('.land-g-shaving-catalogue-item-point.active').removeClass('active');
            curPoint.addClass('active');
            $('.land-g-shaving-catalogue-item-point-popup-mobile').html(curPoint.find('.land-g-shaving-catalogue-item-point-popup').html());
            $('.land-g-shaving-catalogue-item-point-popup-mobile').addClass('active');
        } else {
            curPoint.removeClass('active');
            $('.land-g-shaving-catalogue-item-point-popup-mobile').removeClass('active');
        }
    });

});

var landGShavingTechSwiper = null;
var landGShavingFunctionsSwiper = null;
var landGShavingUniversalSwiper = null;
var landGShavingCatalogueSwiper = null;

$(window).on('load resize', function() {

    $('.land-g-shaving-techs-list').each(function() {
        var curSlider = $(this);
        if (curSlider.find('.swiper').hasClass('swiper-initialized')) {
            landGShavingTechSwiper.destroy();
        }
        if ($(window).width() < 1220) {
            landGShavingTechSwiper = new Swiper(curSlider.find('.swiper')[0], {
                slidesPerView: 1,
                autoHeight: true,
                navigation: {
                    nextEl: curSlider.find('.swiper-button-next')[0],
                    prevEl: curSlider.find('.swiper-button-prev')[0],
                },
            });
        }
    });

    $('.land-g-shaving-functions-list').each(function() {
        var curSlider = $(this);
        if (curSlider.find('.swiper').hasClass('swiper-initialized')) {
            landGShavingFunctionsSwiper.destroy();
        }
        if ($(window).width() < 1220) {
            landGShavingFunctionsSwiper = new Swiper(curSlider.find('.swiper')[0], {
                slidesPerView: 1,
                autoHeight: true,
                navigation: {
                    nextEl: curSlider.find('.swiper-button-next')[0],
                    prevEl: curSlider.find('.swiper-button-prev')[0],
                },
            });
        }
    });

    $('.land-g-shaving-universal-slider').each(function() {
        $('.land-g-shaving-universal').css({'min-height': $('.land-g-shaving-universal-container').outerHeight()});
        var curSlider = $(this);
        if (curSlider.find('.swiper').hasClass('swiper-initialized')) {
            landGShavingUniversalSwiper.destroy();
        }
        if ($(window).width() < 1220) {
            landGShavingUniversalSwiper = new Swiper(curSlider.find('.swiper')[0], {
                slidesPerView: 1,
                navigation: {
                    nextEl: curSlider.find('.swiper-button-next')[0],
                    prevEl: curSlider.find('.swiper-button-prev')[0],
                },
            });
        }
    });

    $('.land-g-shaving-catalogue-slider').each(function() {
        var curSlider = $(this);
        if (curSlider.find('.swiper').hasClass('swiper-initialized')) {
            landGShavingCatalogueSwiper.destroy();
        }
        if ($(window).width() < 571) {
            landGShavingCatalogueSwiper = new Swiper(curSlider.find('.swiper')[0], {
                slidesPerView: 'auto',
                scrollbar: {
                    el: curSlider.find('.swiper-scrollbar')[0],
                }
            });
        }
    });

});

$(window).on('load resize scroll', function() {
    var windowScroll = $(window).scrollTop();

    $('.land-g-shaving-universal').each(function() {
        if ($(window).width() > 1219) {
            var curOffset = 0;
            if ($('.top-bar-menu').length == 1) {
                curOffset = $('.top-bar-menu').outerHeight();
            }
            if (windowScroll >= $('.land-g-shaving-universal').offset().top - curOffset) {
                $('.land-g-shaving-universal').addClass('fixed');
                var sizeFrame = $('.land-g-shaving-universal-slider-item').eq(0).outerHeight();
                var startAnimation = $('.land-g-shaving-universal').offset().top - curOffset + sizeFrame / 2;
                var stopAnimation = $('.land-g-shaving-universal').offset().top - curOffset + sizeFrame * 3;
                if (windowScroll > startAnimation) {
                    var curPercent = (windowScroll - startAnimation) / (stopAnimation - startAnimation);
                    if (curPercent < 0) {
                        curPercent = 0;
                    }
                    if (curPercent > 1) {
                        curPercent = 1;
                    }
                    if (curPercent == 0) {
                        $('.land-g-shaving-universal-slider-item').eq(0).css({'opacity': 1});
                        $('.land-g-shaving-universal-slider-item').eq(1).css({'opacity': 0});
                        $('.land-g-shaving-universal-slider-item').eq(2).css({'opacity': 0});
                        $('.land-g-shaving-universal-slider-item').eq(3).css({'opacity': 0});
                    } else if (curPercent > 0 && curPercent <= 0.33) {
                        $('.land-g-shaving-universal-slider-item').eq(0).css({'opacity': 1});
                        $('.land-g-shaving-universal-slider-item').eq(1).css({'opacity': 1});
                        $('.land-g-shaving-universal-slider-item').eq(2).css({'opacity': 0});
                        $('.land-g-shaving-universal-slider-item').eq(3).css({'opacity': 0});
                    } else if (curPercent > 0.33 && curPercent <= 0.66) {
                        $('.land-g-shaving-universal-slider-item').eq(0).css({'opacity': 1});
                        $('.land-g-shaving-universal-slider-item').eq(1).css({'opacity': 1});
                        $('.land-g-shaving-universal-slider-item').eq(2).css({'opacity': 1});
                        $('.land-g-shaving-universal-slider-item').eq(3).css({'opacity': 0});
                    } else if (curPercent > 0.66 && curPercent <= 0.75) {
                        $('.land-g-shaving-universal-slider-item').eq(0).css({'opacity': 1});
                        $('.land-g-shaving-universal-slider-item').eq(1).css({'opacity': 1});
                        $('.land-g-shaving-universal-slider-item').eq(2).css({'opacity': 1});
                        $('.land-g-shaving-universal-slider-item').eq(3).css({'opacity': 1});
                    }
                    if (windowScroll > stopAnimation) {
                        $('.land-g-shaving-universal-container').css({'margin-top': (stopAnimation - windowScroll)});
                    } else {
                        $('.land-g-shaving-universal-container').css({'margin-top': 0});
                    }
                }
            } else {
                $('.land-g-shaving-universal').removeClass('fixed');
                $('.land-g-shaving-universal-slider-item').eq(0).css({'opacity': 1});
                $('.land-g-shaving-universal-slider-item').eq(1).css({'opacity': 0});
                $('.land-g-shaving-universal-slider-item').eq(2).css({'opacity': 0});
                $('.land-g-shaving-universal-slider-item').eq(3).css({'opacity': 0});
                $('.land-g-shaving-universal-container').css({'margin-top': 0});
            }
        } else {
            $('.land-g-shaving-universal').removeClass('fixed');
            $('.land-g-shaving-universal-slider-item').eq(0).css({'opacity': 1});
            $('.land-g-shaving-universal-slider-item').eq(1).css({'opacity': 1});
            $('.land-g-shaving-universal-slider-item').eq(2).css({'opacity': 1});
            $('.land-g-shaving-universal-slider-item').eq(3).css({'opacity': 1});
            $('.land-g-shaving-universal-container').css({'margin-top': 0});
        }
    });

});