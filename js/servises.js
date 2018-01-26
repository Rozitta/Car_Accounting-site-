 // 3 секция (анимация)
 var servise__title = $(".servise__accordion__title");
 var servise__desc = $(".desc-trigger");

//  $(function () {
//      servise__title.click(function (e) {
//          e.preventDefault(); //переопределяет стандартное поведение браузера
//          servise__title.removeClass("servise__accordion__title--active");
//          $(this).toggleClass("servise__accordion__title--active");
//          servise__desc.css("display", "none"); // все блоки скрываем
//          var hash = $(e.target)[0].hash; // обьявляем переменную и туда записываем хештег ссылки по которой был клик
//          $(hash).css("display", "block"); // отображаем блок,  который соответсвует данном хештегу     
//      })
//  });

$(function () {
    servise__title.click(function (e) {
        e.preventDefault(); 
        servise__title.removeClass("servise__accordion__title--active");
        $(this).toggleClass("servise__accordion__title--active");
        servise__desc.addClass('hidden--hoverJs'); 
         var hash = $(e.target)[0].hash;
        $(hash).removeClass('hidden--hoverJs'); 
    });

    servise__title.hover(
        function (e) {
        e.preventDefault(); 
        servise__desc.addClass('hidden--hoverJs'); 
         var hash = $(e.target)[0].hash;
        $(hash).removeClass('hidden--hoverJs'); 
    },function(e){
    var hash = $('.servise__accordion__title--active').find('a').attr('href');
    servise__desc.addClass('hidden--hoverJs'); 
    $(hash).removeClass('hidden--hoverJs'); 
        
    });
});
