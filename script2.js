$( document ).ready(function() {
    $(".item-start").find('.image').css('display', 'block');
  });


    function switchMedia(width) {

    if (width.matches) { 

      $(".name").find('a').css({"position":"absolute","top":"6px","right":"6px","margin":"9px",});


      $(".item").click(function(){
        let specific = $(this).clone();
        $(".caption").append().html(specific.attr("content"));
        $(".largerimage").append().html(specific.removeAttr('width'));
        $(".largerimage").find('.image').css('display', 'block');
        $(".largerimage").find('.article').css('display', 'block');
        $(".largerimage").find('.date').css('display', 'none');
        $(".largerimage").find('.blurb').css('display', 'none');
        $(".largerimage").find('.item').css('padding', '0px');
        $(".largerimage").find('.item-start').css('display', 'none');
      });

    } 

    else {
        $(".name").find('a').css('margin-bottom','20px');
        $(".main").find('.division').css('display','hidden');

        $(".item").click(function(){
          let specific = $(this).clone();
          $(".caption").append().html(specific.attr("content"));
          $(".largerimage").append().html(specific.removeAttr('width'));
          $(".largerimage").find('.image').css('display', 'block');
          $(".largerimage").find('.article').css('display', 'block');
          $(".largerimage").find('.date').css('display', 'none');
          $(".largerimage").find('.blurb').css('display', 'none');
          $(".largerimage").find('.item').css('padding', '0px');
        });
       }

    }


    var width = window.matchMedia("(max-width: 700px)")
    switchMedia(width) 
    width.addListener(switchMedia) 