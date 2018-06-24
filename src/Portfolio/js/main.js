$(document).ready(function() {
    $('#fullpage').fullpage({
        /*menu: '#menu',
        lockAnchors: false,
        anchors:['treasure', 'delpeche'],*/
        verticalCentered: false
    });


    var $head = $(".embed").contents().find("body");
    $head.append('style="overflow: hidden"');

    $("embed").documentElement.style.overflow = 'hidden';

    //$(".embed").delay(3000).css("overflow", "hidden");

});

bioMp(document.getElementById('preview'), {
    url: 'http://m.labo-delpech.com',
    view: 'front',
    image: 'img/iphone6_front_black.png',
    height: 500
});