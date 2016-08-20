$(document).ready(function(){
     $(".imagenPresentacion").css({"height":$(window).height()-$(".header").height()+"px"});

     $(".down").click(function(){
          $("body,html").animate({
               scrollTop: $(".imagenPresentacion").height() + $(".header").height()+"px"
          },300);
     });

     $(".ir-arriba").click(function(){
          $("body,html").animate({
               scrollTop: "0px"
          },300);
     });

     $(window).scroll(function(){
          if( $(this).scrollTop() > 0){
               $(".ir-arriba").slideDown(300);
          }else{
               $(".ir-arriba").slideUp(300);
          }
     });

});
