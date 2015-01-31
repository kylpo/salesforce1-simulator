var IPHONE_5S_WIDTH = 356;  // 320 is size of screen
var IPHONE_5S_HEIGHT = 755; // 568 is size of screen
var IPHONE_USER_AGENT = 'Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X; en-us) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53';

var IPHONE_6_WIDTH = 417; // 375 is size of screen
var IPHONE_6_HEIGHT = 889; // 667 is size of screen
//var IPHONE_6_USER_AGENT = 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4';

var IPHONE_6_PLUS_WIDTH = 460; // 414 is size of screen
var IPHONE_6_PLUS_HEIGHT = 983; // 736 is size of screen
//var IPHONE_6_PLUS_USER_AGENT = 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4';

var IPAD_WIDTH = 931; // 768 is size of screen
var IPAD_HEIGHT = 1240; // 1024 is size of screen
var IPAD_USER_AGENT = 'Mozilla/5.0 (iPad; CPU OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53';

var DEFAULT_URL = 'https://login.salesforce.com/one/one.app';

var F5_KEY = 116;
var R_KEY = 82;

window.onload = function() {
    var device = document.getElementById('device');
    var physicalButton = document.getElementById('physical-button');

    var alwaysOnTopButton = document.getElementById('on-top-button');
    var minimizeButton = document.getElementById('minimize-window-button');
    var closeButton = document.getElementById('close-window-button');

    var addressBarForm = document.getElementById('address-bar');
    var backButton = document.getElementById('back-button');
    var urlInput = document.getElementById('url-input');
    var refreshButton = document.getElementById('refresh-button');

    var iphone5sButton = document.getElementById('iphone-5s-button');
    var iphone6Button = document.getElementById('iphone-6-button');
    var iphone6PlusButton = document.getElementById('iphone-6-plus-button');
    var ipadButton = document.getElementById('ipad-button');

    var webviewElement = document.querySelector('webview');

    initAppState();
    addAppListeners();
    addButtonListeners();

    function initAppState() {
        webviewElement.setUserAgentOverride(IPHONE_USER_AGENT);

        chrome.storage.local.get(['url','alwaysOnTop'], function(storage) {
            // set url state
            if (storage.url != null && storage.url !== '') {
                webviewElement.setAttribute('src', storage.url);
                urlInput.value = storage.url;
            } else {
                webviewElement.setAttribute('src', DEFAULT_URL);
                //urlInput.value = DEFAULT_URL;
            }

            // set alwaysOnTop state
            if (storage.alwaysOnTop != null && storage.alwaysOnTop === false) {
                alwaysOnTopButton.classList.remove('is-active');
                chrome.app.window.current().setAlwaysOnTop(false);
            }
        });
    }

    function addAppListeners() {
        // When an event happens in storage, reflect the change in the app's state
        chrome.storage.onChanged.addListener(function (changes, areaName) {
            var url = changes.url;
            var alwaysOnTop = changes.alwaysOnTop;

            if (url != null) {
                if (url.newValue != null && url.newValue !== '') {
                    webviewElement.setAttribute('src', urlInput.value);
                } else {
                    webviewElement.setAttribute('src', DEFAULT_URL);
                }
            }

            if (alwaysOnTop != null && alwaysOnTop.newValue != null) {
                chrome.app.window.current().setAlwaysOnTop(alwaysOnTop.newValue);
            }
        });

        document.addEventListener('keydown', function (event) {
            if (event.keyCode === F5_KEY) {
                webviewElement.reload();
            } else if (event.keyCode == R_KEY && (event.ctrlKey || event.metaKey)) {
                webviewElement.reload();
            }
        });
    }

    function addButtonListeners() {
        physicalButton.addEventListener('click', function () {
            document.getElementById('options').classList.toggle('is-visible');
            document.getElementById('address-bar').classList.toggle('is-visible');
            document.getElementById('titlebar').classList.toggle('is-visible');
            physicalButton.classList.toggle('is-active');
        });

        alwaysOnTopButton.addEventListener('click', function () {
            alwaysOnTopButton.classList.toggle('is-active');

            chrome.storage.local.set({alwaysOnTop: !chrome.app.window.current().isAlwaysOnTop()});
        });

        minimizeButton.addEventListener('click', function () {
            chrome.app.window.current().minimize();
        });

        closeButton.addEventListener('click', function () {
            chrome.app.window.current().close();
        });

        backButton.addEventListener('click', function () {
            webviewElement.back();
        });

        refreshButton.addEventListener('click', function () {
            webviewElement.reload();
        });

        addressBarForm.addEventListener('submit', function () {
            //TODO: validate urlInput.value
            chrome.storage.local.set({url: urlInput.value});
        });


        iphone5sButton.addEventListener('click', function () {
            if (iphone5sButton.classList.contains('is-active')) {
                return;
            }

            iphone5sButton.classList.add('is-active');
            iphone6Button.classList.remove('is-active');
            iphone6PlusButton.classList.remove('is-active');
            ipadButton.classList.remove('is-active');

            webviewElement.setUserAgentOverride(IPHONE_USER_AGENT);
            device.classList.remove('tablet');

            chrome.app.window.current().resizeTo(IPHONE_5S_WIDTH, IPHONE_5S_HEIGHT);
        });

        iphone6Button.addEventListener('click', function () {
            if (iphone6Button.classList.contains('is-active')) {
                return;
            }

            iphone5sButton.classList.remove('is-active');
            iphone6Button.classList.add('is-active');
            iphone6PlusButton.classList.remove('is-active');
            ipadButton.classList.remove('is-active');

//            webviewElement.setUserAgentOverride(IPHONE_6_USER_AGENT);
            webviewElement.setUserAgentOverride(IPHONE_USER_AGENT);
            device.classList.remove('tablet');

            chrome.app.window.current().resizeTo(IPHONE_6_WIDTH, IPHONE_6_HEIGHT);
        });

        iphone6PlusButton.addEventListener('click', function () {
            if (iphone6PlusButton.classList.contains('is-active')) {
                return;
            }

            iphone5sButton.classList.remove('is-active');
            iphone6Button.classList.remove('is-active');
            iphone6PlusButton.classList.add('is-active');
            ipadButton.classList.remove('is-active');

//            webviewElement.setUserAgentOverride(IPHONE_6_PLUS_USER_AGENT);
            webviewElement.setUserAgentOverride(IPHONE_USER_AGENT);
            device.classList.remove('tablet');

            chrome.app.window.current().resizeTo(IPHONE_6_PLUS_WIDTH, IPHONE_6_PLUS_HEIGHT);
        });

        ipadButton.addEventListener('click', function () {
            if (ipadButton.classList.contains('is-active')) {
                return;
            }

            iphone5sButton.classList.remove('is-active');
            iphone6Button.classList.remove('is-active');
            iphone6PlusButton.classList.remove('is-active');
            ipadButton.classList.add('is-active');

            webviewElement.setUserAgentOverride(IPAD_USER_AGENT);
            device.classList.add('tablet');

            chrome.app.window.current().resizeTo(IPAD_WIDTH, IPAD_HEIGHT);
        });
    }
};
