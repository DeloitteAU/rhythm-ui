---
package: "@rhythm-ui/alert"
title: "rui-alert"
---

# Alert


## Configuration

|Prop|Values|Notes|
|---|---|---|
|Types| **success / warning / error / info** |Sets the alert type|

## Styles

### Default

```html preview
<rui-alert>
	<p> This is an alert </p>
</rui-alert>
```

### Types

```html preview
<rui-alert type="success">
	<rui-icon></rui-icon>
	<p> This is a success alert </p>
</rui-alert>
<rui-alert type="warning">
	<rui-icon></rui-icon>
	<p> This is a warning alert </p>
</rui-alert>
<rui-alert type="error">
	<rui-icon></rui-icon>
	<p> This is an error alert </p>
</rui-alert>
<rui-alert type="info">
	<rui-icon></rui-icon>
	<p> This is an info alert </p>
</rui-alert>
```

## Behaviour

### Dismissible

```html preview
<rui-alert>
	<p> This is a dismissable alert </p>
	<rui-button slot="dismiss" label="Dismiss alert"><rui-icon></rui-icon></rui-button>
</rui-alert>
```

## Customising

If you want customise the CSS beyond the variables use the `createShadowStyles` utility function. This function allows you to customise any CSS property and update the CSS for the shadow dom that otherwise would not be possible.
```js
import {css} from 'lit-element';
import {createShadowStyles} from '@rhythm-ui/styles';

createShadowStyles({
	RuiAlert: css`
		.host {}
	`
})
```


## Extending

For more customisation of both the HTML and CSS you can extend the component.

```js
import RuiAlert from '@rhythm-ui/alert';

export class MyAlert extends RuiAlert {
	static tag() {
		return 'my-alert';
	}
}

customComponents.define(MyAlert, MyAlert.tag)
```
