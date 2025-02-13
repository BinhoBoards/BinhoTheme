(function ($) {
  $(document).ready(function () {
    // Create an interval to check for the 'Sold out' button every 500ms
    var intervalId = setInterval(function () {
      var soldOutButton = $('button.btn.btn--large[name="add"][type="submit"][disabled]');
      
      if (soldOutButton.length && soldOutButton.text().includes('Sold out')) {
        // Find and make visible the specific element by changing 'hidden' to 'block'
        var rteElement = $('#shopify-section-template--18027988254948__main .product-info-block .rte.cf');
        if (rteElement.length) {
          rteElement.css('display', 'block'); // Set display to block
        }
        clearInterval(intervalId); // Stop checking once the condition is met
      }
    }, 500); // Check every 500 milliseconds
  });
})(jQuery);