# react-exercises

Exercise database app built with [React](https://reactjs.org/) and [Material-UI](https://material-ui.com/) using [Webpack](https://webpack.js.org/) and [Babel](https://babeljs.io/docs/en).

## ☘️ Branches

This `master` branch houses the most up-to-date code. For a particular topic, switch to one of the following branches.

#### ⚡ SPA bundle size-optimizations

- **before** at [`spa/unoptimized`](https://github.com/alex996/react-exercises/tree/spa/unoptimized), and
- **after** at [`spa/optimized`](https://github.com/alex996/react-exercises/tree/spa/optimized)
  - [compare branches](https://github.com/alex996/react-exercises/compare/spa/unoptimized...spa/optimized) to view the diff, and
  - see [README](https://github.com/alex996/react-exercises/tree/spa/unoptimized#readme) for a complete walkthrough

#### 🚀 SPA to SSR refactoring

- **before** at [`ssr/starter`](https://github.com/alex996/react-exercises/tree/ssr/starter), and
- **after** at [`ssr/final`](https://github.com/alex996/react-exercises/tree/ssr/final)
  - [compare branches](https://github.com/alex996/react-exercises/compare/ssr/starter...ssr/final) to view the diff, and
  - see the Markdown [presentation](https://github.com/alex996/react-exercises/tree/ssr/starter#readme) from the video

## 🔗 References

### ▶️ YouTube

This is a companion repo for [Material-UI video series](https://www.youtube.com/watch?v=xm4LX5fJKZ8&list=PLcCp4mjO-z98WAu4sd0eVha1g-NMfzHZk) on YouTube. Check out the playlist for all episodes.

### 📖 Medium

I also wrote [*Meet Material-UI — your new favorite user interface library*]( https://medium.freecodecamp.org/meet-your-material-ui-your-new-favorite-user-interface-library-6349a1c88a8c) on Medium freeCodeCamp. Check it out for an introduction to Material-UI.


### ⏳ CodeSandbox

You can find code for each video on CodeSandbox.

- [#1-2 Intro / Grid Layout](https://codesandbox.io/s/r0o15l975q)
- [#3-4 Data Store / Lists, Tabs & Typography](https://codesandbox.io/s/7j9krpx9l1)
- [#5-6 Dialogs & Icons / Forms, Inputs & Styling](https://codesandbox.io/s/731j3kmyx6)
- [#7-9 Lists & IconButtons / Forms (Part 1 & 2)](https://codesandbox.io/s/r51wkwp7ko)
- [#10-11 CSS-in-JS / Styling with JSS](https://codesandbox.io/s/w64k1090o8)
  - [old #10-11 with broken Edit](https://codesandbox.io/s/y3nvl77jqz)
- [#12 Theming (Part 1)](https://codesandbox.io/s/0p069lyyyv)
- [#13-14 Theming (Part 2 & 3)](https://codesandbox.io/s/8y1yol3p6l)
- [#15 Context API](https://codesandbox.io/s/qq4oz0ym69)

## 💻 Installation

```sh
# Clone the repo
git clone https://github.com/alex996/react-exercises.git

cd react-exercises

# Install the deps
yarn # (or npm install)
```

## 🏗️ Development

### `yarn start` or `npm start`

Serves the app at `localhost:4000` and watches files to re-builds the bundle.

### `yarn build` or `npm run build`

Builds a production bundle in `dist` folder.

### `yarn stats` or `npm run stats`

Generates Webpack stats JSON file and renders a dependency treemap.

### `yarn serve` or `npm run serve`

Statically serves the contents of `dist` folder.

## ⚠️ Breaking Changes

### Import Path

As of [`v1.0.0-rc.0`](https://github.com/mui-org/material-ui/releases/tag/v1.0.0-rc.0), the import path has been flattened:

```diff
-import { Tab } from 'material-ui/Tabs'
+import { Tab } from '@material-ui/core'
```

### Material Icons

`material-ui-icons` package has been deprecated in favor of `@material-ui/icons`. In `package.json`:

```diff
-"material-ui-icons": "^1.0.0-beta.36",
+"@materia-ui/icons": "^1.0.0",
```

### Typography Variants

- v3.x.x - configure the theme

```js
const theme = createMuiTheme({
  // ...
  typography: {
    useNextVariants: true,
  },
}
```

- v4.x.x - latest variants are applied by default 🎉

```diff
-typography: {
-  useNextVariants: true,
-},
```

### Components

- Button

```diff
-<Button variant='raised' />
+<Button variant='contained' />
```

```diff
-<Button variant='fab' />
+<Fab />
```

- Tabs

```diff
-<Tabs scrollable />
+<Tabs variant='scrollable' />
```

## ℹ️ Other

### Named Imports

Uses [tree shaking](https://webpack.js.org/guides/tree-shaking/) for convenient [top-level imports](https://material-ui.com/guides/minimizing-bundle-size/#how-to-reduce-the-bundle-size-) like above.

### Source Maps

Uses [`cheap-module-source-map`](https://webpack.js.org/configuration/devtool/) for debugging.

### Browser Support

Uses [`@babel/polyfill`](https://babeljs.io/docs/en/babel-polyfill.html) to support [popular browsers](http://browserl.ist/?q=%3E1%25%2C+not+ie+11%2C+not+op_mini+all).
