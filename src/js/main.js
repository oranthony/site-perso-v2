$(document).ready(function() {
  $('#fullpage').fullpage({

    anchors:['firstPage', 'secondPage', 'thirdPage'],
    navigation: true,
    navigationPosition: 'right'

    });

  $.fn.fullpage.moveSectionDown();
});
