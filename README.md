
# Dtisvgelement
> Base SVG component with margin capabilities and d3 rendering

## Usage

**This component expects an ES6 environment**, and so if you are using this in an app,
you should drop in a polyfill library - it has been tested with [babel-polyfill] but
[core-js] or [es6-shim] may also work.

[babel-polyfill]: https://babeljs.io/docs/usage/polyfill/
[core-js]: https://www.npmjs.com/package/core-js
[es6-shim]: https://www.npmjs.com/package/es6-shim

The default export is a React Component, so you can simply import the component and use
it within some JSX, like so:

```js
import Dtisvgelement from 'component-dti-svgelement';

return <Dtisvgelement/>;
```

For more examples on usage, see [`src/example.es6`](./src/example.es6).

## Install

```bash
npm i -S component-dti-svgelement
```

## Run tests

```bash
npm test
```
