// IIFE - Setup interactions
(function($, window, document) {
    // The $ is now locally scoped

    //Toggle the side bar
    function toggleSideBar(){
        var contentElem = $('#content');
        var sideBarElem = $('#side-bar');

        if(!contentElem && !sideBarElem) return;

        sideBarElem.toggleClass("sidebar-not-visible sidebar-visible")
        contentElem.toggleClass("content-no-sidebar content-with-sidebar")

    }

    //Bind a click event
    function bindClickEvent(selector, func)
    {
        var elem = $(selector);
        if(elem) elem.on('click',func);
    }
  
    // Listen for the jQuery ready event on the document
    $(function() {
        
        //Click bindings
        bindClickEvent('#side-bar-link',toggleSideBar);

    });

}(window.jQuery, window, document));