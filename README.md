# react-exercises

> **Note**: use this branch along with its [companion video](https://youtu.be/CGgEPHwzCUU) to optimize the bundle size. For the latest code, see [master branch](https://github.com/alex996/react-exercises).

Exercise database app built with [React](https://reactjs.org/) and [Material-UI](https://material-ui.com/) using [Webpack](https://webpack.js.org/) and [Babel](https://babeljs.io/docs/en).

## 🚀 Optimizations

### 🔬 Polyfills

We can apply browser-specific polyfills based on their use in our code. Babel will scan our source, and only import those polyfills that our code requires, based on the target environment. Be sure *not* to import `@babel/polyfill` in your entry file. Read more at [babeljs.io](https://babeljs.io/docs/en/babel-preset-env#usebuiltins).

```diff
-"useBuiltIns": "entry"
+"useBuiltIns": "usage"
```

### 🔀 Modular imports

Material-UI exports CommonJS modules that are compatible with Node. However, even module-aware bundlers like Webpack or Rollup have a [hard time](https://github.com/rollup/rollup/wiki/Troubleshooting#tree-shaking-doesnt-seem-to-be-working) tree shaking those. It's [not entirely impossible](https://github.com/indutny/webpack-common-shake), but [certainly very challenging](https://advancedweb.hu/2017/02/07/treeshaking/#commonjs). Therefore, an import such as

```js
import { Button } from '@material-ui/core'`
```

ends up pulling in unwanted modules from the same namespace. As a workaround, [Material-UI docs](https://material-ui.com/guides/minimizing-bundle-size/#how-to-reduce-the-bundle-size-) suggest to import submodules directly, as in

```diff
-import { Button } from '@material-ui/core'`
+import Button from '@material-ui/core/Button'`
```

These imports quickly become tedious and repetitive, as the project grows. Instead, we can run our code through [`babel-plugin-import`](https://www.npmjs.com/package/babel-plugin-import). It will detect named imports in our code, and transform them into direct imports.

```diff
+[
+  "import",
+  {
+    "libraryName": "@material-ui/core",
+    "libraryDirectory": "",
+    "camel2DashComponentName": false
+  },
+  "mui-core"
+],
+[
+  "import",
+  {
+    "libraryName": "@material-ui/core/styles",
+    "libraryDirectory": "",
+    "camel2DashComponentName": false
+  },
+  "mui-core-styles"
+],
+[
+  "import",
+  {
+    "libraryName": "@material-ui/core/colors",
+    "libraryDirectory": "",
+    "camel2DashComponentName": false
+  },
+  "mui-core-colors"
+],
+[
+  "import",
+  {
+    "libraryName": "@material-ui/icons",
+    "libraryDirectory": "",
+    "camel2DashComponentName": false
+  },
+  "mui-icons"
+]
```

### 🔨 Babel Runtime Transform

When transpiling our code, Babel injects helper functions in each file. To avoid duplication across these files, we can hoist those helpers with `@babel/plugin-transform-runtime`. Read more at [babeljs.io](https://babeljs.io/docs/en/babel-plugin-transform-runtime).

```diff
+"plugins": [
+  "@babel/transform-runtime"
+]
```

### 📂 Caching

Browsers cache static assets to avoid network round-trips and speed up page load. However, when new code is deployed to production, the old cache must be invalidated to pick up the changes. We can instruct the browser to bust cache by appending a unique content-dependent hash to each filename. Read more at [webpack.js.org](https://webpack.js.org/guides/caching/).

```diff
+output: {
+  filename: '[name].[contenthash].js'
+},
```

### 🌳 Tree Shaking

As mentioned above, CommonJS modules are not tree-shakable in Webpack. Luckily, Material UI also ships with a less-known [`/es` folder](https://material-ui.com/guides/minimizing-bundle-size/#ecmascript) that exposes its components with ES6 module exports. The code in that folder is only transpiled for experimental features (Stage 3 and below), and is geared towards evergreen browsers. You would need to transpile it down to ES5 yourself, if you intend on using it with older browsers, like IE 11.

One way to target ES modules in Material UI is by manually changing the import path to

```diff
-import { Button } from '@material-ui/core'`
+import { Button } from '@material-ui/core/es'`
```

To minimize the risk of typos and make the code less verbose, we can set up an alias with Webpack

```diff
+resolve: {
+  alias: {
+    '@material-ui/core': '@material-ui/core/es'
+  }
+}
```

This will overwrite all `'@material-ui/core'` imports in our codebase, and point them to `/es`. However, it will not prevent third-party libraries from importing components directly, as in

```js
import Paper from '@material-ui/core/Paper'`
```

As a result, we'll end up with component duplicates in our build, because webpack will bundle both CommonJS and ES modules from Material-UI. To mitigate any duplication, you can use `NormalModuleReplacementPlugin`, as described in [this post](https://github.com/mui-org/material-ui/issues/10649#issuecomment-417881961) on GitHub

```diff
+new webpack.NormalModuleReplacementPlugin(
+  /^@material-ui\/core(\/|$)/,
+  resource => {
+    resource.request = resource.request.replace(
+      /^(@[^/+]+\/[^/+]+|[^/+]+)(?:\/es)?(\/.*)?$/,
+      '$1/es$2'
+    );
+  }
+),
```

## 📐 Benchmarks

To see the actual stats, you can use [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) along with [Webpack Visualizer](https://chrisbateman.github.io/webpack-visualizer/). You can quickly serve up your production build locally to check for any errors with [zeit/serve](https://github.com/zeit/serve).

## ⚡ More Optimizations

To further optimize your site, you can

- experiment with [code splitting](https://webpack.js.org/guides/code-splitting/) (e.g. [by vendors](https://webpack.js.org/plugins/split-chunks-plugin/))
- analyze your bundle for [duplicated packages](https://github.com/darrenscerri/duplicate-package-checker-webpack-plugin#readme) with diff. versions
- compress your bundle to `.gz` with [`CompressionPlugin`](https://github.com/webpack-contrib/compression-webpack-plugin)
- use [Preact](https://codeburst.io/how-i-cut-my-react-javascript-bundle-size-in-half-with-three-lines-of-code-fe7798ecbd3f), instead of React
- [pre-render](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#pre-rendering-into-static-html-files) into static HTML files
- host your static assets on a CDN
- use HTTP/2 to serve up more efficiently
