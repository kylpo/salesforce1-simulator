//var PHONE_WIDTH = 360;
//var PHONE_HEIGHT = 640;

//var PHONE_WIDTH = 320;
//var PHONE_HEIGHT = 604; //568 + 34
var IPHONE_5S_WIDTH = 356;
var IPHONE_5S_HEIGHT = 755;
var popups = {};

chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('app.html', {
        bounds: {
            'width': IPHONE_5S_WIDTH,
            'height': IPHONE_5S_HEIGHT
        },
        alwaysOnTop: true,
        resizable: false,
        frame: 'none'
//        frame: {
//            type: 'chrome',
//            color: '#fff',
//            inactiveColor: '#fff'
//        }
    });
});

/*
// Performed when user clicks on the icon in their toolbar
chrome.browserAction.onClicked.addListener(function () {
    chrome.windows.getCurrent(null, function (window) {

        // Resize window to make room for popup, then launch popup
        chrome.windows.update(window.id, {width: window.width - PHONE_WIDTH}, launchPopup);

        function launchPopup() {
            chrome.windows.create({
                url: 'https://login.salesforce.com/one/one.app',
                type: "popup",
                width: PHONE_WIDTH,
                height: PHONE_HEIGHT,
                left: window.left + window.width - PHONE_WIDTH
            }, function (popup) {
                // store original window's dimensions for resize when closing popup
                popups[popup.id] = {id: window.id, width: window.width};
            });
        }
    });
});

// On a popup's close event, resize the window back to where it was unless the dimensions have changed since launching
chrome.windows.onRemoved.addListener(function (popupId) {
    var windowBeforePopup = popups[popupId];

    if (windowBeforePopup != null) {
        chrome.windows.getCurrent(null, function (windowAfterPopup) {
            if (windowAfterPopup.width === (windowBeforePopup.width - PHONE_WIDTH)) {
                chrome.windows.update(windowBeforePopup.id, {width: windowBeforePopup.width});
            }
        });
    }
});
    */