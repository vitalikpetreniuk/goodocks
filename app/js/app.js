$(".accordeon .answer").hide().prev().click(function() {
    $(this).parents(".accordeon").find(".answer").not(this).slideUp(400).prev().removeClass("active");
    $(this).next().not(":visible").slideDown(400).prev().addClass("active");
});
$(document).ready(function(){
    if($("#slider").length > 0)
    {
        const slider = $("#slider").owlCarousel({
            loop:true,
            nav:true,
            items:1,
            dots:true
        });
    }
    if($("#slider2").length > 0)
    {
        const slider2 = $("#slider2").owlCarousel({
            margin: 15,
            loop:true,
            nav:true,
            dotsEach:true,
            items:2,
            dots:true
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
                $(".center-block-2 .menu > a").on('click', function(event) {
                    event.stopPropagation();
                    $(this).siblings(".subm-wrapper").slideToggle(500);
                });

                $(".center").on('click', function() {
                    $(this).toggleClass("click")
                    $(" .header .center-block-2 ").toggle();
                    $(" body ").toggleClass("pos-fixed");
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
});
$(document).ready(function() {

});