---
title: "Geting Started"
---

# Getting started

**Please note:** All Rhythm UI code is shipped in ES2017 and not ES5.

## Install Dependencies

Rhythm UI requires the following two dependencies.

In your project root folder, install the dependencies using [npm](https://docs.npmjs.com/getting-started/):

```shell
npm install @rhythm-ui/styles lit-element --save
```

## Adding Web Components

This is a general guide to using Rhythm UI Web components. Always refer to the component’s documentation or README for specific details.

To use a Rhythm UI Web component in your code.

*1.* In your project root folder, install the Web component with npm:

```shell
npm install  @rhythm-ui/some-component-name
```

*2.* Import the Web component

In a JavaScript module file:

```js
import '@rhythm-ui/some-component-name';
```

Or, In a HTML page:

```html
<script type="module" src="./path-to/some-package-name/lib/index.js"></script>
```

*3.* Render the Web component to the dom

```html
<rui-some-component></rui-some-component>
```

## Adding React Components

This is a general guide to using Rhythm UI React components. Always refer to the component’s documentation or README for specific details.

To use a Rhythm UI React component in your code.

*1.* In your project root folder, install the Web component with npm:

```shell
npm install  @rhythm-ui/some-component-name-react
```

> As a rule, all our React component package names are affixed with "-react"

*2.* Import the component

In a React file:

```js
import RuiSomeComponent from '@rhythm-ui/some-component-name-react';
```

*3.* Render the React component

```jsx
return (
	<RuiSomeComponent />
);
```

## Adding Vue Components

TBA

## Going further

- Theming