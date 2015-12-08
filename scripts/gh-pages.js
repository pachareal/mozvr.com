#!/usr/bin/env node

/**
 * Fancy script to deploy to GitHub Pages
 * ======================================
 *
 * Sample usage
 * ------------
 *
 * % node ./scripts/gh-pages
 * gh-pages -d dist -r git@github.com:MozVR/mozvr.com.git
 *
 * % node ./scripts/gh-pages cvan
 * gh-pages -d dist -r git@github.com:cvan/mozvr.com.git
 *
 * % node ./scripts/gh-pages git@github.com:cvan/mozvr.com.git
 * gh-pages -d dist -r git@github.com:cvan/mozvr.com.git
 *
 */

var spawn = require('child_process').spawn;

var ghpages = require('gh-pages');
var path = require('path');

var settings = {
  directory: '_prod',
  repo: {
    username: 'MozVR',
    name: 'mozvr.com'
  }
};

var arg = process.argv[2];
if (arg) {
  if (arg.indexOf(':') === -1) {
    settings.repo.username = arg;
  } else {
    settings.repo.url = arg;
    var usernameMatches = arg.match(':(.+)/');
    if (usernameMatches) {
      settings.repo.username = usernameMatches[1];
    }
  }
}

if (!settings.repo.url) {
  settings.repo.url = 'git@github.com:' + settings.repo.username + '/' +
                      settings.repo.name + '.git';
}

settings.repo.ghPagesUrl = 'https://' + settings.repo.username +
                           '.github.io/' + settings.repo.name + '/';

console.log('Publishing to', settings.repo.url);

// Wipe out the checkout from scratch every time in case we change repos.
ghpages.clean();

// Publish to GitHub Pages from `prod/` directory.
ghpages.publish(path.join(process.cwd(), settings.directory), {
  repo: settings.repo.url,
  dotfiles: true,
  logger: console.log.bind(console)
}, function () {
  console.log('Published');
  console.log(settings.repo.ghPagesUrl);
  spawn('open', [settings.repo.ghPagesUrl]);
});
