(function () {

function initGoogleAnalytics (id) {
  (function (c, v, a, n) {
    c.GoogleAnalyticsObject = n;

    c[n] = c[n] || function () {
      (c[n].q = c[n].q || []).push(arguments);
    };
    c[n].l = 1 * new Date();

    var s = v.createElement('script');
    s.async = true;
    s.src = a;

    var m = v.getElementsByTagName('script')[0];
    m.parentNode.insertBefore(s, m);
  })(window, document, 'https://www.google-analytics.com/analytics.js', 'ga');

  window.ga('create', id, 'auto');
  window.ga('send', 'pageview');
}

function initGoogleAnalyticsEvents () {
  window.ga('send', 'event', 'pageload.querystring', window.location.search);
  window.ga('send', 'event', 'pageload.hash', window.location.hash);

  window.ga('send', 'event', 'supports.getVRDevices', 'getVRDevices' in navigator);
  window.ga('send', 'event', 'supports.getVRDisplays', 'getVRDisplays' in navigator);

  var indexPage = document.querySelector('html[data-index]');
  if (indexPage) {
    indexPage.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('a') || e.target;
      if (!a) { return; }
      if (a.matches('.nav__top')) {
        window.ga('send', 'event', 'click.nav.mozvr_link', a.textContent);
      } else if (a.matches('.nav__item a')) {
        window.ga('send', 'event', 'click.nav.section_link', a.textContent);
      } else if (a.matches('.nav-social--item a')) {
        window.ga('send', 'event', 'click.nav.icon_link', a.querySelector('img').getAttribute('alt'));
      } else if (a.matches('.section--start .menu a')) {
        window.ga('send', 'event', 'click.start.platform_link', a.textContent);
      } else if (a.matches('.section--start a')) {
        window.ga('send', 'event', 'click.start.external_link', a.textContent);
      } else if (a.matches('.section--showcase a')) {
        window.ga('send', 'event', 'click.showcase.demo_link', a.querySelector('.showcase__title').textContent);
      } else if (a.matches('.developers__list a')) {
        window.ga('send', 'event', 'click.developers.external_link', a.textContent);
      } else if (a.matches('.section--community a')) {
        window.ga('send', 'event', 'click.community.external_link', a.textContent);
      } else if (a.matches('.section--team .person__social__link')) {
        window.ga('send', 'event', 'click.team.person_link', a.closest('.person').querySelector('h2').textContent);
      } else if (a.matches('.section--footer .footer__icons a')) {
        window.ga('send', 'event', 'click.footer.icon_link', a.querySelector('img').getAttribute('alt'));
      } else if (a.matches('.section--footer p a')) {
        window.ga('send', 'event', 'click.footer.external_link', a.textContent);
      }
    });
  }

  var gdcPage = document.querySelector('html[data-gdc]');
  if (gdcPage) {
    gdcPage.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('a') || e.target;
      if (!a) { return; }
      if (a.matches('#gdc-logo-link')) {
        window.ga('send', 'event', 'click.nav.mozvr_link', a.querySelector('img').getAttribute('alt'));
      } else if (a.matches('#gdc-info-link')) {
        window.ga('send', 'event', 'click.nav.section_link', a.textContent);
      } else if (a.matches('#gdc-continue-link')) {
        window.ga('send', 'event', 'click.nav.icon_link', a.textContent);
      }
    });
  }
}

initGoogleAnalytics('UA-24056643-3');
initGoogleAnalyticsEvents();

})();
