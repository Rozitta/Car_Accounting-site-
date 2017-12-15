// код каруселя слайдера
$(document).ready(function () {
    var owl = $(".owl-carousel")
    owl.owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: true,
        navText: '',
        autoHeight: true,
        center: true,
        dotsContainer: '.owl-dots',
        navContainer: '.owl-controls'
    });

    // по клику появлялся нужный слайдер
    $(".button").click(function () {
        var idActiveTitle = $(".servise__accordion__title--active").find("a").attr("href");
        switch (idActiveTitle) {
            case "#registration":
                $('.slider').addClass("slider--active");
                owl.trigger("to.owl.carousel", [0, 500]);
                break;
            case "#removal":
                $('.slider').addClass("slider--active");
                owl.trigger("to.owl.carousel", [1, 500]);
                break;
            case "#change":
                $('.slider').addClass("slider--active");
                owl.trigger("to.owl.carousel", [2, 500]);
                break;
            case "#insurance":
                $('.slider').addClass("slider--active");
                owl.trigger("to.owl.carousel", [3, 500]);
                break;
        }
    });
    // скрипт для закрытия слайдера
    $('.slider__list__close').on('click', function () {
        $('.slider').removeClass('slider--active');
    })
});