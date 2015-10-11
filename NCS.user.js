// ==UserScript==
// @name           NCS Autoloader
// @namespace      undefined
// @description    Automatically runs NCS on startup on alpha nightcore-331.
// @author         Nuvm
// @include        http://alpha.nightcore-331.net/
// @version        0.1
// @grant          none
// ==/UserScript==

var a = function() {
    var a = {
        b: function() {
            if (typeof API !== 'undefined')
                this.c();
            else
                setTimeout(function() { a.b(); }, 100);
        },
        c: function() {
            console.log('NCS Autoloader started. Getting script...');
            $.getScript('https://rawgit.com/Nuvm/NCS/master/main.js');
            console.log('....done.');
        }
    };
    a.b();
};
var b = document.createElement('script');
b.textContent = '(' + a.toString() + ')();';
document.head.appendChild(b);
