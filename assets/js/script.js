(function ($) {
    "use strict";

    var grandmargherita_script = {        

        /* ============================================================ */
        /* Scroll Top
        /* ============================================================ */
        scroll_to_top: function() {
            $('body').append(
                "<a href='#top' title='Scroll Top' id='scroll-top' class='topbutton btn-hide'><i class='fal fa-long-arrow-up'></i></a>"
            );
            var $scrolltop = $('#scroll-top');
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > $(this).height()) {
                    $scrolltop.addClass('btn-show').removeClass('btn-hide');
                } else {
                    $scrolltop.addClass('btn-hide').removeClass('btn-show');
                }
            });
            $("a[href='#top']").on('click', function () {
                $('html, body').animate(
                    {
                        scrollTop: 0,
                    },
                    'normal'
                );
                return false;
            });
        },

        

        /* ============================================================ */
        /* Mobile Menu Integration
        /* ============================================================ */
        mobile_menu: function() {

            function mobile_menu(selector, actionSelector) {
                var mobile_menu = $(selector);
                mobile_menu.on("click", function() {
                    $(selector).toggleClass('is-menu-open');
                });
                
                var hamburgerbtn = $(selector);
                hamburgerbtn.on("click", function() {
                    $(actionSelector).toggleClass('is-menu-open');
                });
        
                $(document).on('click', function(e) {
                    var selectorType = $(actionSelector).add(mobile_menu);
                    if (selectorType.is(e.target) !== true && selectorType.has(e.target).length === 0) {
                        $(actionSelector).removeClass("is-menu-open");
                        $(selector).removeClass("is-menu-open");
                    }          
                });
            
            };
            mobile_menu('.toggler-menu', '.mobile-menu, body');
        },

        /* ============================================================ */
        /* Swiper Slider 
        /* ============================================================ */
        swiperCarousel: function () {

            var swiperSlider = $('.swiper');
            if (swiperSlider.length) {

                var room_list_slider = new Swiper('.room-photos-slider', {
                    slidesPerView: 1,
                    loop: true,
                    speed: 1000,
                    navigation: {
                        nextEl: ".room-photos-slider .button-next",
                        prevEl: ".room-photos-slider .button-prev",
                    }, 
                });

                var room_inner_decoration_thumbs = new Swiper('.room-photos-slider-thumb', {
                    slidesPerView: 3,
                    loop: true,
                    speed: 1000,
                    spaceBetween: 5,
                    freeMode: false,
                    autoplay: {
                        delay: 3000,
                    },
                    breakpoints: {
                        576: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 5,
                            spaceBetween: 15,
                        },
                        992: {
                            slidesPerView: 6,
                            spaceBetween: 20,
                        },
                    },
                });
                
                var room_inner_decoration = new Swiper('.room-inner-slider', {
                    slidesPerView: 1,
                    loop: true,
                    speed: 1000,
                    spaceBetween: 15,
                    navigation: {
                        nextEl: ".room-inner-slider .slider-button-next",
                        prevEl: ".room-inner-slider .slider-button-prev",
                    }, 
                    autoplay: {
                        delay: 3000,
                    },
                    thumbs: {
                        swiper: room_inner_decoration_thumbs,
                    },
                });
            }
        },

        /* ============================================================ */
        /* General
        /* ============================================================ */
        general: function () {
            $('.main-menu .sidebar-toggler').on("click", function() {
                $('.sidebar').addClass('active');
            });
            $('header .sidebar .sidebar-close').on("click", function() {
                $('header .sidebar').removeClass('active');
            });
        },

        /* ============================================================ */
        /* Background Image
        /* ============================================================ */
        background_image: function() {
            $("[data-bg-color], [data-bg-image], [data-color]").each(function() {
                var $this = $(this);

                if( $this.attr("data-bg-image") !== undefined ){
                    $this.css("background-image", "url("+ $this.attr("data-bg-image") +")");    
                    $this.css("background-size", $this.attr("data-bg-size"));
                    $this.css("background-repeat", $this.attr("data-bg-repeat"));
                    $this.css("background-position", $this.attr("data-bg-position"));
                    $this.css("background-blend-mode", $this.attr("data-bg-blend-mode"));
                }
                // Background Color    
                if( $("[data-bg-color]") ){
                    $this.css("background-color", $this.attr("data-bg-color") );
                }
                // Background Color   
                if( $("[data-color]") ){
                    $this.css("color", $this.attr("data-color") );
                }
            });
        },


        
        initialize: function() {
			grandmargherita_script.mobile_menu();
			grandmargherita_script.swiperCarousel();
			grandmargherita_script.general();
			grandmargherita_script.background_image();
			grandmargherita_script.scroll_to_top();
		}
    };
    
    $(function() {
		grandmargherita_script.initialize();
	});
    /* ============================================================ */
    /* PRELOADER
    /* ============================================================ */
    $(window).on('load', function() {
        $(".pre_loader").fadeOut();     
    });
})(jQuery);