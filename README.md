# TV Show details screen

This is an application for displaying details about a TV show. It contains an overlay screen component where all the TV show details are displayed. The data is obtained from a Restful API.

It is built using React, PostCSS with 'cssnext' features, and Webpack for bundling.

Check its [live demo here](https://bruno02221.github.io/tv-show-details/).

## Installing

For you to install this project, first you need to clone it:

```shell
git clone https://github.com/bruno02221/tv-show-details.git
```

Then you need to install the dependencies:

```
cd tv-show-details/
yarn
```

> We used `yarn` for dependency management, but you can use `npm` if you want to.

Now you're ready for starting to test and develop the project.

## Local development

After installing the project, you can start to develop using a live reload environment, just run:

```shell
yarn start
```

## Production

To build this project for production, run:

```shell
yarn build
```

The production files are created in the `dist` folder.

## Deploying

We also have a deploy script. It's helpful for deploying the project's `dist` folder to the `gh-pages` branch of its github repository.

```shell
yarn deploy
```
