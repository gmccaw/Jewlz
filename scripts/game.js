/**
 * Created by grantmccaw on 11/3/14.
 */
jewel.game = (function () {
    var dom = jewel.dom,
        $ = dom.$;

    //hide the active screen (if any) and show the screen with specified id
    function showScreen(screenId) {
        var activeScreen = $("#game .screen.active")[0],
            screen = $("#" + screenId)[0];
        if (activeScreen) {
            dom.removeClass(screen, "active");

        }
        dom.addClass(screen, "active");
    }
    //expose public methods
    return {
        showScreen : showScreen
    };

})();