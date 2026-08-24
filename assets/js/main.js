!(function($) {
    "use strict";

    // Close the mobile nav overlay after any nav link is clicked
    // (scrolling/section navigation itself is handled in index.html)
    $(document).on('click', '.nav-menu a, .mobile-nav a', function(e) {
        if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
            $('.mobile-nav-overly').fadeOut();
        }
    });

    // Mobile Navigation
    if ($('.nav-menu').length) {
        var $mobile_nav = $('.nav-menu').clone().prop({
            class: 'mobile-nav d-lg-none'
        });
        $('body').append($mobile_nav);
        $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
        $('body').append('<div class="mobile-nav-overly"></div>');

        $(document).on('click', '.mobile-nav-toggle', function(e) {
            $('body').toggleClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
            $('.mobile-nav-overly').toggle();
        });

        $(document).click(function(e) {
            var container = $(".mobile-nav, .mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
                    $('.mobile-nav-overly').fadeOut();
                }
            }
        });
    } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
        $(".mobile-nav, .mobile-nav-toggle").hide();
    }

    // jQuery counterUp
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 1000
    });

    // Skills section
    const skillLevels = {
    expert: '90%',
    advanced: '75%',
    intermediate: '60%',
    familiar: '45%'
    };


    $('.skills-content').waypoint(function () {
    $('.progress .progress-bar').each(function () {
        const level = $(this).data('level');
        $(this).css('width', skillLevels[level]);
    });
    }, {
    offset: '80%'
    });


    // Testimonials carousel (uses the Owl Carousel library)
    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            900: {
                items: 3
            }
        }
    });

    // Porfolio isotope and filter
    $(window).on('load', function() {
        var portfolioIsotope = $('.portfolio-container').isotope({
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
        });

        $('#portfolio-flters li').on('click', function() {
            $("#portfolio-flters li").removeClass('filter-active');
            $(this).addClass('filter-active');

            portfolioIsotope.isotope({
                filter: $(this).data('filter')
            });
        });

    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
        $('.venobox').venobox({
            'share': false
        });
    });

    // Portfolio details carousel
    $(".portfolio-details-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        items: 1
    });

})(jQuery);