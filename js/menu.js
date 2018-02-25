 // активный пункт меню
 var blocks = []
 //  $(window).scroll(function () {
 //      var scrolledpx = parseInt($(window).scrollTop()) + (parseInt($(window).height()) / 1.5);
 //      var id = '';
 //      for (var i = 0; i < blocks.length; i++) {

 //          if (scrolledpx >= blocks[i].position.top) {
 //              id = blocks[i].id;
 //              if (blocks[i + 1] !== undefined && scrolledpx < blocks[i + 1].position.top) {
 //                  id = blocks[i].id;
 //              }
 //          }
 //      };
 //  $('.navbar__link').removeClass("navbar__link--active");
 //  $("[data-action='" + id + "_menu']").addClass("navbar__link--active");

 //  }
 // );

 //  $(function () {
 //      blocks.push({
 //          id: 'main',
 //          position: $('#main').offset()
 //      })
 //      blocks.push({
 //          id: 'work',
 //          position: $('#work').offset()
 //      })
 //      blocks.push({
 //          id: 'services',
 //          position: $('#services').offset()
 //      })
 //      blocks.push({
 //          id: 'contacts',
 //          position: $('#contacts').offset()
 //      })
 //  });

 //плавный переход по ссылке навигации
 //  $(document).ready(function () {
 //      $(".navbar__menu").each(function (index, elem) {
 //          $(elem).on("click", "a", function (event) {
 //              //отменяем стандартную обработку нажатия по ссылке
 //              event.preventDefault();
 //              //забираем идентификатор бока с атрибута href
 //              var id = $(this).attr('href'),
 //                  //узнаем высоту от начала страницы до блока на который ссылается якорь
 //                  top = $(id).offset().top;
 //              //анимируем переход на расстояние - top за 1500 мс
 //              $('body,html').animate({
 //                  scrollTop: top
 //              }, 800);
 //          });
 //      })
 //  });

 //плавный переход по ссылке к нужному месту по якорю
 $(document).ready(function () {
     $(".registration__part").each(function (index, elem) {
         $(elem).on("click", "a", function (event) {
             //отменяем стандартную обработку нажатия по ссылке
             event.preventDefault();
             //забираем идентификатор бока с атрибута href
             var id = $(this).attr('href'),
                 //узнаем высоту от начала страницы до блока на который ссылается якорь
                 top = $(id).offset().top-95;
             //анимируем переход на расстояние - top за 1500 мс
             $('body,html').animate({
                 scrollTop: top
             }, 800);
         });
     })
 });

 $(function () {
     var openBtn = $('.navbar__burger'),
         slideMenu = $('.burger__menu'),
         layer = $('<div />').addClass('layer');

     openBtn.on("click", function () {
         if (slideMenu.is(':hidden')) {
             layer.appendTo('body');
             slideMenu.slideDown(600);
         }
     });
 });
 // закрытие меню бургера
 $('.burger__cross').on('click', function () {
     $('.burger__menu').slideUp(600);
 });
 $('.burger__item').on('click', function () {
     $('.burger__menu').slideUp(600);

 });

 //  открытие submenu при клике и ховере
 $(function () {
     var openBtn = $('.navbar__items--servise'),
         slideMenu = $('.submenu'),
         layer = $('<div />').addClass('layer');

     openBtn.on("click", function () {
         $('.navbar__items--servise').toggleClass("services_menu--minus");
         if (slideMenu.is(':hidden')) {
             layer.appendTo('body');
             slideMenu.slideDown(600);
         }
     });
     openBtn.hover(function () {
         $('.navbar__items--servise').toggleClass("services_menu--minus");
         if (slideMenu.is(':hidden')) {
             layer.appendTo('body');
             slideMenu.slideDown(600);
         }
     });
 });
 $('.navbar__items--servise').on('click', function () {
     $('.submenu').slideUp(600);
 });


 $('.navbar__items--servise').hover(function () {
     $('.submenu').slideUp(600);
 });

 // открытие submenu при клике на планшетах
 $(function () {
     var openBtn = $('.burger__items--servise'),
         slideMenu = $(".submenu-tab"),
         layer = $('<div />').addClass('layer');


     openBtn.on("click", function () {
         $('.burger__link--submenu').toggleClass("burger__menu--minus");
         if (slideMenu.is(':hidden')) {
             layer.appendTo('body');
             slideMenu.slideDown(600);

         }
     });
 });
 $('.burger__items--servise').on('click', function () {
     $('.submenu-tab').slideUp(600);
 });

 //  активный пункт меню
 $(function () {
     $('.navbar__link').each(function () {
         var location = window.location.href;
         var link = this.href;
         if (location == link) {
             $('.navbar__link').removeClass("navbar__link--active");
             $(this).addClass('navbar__link--active');
         }
     });
 });