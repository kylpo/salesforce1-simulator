var IPHONE_5S_WIDTH = 356;  // 320 is size of screen
var IPHONE_5S_HEIGHT = 755; // 568 is size of screen

chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('app.html', {
        bounds: {
            'width': IPHONE_5S_WIDTH,
            'height': IPHONE_5S_HEIGHT
        },
        alwaysOnTop: true,
        resizable: false,
        frame: 'none'
    });
});