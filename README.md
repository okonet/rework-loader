# rework-loader for webpack

Rework loader for [webpack](http://webpack.github.io/) which post-processes your CSS with [Rework](https://github.com/reworkcss/rework).

## Installation

`npm install rework-loader`

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

``` javascript
var css = require("rework!./file.css");
// => returns css post processed with your rework config
```

## Configuration

``` javascript
var rework_plugin = require('rework_plugin');

// Other parts of webpack.config

module: {
  loaders: [
    { test: /\.css$/, loader: "style-loader!css-loader!rework-loader" },
    ...
  ]
},
rework: {
  use: [rework_plugin()]
}
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)

