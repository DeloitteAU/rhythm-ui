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
```css
--rui-alert__padding: 0.75rem 1.25rem;
--rui-alert__color: #334EAF;
--rui-alert__background-color: #E7EBF7;
--rui-alert__border-size: 1px;
--rui-alert__border-color: #B7C2E8;
--rui-alert__border-radius: 0.3125rem;
```

### Types

```html preview	

<rui-alert type="success">
	<rui-icon slot="icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBkPSJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxOGMtNC40MSAwLTgtMy41OS04LThzMy41OS04IDgtOCA4IDMuNTkgOCA4LTMuNTkgOC04IDh6bTQuNTktMTIuNDJMMTAgMTQuMTdsLTIuNTktMi41OEw2IDEzbDQgNCA4LTh6Ii8+PC9zdmc+">
	</rui-icon>
	<p> This is a success alert </p>
</rui-alert>

<rui-alert type="warning">
	<rui-icon slot="icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBkPSJNMTIgNS45OUwxOS41MyAxOUg0LjQ3TDEyIDUuOTlNMTIgMkwxIDIxaDIyTDEyIDJ6bTEgMTRoLTJ2Mmgydi0yem0wLTZoLTJ2NGgydi00eiIvPjwvc3ZnPg==">
	</rui-icon>
	<p> This is a warning alert </p>
</rui-alert>

<rui-alert type="error">
	<rui-icon slot="icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBkPSJNMTQuNTkgOEwxMiAxMC41OSA5LjQxIDggOCA5LjQxIDEwLjU5IDEyIDggMTQuNTkgOS40MSAxNiAxMiAxMy40MSAxNC41OSAxNiAxNiAxNC41OSAxMy40MSAxMiAxNiA5LjQxIDE0LjU5IDh6TTEyIDJDNi40NyAyIDIgNi40NyAyIDEyczQuNDcgMTAgMTAgMTAgMTAtNC40NyAxMC0xMFMxNy41MyAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4eiIvPjwvc3ZnPg==">
	</rui-icon>
	<p> This is an error alert </p>
</rui-alert>

<rui-alert type="info">
	<rui-icon slot="icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBkPSJNMTEgMThoMnYtMmgtMnYyem0xLTE2QzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOHptMC0xNGMtMi4yMSAwLTQgMS43OS00IDRoMmMwLTEuMS45LTIgMi0yczIgLjkgMiAyYzAgMi0zIDEuNzUtMyA1aDJjMC0yLjI1IDMtMi41IDMtNSAwLTIuMjEtMS43OS00LTQtNHoiLz48L3N2Zz4=">
	</rui-icon>
	<p> This is an info alert </p>
</rui-alert>
```


## Behaviour

### Dismissible

```html preview
<rui-alert>
	<p> This is a dismissable alert </p>
	<rui-button class="dismissible" slot="dismissible" label="Dismiss alert">
		<rui-icon src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyIDE5IDYuNDF6Ii8+PC9zdmc+">
		</rui-icon>
	</rui-button>
</rui-alert>
```
```css
rui-alert rui-button {
	margin: -12px;
	--rui-button__padding: 12px;
	--rui-button__background-color: transparent;
	--rui-button__background-color-hover: transparent;
	--rui-button__background-color-focus: transparent;
	--rui-button__focus-outline: -webkit-focus-ring-color auto 5px;

}

rui-alert rui-button rui-icon {
	--rui-icon__width: 25px;
	--rui-icon__height: 25px;
	--rui-icon__color: var(--global-gray-color-3, #673AB7);
}

rui-alert rui-button:hover rui-icon {
	--rui-icon__color: var(--global-gray-color-4, #311B92);
}

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
