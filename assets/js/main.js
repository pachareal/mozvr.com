(function () {

function toArray (obj) {
  return Array.prototype.slice.apply(obj);
}

function $ (selector, parent) {
  parent = parent || document;
  return parent.querySelector(selector);
}

function $$ (selector, parent) {
  parent = parent || document;
  return toArray(parent.querySelectorAll(selector));
}

function resizeHandler (e) {
  $$('.size-to-window').forEach(function (el) {
    el.style.width = window.innerWidth + 'px';
    el.style.height = window.innerHeight + 'px';
  });
}

window.addEventListener('resize', resizeHandler);
resizeHandler();

// Adding a class so we can disable certain :hover styles on touch.
// NOTE: Not using classList for IE compatibility.
document.body.className += 'ontouchstart' in window ? ' has-touch' : ' lacks-touch';

// And a class for WebVR support.
document.body.className += 'getVRDevices' in navigator ? ' vr' : ' novr';

function initGoogleAnalytics (id) {
  (function(c, v, a, n) {
    c.GoogleAnalyticsObject = n;

    c[n] = c[n] || function() {
      (c[n].q = c[n].q || []).push(arguments);
    }, c[n].l = 1 * new Date();

    var s = v.createElement('script');
    s.async = true;
    s.src = a;

    var m = v.getElementsByTagName('script')[0];
    m.parentNode.insertBefore(s, m);
  })(window, document, 'https://www.google-analytics.com/analytics.js', 'ga');
  ga('create', id, 'auto');
  ga('send', 'pageview');
}

initGoogleAnalytics('UA-24056643-3');

})();
