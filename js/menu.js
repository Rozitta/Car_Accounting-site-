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
// открытие меню бургера
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








//закрывает меню при клике в любое место кроме этого блока
// jQuery(function($){
// 	$(document).mouseup(function (e){ // событие клика по веб-документу
// 		var div = $(".submenu"); // тут указываем ID элемента
// 		if (!div.is(e.target) && div.has(e.target).length === 0) { // и не по его дочерним элементам
//             div.slideUp(600); // скрываем его
//             $('.navbar__items--servise').removeClass("services_menu--minus");
//         }
// 	});
// });
 //  открытие submenu при клике 
//  $(function () {
//      var openBtn = $('.navbar__items--servise'),
//          slideMenu = $('.submenu'),
//          layer = $('<div />').addClass('layer');
        
//      openBtn.on("click", function () {
//         openBtn.toggleClass("services_menu--minus");
//          if (slideMenu.is(':hidden')) {
//              layer.appendTo('body');
//              slideMenu.slideDown(600);
//          }
//      });
//  }); 
//закрывает меню при клике на услуги и любую подменюшку
//  $('.navbar__items--servise').on('click', function () {
//     $('.submenu').slideUp(600);
//     //  $('.navbar__items--servise').removeClass("services_menu--minus");
//     //  $(this).removeClass("services_menu--minus");
//      console.log(this);
//  });








jQuery(function($){
	$(document).click(function (e){ // событие клика по веб-документу
		var div = $(".submenu"); // тут указываем ID элемента
		if ($(e.target).parents('.navbar__items--servise').length ==0) { // и не по его дочерним элементам
            div.slideUp(600); // скрываем его
            $('.navbar__items--servise').removeClass("services_menu--minus");
        }
	});
});
$(function () {
    var openBtn = $('.navbar__items--servise'),
        slideMenu = $('.submenu');
        // layer = $('<div />').addClass('layer');
       
    openBtn.on("click", function () {
       openBtn.toggleClass("services_menu--minus");
        // if (slideMenu.is(':hidden')) {
        //     // layer.appendTo('body');
        //     slideMenu.slideToggle(600);
        // }
        slideMenu.slideToggle(600);
    });
}); 
//закрывает меню при клике на услуги и любую подменюшку
//  $('.navbar__items--servise').on('click', function () {
//     $('.submenu').slideUp(600);
//     //  $('.navbar__items--servise').removeClass("services_menu--minus");
//     //  $(this).removeClass("services_menu--minus");
//      console.log(this);
//  });


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
     $('.navbar__items--servise').removeClass("services_menu--minus");
 });

// активный пункт меню
var a_link = document.querySelectorAll(".navbar__list a");
var currentNav = window.location.href;
for (var i = 0; i < a_link.length; i++) {
    if (a_link[i].href == currentNav) {
        var parent = a_link[i].parentElement.parentElement;
        if (parent.className == "submenu") {
            var pr_list = parent.parentElement.firstElementChild;
            pr_list.classList.add("navbar__link--active");
        } 
            a_link[i].classList.add("navbar__link--active");
    }
}

