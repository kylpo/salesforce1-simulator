//var IPHONE_5S_WIDTH = 320;
//var IPHONE_5S_HEIGHT = 568;
var IPHONE_5S_WIDTH = 356;
var IPHONE_5S_HEIGHT = 755;

//var IPHONE_6_WIDTH = 375;
//var IPHONE_6_HEIGHT = 667;
var IPHONE_6_WIDTH = 417;
var IPHONE_6_HEIGHT = 889;

//var IPHONE_6_PLUS_WIDTH = 414;
//var IPHONE_6_PLUS_HEIGHT = 736;
var IPHONE_6_PLUS_WIDTH = 460;
var IPHONE_6_PLUS_HEIGHT = 983;

//var IPAD_WIDTH = 768;
//var IPAD_HEIGHT = 1024;
var IPAD_WIDTH = 856;
var IPAD_HEIGHT = 1367;


//var TITLE_BAR_HEIGHT = 34;

//var IPAD_MINI_WIDTH = 768;
//var IPAD_MINI_HEIGHT = 1024;

//debugger;
//document.onload = function(e){
//    debugger;
//    document.getElementById("close").onclick = function () {
////        console.log("THERE");
//        window.close();
//    }
//};



window.onload = function() {
    var physicalButton = document.getElementById("physical-button");
    var alwaysOnTopButton = document.getElementById("on-top-button");
    var minimizeButton = document.getElementById("minimize-window-button");
    var closeButton = document.getElementById("close-window-button");
    var iphone5sButton = document.getElementById("iphone-5s-button");
    var iphone6Button = document.getElementById("iphone-6-button");
    var iphone6PlusButton = document.getElementById("iphone-6-plus-button");
    var ipadButton = document.getElementById("ipad-button");

    physicalButton.onclick = function () {
        document.getElementById("options").classList.toggle('is-visible');
        physicalButton.classList.toggle('is-active');
    };

    alwaysOnTopButton.onclick = function () {
        alwaysOnTopButton.classList.toggle('is-active');
        var appWindow = chrome.app.window.current();
        appWindow.setAlwaysOnTop(!appWindow.isAlwaysOnTop());
    };

    minimizeButton.onclick = function () {
        chrome.app.window.current().minimize();
    };

    closeButton.onclick = function () {
        chrome.app.window.current().close();
    };

    iphone5sButton.onclick = function () {
        if (iphone5sButton.classList.contains('is-active')) {
            return;
        }

        iphone5sButton.classList.add('is-active');
        iphone6Button.classList.remove('is-active');
        iphone6PlusButton.classList.remove('is-active');
        ipadButton.classList.remove('is-active');

        chrome.app.window.current().resizeTo(IPHONE_5S_WIDTH, IPHONE_5S_HEIGHT);
    };

    iphone6Button.onclick = function () {
        if (iphone6Button.classList.contains('is-active')) {
            return;
        }

        iphone5sButton.classList.remove('is-active');
        iphone6Button.classList.add('is-active');
        iphone6PlusButton.classList.remove('is-active');
        ipadButton.classList.remove('is-active');

        chrome.app.window.current().resizeTo(IPHONE_6_WIDTH, IPHONE_6_HEIGHT);
    };

    iphone6PlusButton.onclick = function () {
        if (iphone6PlusButton.classList.contains('is-active')) {
            return;
        }

        iphone5sButton.classList.remove('is-active');
        iphone6Button.classList.remove('is-active');
        iphone6PlusButton.classList.add('is-active');
        ipadButton.classList.remove('is-active');

        chrome.app.window.current().resizeTo(IPHONE_6_PLUS_WIDTH, IPHONE_6_PLUS_HEIGHT);
    };

    ipadButton.onclick = function () {
        if (ipadButton.classList.contains('is-active')) {
            return;
        }

        iphone5sButton.classList.remove('is-active');
        iphone6Button.classList.remove('is-active');
        iphone6PlusButton.classList.remove('is-active');
        ipadButton.classList.add('is-active');

        chrome.app.window.current().resizeTo(IPAD_WIDTH, IPAD_HEIGHT);
    };

//    function applyActiveClass(element) {
//        if (element === iphone5sButton) {
//
//        }
//    }
};
