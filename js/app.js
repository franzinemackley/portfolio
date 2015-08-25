$(document).ready(function() {

        $(".nav").mouseenter(function() {
                $(".nav-list").show();

        })

        $(".nav").mouseleave(function() {
                $(".nav-list").hide();
        })

        $(window).scroll(function() {
                $(".masthead").css({
                        'opacity': 1 - (($(this).scrollTop()) / 300)
                });
        });

        $('a[href^="#"]').on('click', function(event) {

                var target = $($(this).attr('href'));

                if (target.length) {
                        event.preventDefault();
                        $('html, body').animate({
                                scrollTop: target.offset().top
                        }, 1000);
                }

        });

// Project image opacity 
  
        $(".thumbnails img").css("opacity", 0.5);  
          

        $(".thumbnails").hover(  
           function(){  
              $(this).find("img").stop().fadeTo("slow", 1);  
           },  
           function(){  
              $(this).find("img").stop().fadeTo("slow", 0.5);  
           });  

// Footer image opacity 

        $(".social img").css('opacity', 0.5);  
          

        $(".social li").hover(  
           function(){  
              $(this).find('img').stop().fadeTo("slow", 1);  
           },  
           function(){  
              $(this).find('img').stop().fadeTo("slow", 0.5);  
           });  

        

});

$(document).on("scroll", function() {
        if ($(document).scrollTop() > 300) {
                $(".name").hide();
                $(".name-shrink").show();
                $(".nav").addClass("shrink");
        } else {
                $(".name-shrink").hide();
                $(".name").show();
                $(".nav").removeClass("shrink");
        }
});