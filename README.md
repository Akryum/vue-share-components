# An easy-to-use vue-cli template to publish components

[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> Share Vue components to the world!

A very simple [vue-cli](https://github.com/vuejs/vue-cli) template to write and publish vue plugins with `.vue` components.

Features:
 - Very easy to use template with webpack 2.0 pre-configured
 - Supports Import and Browser installation for your plugin with distribution-ready files
 - Supports Less, Sass/Scss and Stylus
 - Easy development with auto-compilation and publishing to npm

# Usage

```
npm i -g vue-cli
vue init Akryum/vue-share-components plugin-name
```

# Plugin Development

## Installation

The first time you create or clone your plugin, you need to install the default dependencies:

```
npm install
```

## Watch and compile

This will run webpack in watching mode and output the compiled files in the `dist` folder.

```
npm run dev
```

## Use it in another project

While developing, you can follow the install instructions of your plugin and link it into the project that uses it.

In the plugin folder:

```
npm link
```

In the other project folder:

```
npm link your-plugin-name
```

This will install it in the dependencies as a symlink, so that it gets any modifications made to the plugin.

## Publish to npm

You may have to login to npm before, with `npm adduser`. The plugin will be built in production mode before getting published on npm.

```
npm publish
```

## Manual build

This will build the plugin into the `dist` folder in production mode.

```
npm run build
```
