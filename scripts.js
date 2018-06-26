// Navigation:
$(function() {
  // Highlight active tab:
  $('.nav-menu').on('click', '.nav-item', function(event) {

    $('.nav-item').removeClass('active');
    $(this).addClass('active');

    var linked = $(this.hash);

    if (linked.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: linked.offset().top,
        duration: 800,
      });

      history.replaceState({}, '', this.hash);
    }
  });
});