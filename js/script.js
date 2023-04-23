$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 800,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/icons/right.png"></button>',
        responsive: [{
            breakpoint: 992,
            settings: {
                infinite: true,
                arrows: false,
                dots: true
            }
        }]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };
    
    toggleSlide('.catalog-item__link')
    toggleSlide('.catalog-item__back')

    //Modal

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });

    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });
    
    function validateForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    reqiured: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Минимальное кол-во символов: {0}")
                },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                    required: "Нам нужна эл. почта, чтобы связаться c вами",
                    email: "Ваша эл. почта должна соответствовать формату name@domain.com"
                }
            }
        });
    };

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');

    $('input[name=phone]').mask("+7 (999) 999-99-99")

    new WOW().init();
});