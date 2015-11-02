# aframe.io

Local Path | Local URL  | External URL | Description
---------- | ---------- | ------------ | -----------
[`./public/index.html`](https://github.com/mozvr/aframe-site/blob/master/public/index.html) | [http://localhost:3000/](http://localhost:3000/) | https://aframe.io/ | A-Frame Library Main Site


## Installation

To install the Node dependencies:

    npm install


## Development

To serve the site from the simple server:

    npm run dev

Then launch the site from your favourite browser:

[__http://localhost:3000/__](http://localhost:3000/)

If you wish to serve the site from a different port:

    AFRAME_PORT=8000 npm run dev

### Advanced

To run the server on a different port, set the `AFRAME_HOST` and `AFRAME_PORT` environment variables.


## Deployment

In production, the server is run like so:

    NODE_ENVIRONMENT=production node index.js

Alternatively:

    npm run prod

To run the server à la Heroku:

    foreman start web
