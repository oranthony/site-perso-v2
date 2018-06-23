$(document).ready(function() {

  $('#fullpage').fullpage({

    anchors:['1', '2', '3', '4', '5', '6', '7'],
    navigation: true,
    navigationPosition: 'right'

    });

  //alert($(window).width());

  /*if ($(window).width() < 768) {
    $(".buffer").hide();
  }
  else {
    $(".buffer").show();
    $.fn.fullpage.moveSectionDown();
  }*/

});
