var POPOUT_WIDTH = 360;
var POPOUT_HEIGHT = 640;
var popups = {};

chrome.browserAction.onClicked.addListener(function () {
    chrome.windows.getCurrent(null, function (window) {
//        console.log(window);

//        if (window.state === "maximized") {
//            var options = {
//                state: "normal",
//                width: window.width - POPOUT_WIDTH,
//                drawAttention: true
//            };

            chrome.windows.update(window.id, {width: window.width - POPOUT_WIDTH}, launchPopup)
//        } else {
//            launchPopup();
//        }

        function launchPopup() {
            chrome.windows.create({
                url: 'https://login.salesforce.com/one/one.app',
                type: "popup",
                width: POPOUT_WIDTH,
                height: POPOUT_HEIGHT,
                left: window.width - POPOUT_WIDTH
            }, function (popup) {
                popups[popup.id] = {id: window.id, width: window.width};
            });
        }
    });
});

chrome.windows.onRemoved.addListener(function (windowId) {
    var windowBeforePopup = popups[windowId];

    if (windowBeforePopup != null) {
        chrome.windows.getCurrent(null, function (windowAfterPopup) {
            if (windowAfterPopup.width === (windowBeforePopup.width - POPOUT_WIDTH)) {
                chrome.windows.update(windowBeforePopup.id, {width: windowBeforePopup.width});
            }
        });
    }
});