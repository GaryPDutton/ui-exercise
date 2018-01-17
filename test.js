// IIFE - Setup interactions
(function($, window, document) {
    // The $ is now locally scoped

  
    // Listen for the jQuery ready event on the document
    $(function() {
        var elem = $('main');
        if(elem) console.log('JQuery wired up');
    });

}(window.jQuery, window, document));