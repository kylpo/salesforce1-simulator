var IPHONE_5S_WIDTH = 320;
var IPHONE_5S_HEIGHT = 568;

var IPHONE_6_WIDTH = 375;
var IPHONE_6_HEIGHT = 667;

var IPHONE_6_PLUS_WIDTH = 414;
var IPHONE_6_PLUS_HEIGHT = 736;

var IPAD_WIDTH = 768;
var IPAD_HEIGHT = 1024;

var TITLE_BAR_HEIGHT = 34;

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
    physicalButton.onclick = function () {
        document.getElementById("options").classList.toggle('is-visible');
        physicalButton.classList.toggle('is-active');
    };

    document.getElementById("on-top-button").onclick = function () {
        var appWindow = chrome.app.window.current();
        appWindow.setAlwaysOnTop(!appWindow.isAlwaysOnTop());
    };

    document.getElementById("minimize-window-button").onclick = function () {
        chrome.app.window.current().minimize();
    };

    document.getElementById("close-window-button").onclick = function () {
        chrome.app.window.current().close();
    };

    document.getElementById("iphone-5s-button").onclick = function () {
        chrome.app.window.current().resizeTo(IPHONE_5S_WIDTH, IPHONE_5S_HEIGHT + TITLE_BAR_HEIGHT);
    };

    document.getElementById("iphone-6-button").onclick = function () {
        chrome.app.window.current().resizeTo(IPHONE_6_WIDTH, IPHONE_6_HEIGHT + TITLE_BAR_HEIGHT);
    };

    document.getElementById("iphone-6-plus-button").onclick = function () {
        chrome.app.window.current().resizeTo(IPHONE_6_PLUS_WIDTH, IPHONE_6_PLUS_HEIGHT + TITLE_BAR_HEIGHT);
    };

    document.getElementById("ipad-button").onclick = function () {
        chrome.app.window.current().resizeTo(IPAD_WIDTH, IPAD_HEIGHT + TITLE_BAR_HEIGHT);
    };
};
