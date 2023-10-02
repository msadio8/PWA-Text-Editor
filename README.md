# Progressive Web Applications (PWA) Challenge: Text Editor


## Description

Welcome to the Progressive Web Application (PWA) Challenge: Text Editor! This web-based text editor operates within your browser, allowing you to create and edit text content seamlessly. The key feature of this app is its ability to function offline and synchronize changes made during offline sessions once you're back online. It adheres to the PWA criteria and employs various data persistence techniques to ensure data integrity, even if certain options are not supported by your browser.

To create this text editor, we have incorporated an existing application and implemented methods for retrieving and storing data using IndexedDB, a robust browser-based database. We've utilized the 'idb' package, a lightweight wrapper around the IndexedDB API, which offers a range of convenient methods for efficient data management. Notably, 'idb' is trusted and utilized by industry giants like Google and Mozilla.

## Table of Contents
* [Description](#description)
* [GitHub Repo URL](#github-repo-url)
* [Technologies Used and Documentation](#technologies-used-and-documentation)
* [Screenshots](#screenshots)
* [Installation Instructions](#installation-instructions)
* [Heroku Deployed URL](#heroku-deployed-url)

## GitHub Repo URL

You can access the project's GitHub repository by clicking [here](https://github.com/msadio8/NoSQL-Social-Network)

## Technologies Used and Documentation

* [nodemon](https://www.npmjs.com/package/nodemon): A utility that helps monitor for changes in your Node.js applications and automatically restarts the server when changes occur.

* [express](https://www.npmjs.com/package/express): A fast, unopinionated, and minimalist web framework for Node.js.

* [webpack-pwa-manifest](https://www.npmjs.com/package/webpack-pwa-manifest): A webpack plugin that generates a 'manifest.json' file for your Progressive Web Application. It includes features like auto icon resizing and fingerprinting support.

* [NodeJS](https://nodejs.org/):  JavaScript runtime that enables you to run JavaScript on the server-side.

* [concurrently](https://www.npmjs.com/package/concurrently): A tool for running multiple npm scripts concurrently.

* [babel-loader](https://www.npmjs.com/package/babel-loader): A webpack loader for transpiling JavaScript using Babel.



## Installation Instructions 

To get started with this PWA Text Editor, follow these installation steps in your integrated terminal:

1. Install webpack-pwa-manifest by running the following command:

* npm i webpack-pwa-manifest : This package generates a 'manifest.json' file for your PWA, offering features like automatic icon resizing and fingerprinting support.

2. Install babel-loader by executing the following command:

* npm i babel-loader : 

3. Install concurrently by running:

* npm i concurrently 

4. Install additional project dependencies with: 

* npm install

5. Finally, create the 'dist' folder by running the build command:

* npm run build - to create the dist folder 

## Screenshots

![Alt text](<public/images/Screenshot 2023-10-02 at 3.11.01 pm.png>)

![Alt text](<public/images/Screenshot 2023-10-02 at 3.12.27 pm.png>)

![Alt text](<public/images/Screenshot 2023-10-02 at 3.14.55 pm.png>)

![Alt text](<public/images/Screenshot 2023-10-03 at 8.07.43 am (2).png>)


## Heroku deployed url

You can access the Text Editor deployement in Heroku  by clicking [here](https://atext-editor-9b1cfb698005.herokuapp.com/)

Feel free to explore and enjoy our Progressive Web Application Text Editor! If you have any questions or encounter any issues, please don't hesitate to reach out. Happy editing!