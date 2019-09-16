---
package: "@rhythm-ui/badge"
title: "rui-badge"
---

# rui-badge

Lorem ipsum ...

## Configuration

|Prop|Values|Notes|
|---|---|---|
| prop | value options | Lorem ipsum... |


## Styles

### Default

```html preview
<rui-badge value="1">
	<rui-icon src="https://image.flaticon.com/icons/png/128/25/25634.png">
	</rui-icon>
</rui-badge>
```

### Types

```html preview
<rui-badge value="success" type="success">
	<h2>This badge is a </h2>
</rui-badge>

<rui-badge value="warning" type="warning">
	<h2>This badge is a </h2>
</rui-badge>

<rui-badge value="error" type="error">
	<h2>This badge is an </h2>
</rui-badge>

<rui-badge value="info" type="info">
	<h2>This badge is an </h2>
</rui-badge>
```


## Behaviour
Lorem ipsum ...


## Customising

If you want customise the CSS beyond the variables use the `createShadowStyles` utility function. This function allows you to customise any CSS property and update the CSS for the shadow dom that otherwise would not be possible.
```js
import {css} from 'lit-element';
import {createShadowStyles} from '@rhythm-ui/styles';

createShadowStyles({
	rui-badge: css`
		.host {}
	`
})
```


## Extending

For more customisation of both the HTML and CSS you can extend the component.

```js
import Ruirui-badge from '@rhythm-ui/badge';

export class Myrui-badge extends Ruirui-badge {
	static tag() {
		return 'my-badge';
	}
}

customComponents.define(Myrui-badge, Myrui-badge.tag)
```
