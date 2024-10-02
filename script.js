 $(function(){
        $('#menu').slicknav({
            label:"",
            brand:"PORTFOLIO"
        });
     });

     $(document).ready(function() {
        $(".skitter-large").skitter({
            dots: false,
            navigation: true,
            theme: "clean"
              });
      });

      $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
     loop:true,
    margin:100,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:false,
            loop:true
        }
    }
        });
      });



$(document).ready(function(){
    $(".progress-bar-HTML").animate({"width":"80%"},"1000",function () {
        $(".progress-bar-CSS").animate({"width":"70%"},"1000",function(){
            $(".progress-bar-JAVASCRIPT").animate({"width":"60%"},"1000",function(){
                $(".progress-bar-JQuery").animate({"width":"85%"},"1000");  
            });
        });
        });
        });

// $(document).ready(function(){
//     $(".progress-bar-CSS").animate({"width":"80%"},"1000");
// });

// $(document).ready(function(){
//     $(".progress-bar-JAVASCRIPT").animate({"width":"80%"},"1000");
// });

// $(document).ready(function(){
//     $(".progress-bar-JQuery").animate({"width":"80%"},"1000");
// });

      



