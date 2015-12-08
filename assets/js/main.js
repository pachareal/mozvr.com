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

// menu tabs
function Tabs() {
  var menuTabs = document.body.querySelectorAll('.menu--tabs');
  this.activeSection = null;
  this.activeTab = null;

  for (var i = 0; i < menuTabs.length; i++) {
    var menuTab = menuTabs[i];
    var tabs = Array.from(menuTab.querySelectorAll('li'));

    tabs.forEach(function(tab) {
      var link = tab.querySelector('a[href]');

      link.addEventListener('click', function(e) {
        e.preventDefault();
        var id = link.getAttribute('href');
        var section = document.querySelector(id);
        if (!section) { return; }
        if (this.activeSection && this.activeTab) {
          this.activeSection.style.display = 'none';
          this.activeSection = null;
          this.activeTab.classList.remove('active');
          this.activeTab = null;
        }
        this.activeTab = tab;
        this.activeTab.classList.add('active');
        section.style.display = 'block';
        this.activeSection = section;
      }.bind(this))

      if (tab.dataset.menuDefault !== undefined) {
        link.dispatchEvent(new MouseEvent('click', {
          'view': window,
          'bubbles': true,
          'cancelable': true
        }));
      }
    })

  }
}

Tabs();

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
