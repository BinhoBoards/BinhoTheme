(function ($) {
  $(document).ready(function () {
    // Create an interval to check for the style element every 500ms
    var intervalId = setInterval(function () {
      var postscriptStyles = $('#ps__bis_desktop_styles');
      
      if (postscriptStyles.length) {
        postscriptStyles.remove(); // Remove the style element if found
        clearInterval(intervalId);  // Stop checking once the style is removed
        
        // Dynamically load the custom.css file from the assets folder
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = postscriptCssPath; // Use the path passed from the Liquid file

        // Append the link element to the <head> section to apply custom.css
        document.head.appendChild(link);
      }
    }, 5); // Check every 5 milliseconds
  });
})(jQuery);