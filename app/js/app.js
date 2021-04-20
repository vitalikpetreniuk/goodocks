$(".accordeon .answer").hide().prev().click(function() {
    $(this).parents(".accordeon").find(".answer").not(this).slideUp(400).prev().removeClass("active");
    $(this).next().not(":visible").slideDown(400).prev().addClass("active");
});
$(document).ready(function(){

    if($("#slider").length > 0)
    {
        const slider = $("#slider").owlCarousel({
            loop:false,
            nav:true,
            items:1,
            dots:true
        });
        $("a.gallery").fancybox({
        });
    }
    if($("#slider2").length > 0)
    {
        const slider2 = $("#slider2").owlCarousel({
            margin: 15,
            loop:false,
            nav:true,
            dotsEach:true,
            items:2,
            dots:true
        });
        $("a.gallery").fancybox({
        });
    }

    $('.owl-dot').each(function(){
        $(this).children('span').text($(this).index()+1);
    });
    let f_click = false;
    function resized(){
        if ( $(window).width() < 992 ) {
            if(f_click === false)
            {
                $(".center-block-2 .menu > a .arr1").on('click', function(event) {
                    event.preventDefault()
                    event.stopPropagation();
                    $(this).closest(".center-block-2 .menu > a").siblings(".subm-wrapper").slideToggle(500);
                    $(this).toggleClass("opened");
                });

                $(".center").on('click', function() {
                    $(this).toggleClass("click")
                    $(" .header .center-block-2 ").toggle();
                    $(" body ").toggleClass("pos-fixed");
                    $(" .subm-wrapper ").hide();
                    $(".center-block-2 .menu > a .arr1").removeClass("opened");
                });
            }
            f_click = true;
        }
    }

    $(window).on('resize', function() {
        resized();
    });
    $(window).on('load', function() {
        resized();
    });
    /**/
});
