# mozvr.com

New http://mozvr.com/ site


## Installation

Clone the repo:

    git clone --recursive git@github.com:MozVR/mozvr.com.git
    cd mozvr.com

To install the Node dependencies:

    npm install


## Development

To serve the site from the simple server:

    npm run dev

Then launch the site from your favourite browser:

[__http://localhost:8080/__](http://localhost:8080/)

If you wish to serve the site from a different port:

    PORT=8000 npm run dev

To update the repo later:

    git pull --rebase
    git submodule update --init --recursive


## Deployment

To deploy the site to GitHub Pages:

    npm run ghpages

To deploy the site to __your__ GitHub Pages:

    npm run ghpages your_username
