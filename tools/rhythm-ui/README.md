# Rhythm UI

## Getting Started

### Build
To build the latest bundle of rhythm UI web components - run `yarn build`. 

This will build the library into the `/dist` directory.

For modern browsers that enable ES modules, use `/dist/module/rhythm-ui.<version>.js`.

For older browsers that do not support modules, you can use the system js version of the build `/dist/nomodule/rhythm-ui.<version>-sys.js`


### Include
Once you have built the library, you can include the js file on your page as per usual, e.g.
```html
<script type="module">
    import './dist/module/rhythm-ui.1.0.0.js';
</script>
```
or 
```html
<script type="text/javascript" src="./dist/module/rhythm-ui.1.0.0.js"></script>
```

### Browser Support
Please note that support for web components is still limited and will require polyfills for older browsers.

* Browser compatibility table available [here](https://caniuse.com/#search=components)
* Polyfill download and inclusion instructions are available [here](https://www.webcomponents.org/polyfills)

## Using Rhythm UI
Once you have the rhythm ui library loaded into your page, you will have access to rhythm ui's web components. 

Currently the following custom elements are available:
* `<rui-button>` ([view package](https://github.com/DeloitteDigitalAPAC/rhythm-ui/tree/rhythm-ui-mk-2/components/RuiButton))
* `<rui-grid>` ([view package](https://github.com/DeloitteDigitalAPAC/rhythm-ui/tree/rhythm-ui-mk-2/components/RuiGrid))
* `<rui-layout>` ([view package](https://github.com/DeloitteDigitalAPAC/rhythm-ui/tree/rhythm-ui-mk-2/components/RuiLayout))
*  `<rui-story>` ([view package](https://github.com/DeloitteDigitalAPAC/rhythm-ui/tree/rhythm-ui-mk-2/components/RuiStory))

For examples of usages look at the documentation for the packages linked above. You can also open the `index.html` file located in this directory in a browser to see the components in action (ensure to run `yarn build` first).

## Useful Links
For more background on web components, we recommend looking at both the webcomponents.org and MDN introduction articles. 

* [Introduction to Web Components (webcomponents.org)](https://www.webcomponents.org/introduction)
* [Web Components Reference (MDN)](https://developer.mozilla.org/en-US/docs/Web/Web_Components)