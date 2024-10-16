(function ($) {
  $(document).ready(function () {
    // Hide/Show flags on click
    $(document).on('click', '.default-flag', function (e) {
      e.stopPropagation(); // Prevent the click event from bubbling up
      $('.all-flags').toggleClass('active');
    });

    // Hide flags when clicking outside
    $(document).on('click', function (e) {
      if (!$(e.target).closest('.default-flag').length && !$(e.target).closest('.all-flags').length) {
        $('.all-flags').removeClass('active'); // Hide the flags
      }
    });
  });
})(jQuery);