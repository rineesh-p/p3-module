const express = require("express");
const logger = require("./logger");
const { resolve } = require('path');
const argv = require("./argv");
const port = require("./port");
const setup = require("./middlewares/frontendMiddleware");

const app = express();

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || "localhost";

setup(app, {
    outputPath: resolve(process.cwd(), "build"),
    publicPath: "/",
});

// use the gzipped bundle
// app.get('*.js', (req, res, next) => {
//   req.url = req.url + '.gz'; // eslint-disable-line
//   res.set('Content-Encoding', 'gzip');
//   next();
// });

// Start your app.
app.listen(port, host, async (err) => {
    if (err) {
        return logger.error(err.message);
    }

    // Connect to ngrok in dev mode
    //   if (ngrok) {
    //     let url;
    //     try {
    //       url = await ngrok.connect(port);
    //     } catch (e) {
    //       return logger.error(e);
    //     }
    //     logger.appStarted(port, prettyHost, url);
    //   }
    //   else {
    //     logger.appStarted(port, prettyHost);
    //   }
    logger.appStarted(port, prettyHost);
});
