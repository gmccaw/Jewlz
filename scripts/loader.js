/**
 * Created by grantmccaw on 11/3/14.
 */
var jewel = {};

// wait until main document is loaded
window.addEventListener("load", function (){

    // start dynamic loading
    Modernizr.load([
        {

            //these files are always loaded
            load: [
                "scripts/sizzle.js",
                "scripts/dom.js",
                "scripts/game.js"
            ],
            // called when all files have finished loading
            //and executing
            complete : function(){
                //show first screen
                jewel.game.showScreen("splash-screen");
            }
        }

]);

}, false);

