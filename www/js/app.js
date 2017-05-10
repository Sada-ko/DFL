$(document).foundation()
{

    //Smooth scroll
    $('a[href^="#"]').bind('click.smoothscroll',function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function () {
            window.location.hash = target;
        });
    });

//Parallax
    $(function() {
        // init controller
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "350%"}});

        // .main.faq
        new ScrollMagic.Scene({triggerElement: ".main.faq"})
            .setTween(".main.faq > .bcg", {y: "30%", ease: Linear.easeNone})
//                .addIndicators()
            .addTo(controller);

        // .main.faq
        new ScrollMagic.Scene({triggerElement: ".main.proud"})
            .setTween(".main.proud > .bcg", {y: "80%", ease: Linear.easeNone})
//                .addIndicators()
            .addTo(controller);


    });



}
