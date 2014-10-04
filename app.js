var IPHONE_5S_WIDTH = 356;  // 320 is size of screen
var IPHONE_5S_HEIGHT = 755; // 568 is size of screen

var IPHONE_6_WIDTH = 417; // 375 is size of screen
var IPHONE_6_HEIGHT = 889; // 667 is size of screen

var IPHONE_6_PLUS_WIDTH = 460; // 414 is size of screen
var IPHONE_6_PLUS_HEIGHT = 983; // 736 is size of screen

var IPAD_WIDTH = 931; // 768 is size of screen
var IPAD_HEIGHT = 1240; // 1024 is size of screen

var F5_KEY = 116;
var R_KEY = 82;

window.onload = function() {
    var device = document.getElementById('device');
    var physicalButton = document.getElementById('physical-button');

    var alwaysOnTopButton = document.getElementById('on-top-button');
    var minimizeButton = document.getElementById('minimize-window-button');
    var closeButton = document.getElementById('close-window-button');

    var addressBarForm = document.getElementById('address-bar');
    var urlInput = document.getElementById('url-input');

    var iphone5sButton = document.getElementById('iphone-5s-button');
    var iphone6Button = document.getElementById('iphone-6-button');
    var iphone6PlusButton = document.getElementById('iphone-6-plus-button');
    var ipadButton = document.getElementById('ipad-button');

    var webviewElement = document.querySelector('webview');

    physicalButton.addEventListener('click', function () {
        document.getElementById('options').classList.toggle('is-visible');
        document.getElementById('address-bar').classList.toggle('is-visible');
        document.getElementById('titlebar').classList.toggle('is-visible');
        physicalButton.classList.toggle('is-active');
    });

    alwaysOnTopButton.addEventListener('click', function () {
        alwaysOnTopButton.classList.toggle('is-active');

        var appWindow = chrome.app.window.current();
        appWindow.setAlwaysOnTop(!appWindow.isAlwaysOnTop());
    });

    minimizeButton.addEventListener('click', function () {
        chrome.app.window.current().minimize();
    });

    closeButton.addEventListener('click', function () {
        chrome.app.window.current().close();
    });

    iphone5sButton.addEventListener('click', function () {
        if (iphone5sButton.classList.contains('is-active')) {
            return;
        }

        iphone5sButton.classList.add('is-active');
        iphone6Button.classList.remove('is-active');
        iphone6PlusButton.classList.remove('is-active');
        ipadButton.classList.remove('is-active');

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

        device.classList.add('tablet');

        chrome.app.window.current().resizeTo(IPAD_WIDTH, IPAD_HEIGHT);
    });

    addressBarForm.addEventListener('submit', function() {
        //TODO: validate urlInput.value
        webviewElement.setAttribute('src', urlInput.value);
    });

    document.addEventListener('keydown', function (event) {
        if (event.keyCode === F5_KEY) {
            webviewElement.reload();
        } else if (event.keyCode == R_KEY && (event.ctrlKey || event.metaKey)) {
            webviewElement.reload();
        }
    });
};
