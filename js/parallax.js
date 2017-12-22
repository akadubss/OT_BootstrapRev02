$(document).ready(function () {

    // Init ScrollMagic
    var controller = new ScrollMagic.Controller();

    // parallax scene Training
    var slideParallaxScene = new ScrollMagic.Scene({
            triggerElement: '.aaron-port',
            triggerHook: 1,
            duration: '200%'
        })
        .setTween(TweenMax.from('.aaron_img', 1, {
            y: '-50%',
            ease: Power0.easeNone
        }))
        .addTo(controller);

    // Mid
    var slideParallaxScene = new ScrollMagic.Scene({
            triggerElement: '.bgc-parallax',
            triggerHook: 1,
            duration: '200%'
        })
        .setTween(TweenMax.from('.bgc', 1, {
            y: '-50%',
            ease: Power0.easeNone
        }))
        .addTo(controller);

});
