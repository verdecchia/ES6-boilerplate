# Install

## Start a new project

```bash
mkdir ES6-boilerplate
cd ES6-boilerplate
npm init
```

## Add index.html

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ES6 Boilerplate</title>
    <script src="dist/bundle.js"></script>
</head>

<body>
    <h1>ES6 Boilerplate</h1>
</body>

</html>
```

## Add app/index.js (ES6 code)

```js
const fruits = ['apples', 'bananas', 'mangos', 'peaches']
const vegetables = ['tomatoes', 'cucumbers', 'watermelon']
const sayHelloTo = (collection) => {
    for (let item of collection) {
        console.warn(item)
    }
}

let basket = {
    fruits,
    vegetables,
    sayHelloTo,
}

basket.sayHelloTo(basket.fruits)
```

## Install webpack and webpack-dev-server

```bash
npm install --save-dev webpack webpack-dev-server
```

## Install babel-loader and other babel packages

```bash
npm install --save-dev babel-loader babel-core babel-preset-es2015
```

## Add .babelrc

```json
{
    "presets": ["es2015"]
}
```

## Install eslint, eslint-watch and eslint-config-google

```bash
npm install --save-dev eslint eslint-watch eslint-config-google
```

## Add .eslintignore

```text
dist
```

## Add .eslintrc.json

```json
{
    "extends": ["eslint:recommended", "google"],
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "rules": {
        "semi": [
            "error",
            "never"
        ],
        "no-console": ["error", {
            "allow": ["warn", "error"]
        }]
    }
}
```

## Install npm-run-all

```bash
npm install --save-dev npm-run-all
```

## Install live-server

```bash
npm install --save-dev live-server
```

## Add webpack.config.js

```js
const path = require('path')
module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      include: [
        path.resolve(__dirname, 'app'),
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules'),
      ],
      loader: 'babel-loader',
      query: {
        presets: ['es2015'],
      },
    }],
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css'],
  },
  devtool: 'source-map',
}

```

## Add npm script (modify package.json)

```json
{
  "scripts": {
    "start": "npm-run-all start:live-server",
    "start:webpack-dev-server": "npm-run-all --parallel dev:server lint:watch",
    "start:live-server": "npm-run-all --parallel watch dev:live-server lint:watch",
    "dev:server": "node_modules/.bin/webpack-dev-server --hot --inline --open",
    "dev:live-server": "node_modules/.bin/live-server",
    "watch": "node_modules/.bin/webpack --watch -d",
    "build": "node_modules/.bin/webpack -p",
    "lint": "node_modules/.bin/esw webpack.config.js app --color",
    "lint:watch": "npm run lint -- --watch"
  }
}
```