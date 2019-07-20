global.$ = window.$ = window.jQuery;

const path                                     = require('path');
const { remote }                               = require('electron');
const { Menu, BrowserWindow, MenuItem, shell } = remote;
const tradingviewPath                          = path.resolve(__dirname, 'tradingview.json')

const data = require(tradingviewPath);


const script = document.createElement('script');
script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js'
script.async = true;
script.innerHTML = JSON.stringify(data);
document.getElementById("my-widget").appendChild(script);


$(document).ready(function () {

    // Opacity Slider
    $("#transparencyRange").change(function(){
        var opacityValue = $(this).val();
        changeOpacity(opacityValue);
    });

    // Select all text when changing URL
    $("input[type='text']").click(function () {
       $(this).select();
    });

});


// Change window Opacity
// Change window Opacity
// Change window Opacity
function changeOpacity(opacity){
    $("body").css('opacity', opacity);
}



function enableClickThrough(){
    console.log("Clickthrough enabled.")
    var window = remote.getCurrentWindow();
    window.setIgnoreMouseEvents(true);

    $("#browserView").addClass("full-size");
    $(".app-controls").slideUp(200, function(){
        $(".window-chrome").slideUp(200);
    });

}


remote.BrowserWindow.getFocusedWindow().on('minimize',function(event){

    $("body").css('opacity', 0.95);
    $("#transparencyRange").val(0.95)

    $("#browserView").removeClass("full-size");
    $(".window-chrome").slideDown(200, function(){
        $(".app-controls").slideDown(200);
    });
    // remote.BrowserWindow.getAllWindows().setIgnoreMouseEvents(false);

    console.log("Clickthrough disabled");
});


// Window Controls
// Window Controls
// Window Controls

function openWebsite(){
     var window = remote.getCurrentWindow();
     window.hide();
}
function minimizeWindow(){
    var window = remote.getCurrentWindow();
    window.minimize();
}
var windowIsMaximized = false;
function maximizeWindow(){
    var window = remote.getCurrentWindow();
    const { width, height } = remote.screen.getPrimaryDisplay().workAreaSize;
    if(windowIsMaximized){
        windowIsMaximized = false;
        window.setSize(800, 600);
    }else{
        window.setSize(Math.ceil(width * .95), Math.ceil(height * .95));
        window.setPosition(Math.ceil(width * .025), Math.ceil(height * .025))
        windowIsMaximized = true;
    }
}
function closeWindow(){
    var window = remote.getCurrentWindow();
    window.close();
}
