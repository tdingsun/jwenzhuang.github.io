


    function switchMedia(width) {


    if (width.matches) { 

      $(".name").find('a').css({"position":"absolute","top":"4px","right":"4px","margin":"4px",});

      $(".item").click(function(){
        let specific = $(this).clone();
        $(".caption").append().html(specific.attr("content"));
        $(".largerimage").append().html(specific.removeAttr('width'));
        $(".largerimage").find('.image').css('display', 'block');
        $(".largerimage").find('.article').css('display', 'hidden');
        $(".largerimage").find('.date').css('display', 'none');
        $(".largerimage").find('.blurb').css('display', 'none');
        $(".largerimage").find('.item').css('padding', '0px');
      });

    } 

    else {
        $(".name").find('a').css('margin-bottom','20px');
        
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


