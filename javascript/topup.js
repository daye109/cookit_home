$(document).ready(function() {
  $(document).scroll(function() {
    var h = $(document).scrollTop();
    if (0 != h) {
      $(".topup").addClass("opacityzero");
    } else {
      $(".topup").removeClass("opacityzero");
    }
  });
});
