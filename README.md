# Custom Phaser 3 Builds with Typescript.

This is a project template with support to custom phaser builds and typescript language. This includes the phaser source code, phaser main reference file and a webpack configurations to build the custom phaser.js.
This can then be referanced and used to build a phaser game using typescript lang.

## Building Phaser
All the phaser sources and configurations are in the folder named phaser.
..src                          : The phaser source code
..types                        : The type descriptions to phaser objects
..phaser-core.js               : The phaser objects reference file used to build custom phaser.js
..phaser.ts.bk                 : A helper .ts file for enabling the auto completion of phaser.js
..webpack.config.js            : Build configurations

Run the following script to build the custom phaser file.

npm run build-phaser

This will build the custome phaser file refering phaser-core.js and using the phaser/webpack.config.js into the lib folder. And also copy the phaser.ts.bk to lib/phaser.ts. This file can be referenced by any typescript file in the game folder for importing phaser along with auto completion.

Update the phaser-core.js file to minimize the phaser.js lib build size by removing the un used items.

## Running the game in development mode
The game is run in development mode using a node http server. The webpack configurations for running the game in development mode is in the file named webpack.config-ts-dev.js. This file is referenced by the addDevMiddlewares.js to create and run a webpack-dev-middleware and webpack-hot-middleware plugin. Hence whenever there is a change in any file the build is called and changes are reflected in the browser.

There is also included a addProdMiddleware.js file. This can be upgraded according to the needs if you want to host a node http server and run this application.

## Building the game
All the game logics are added in the game folder.
..assets                       : All the game assets (dynamic loaded using Phaser.Loader) like images, fonts and audio files. This folder will be copied to the build
..scenes                       : All the game scenes
..game.ts                      : This is where the game is configured and instance is created.
..index.html                   : The main html file
..index.ts                     : Starting point of the game. This is where the logics to start the game is like the (body.onload event) is added.
..logger.ts                    : A simplified styled logger for game.

Run the following script to build the game.

npm run build-ts

This will build the game in production mode and add all the files to the dist folder. This will also copy the assets filder to the dist folder.

Feel free to download this and upgrade according to your need.

This template uses the phaser.js library. Phaser is actively developed and maintained by Photon Storm. Feel free to visit http://www.photonstorm.com/ to know more about the community and support them.

Phaser 3 docs : https://photonstorm.github.io/phaser3-docs/index.html

Tag me in twitter with your games https://twitter.com/rineesh_p

Happy coding 🔥