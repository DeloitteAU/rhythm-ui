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
	<h3>Alert title</h3>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in malesuada lectus. Quisque tristique tellus ante, vitae pharetra nulla sollicitudin tempus  </p>
	<a href="#">This is a CTA link or action to do something</a>
</rui-alert>
```

### Types

```html preview	

<rui-alert type="success">
	<rui-icon slot="icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMDAwIj4KICAgICAgICA8cGF0aCBkPSJNNi41IDEyLjI2OEw5LjYxOCAxNS41bDcuODgyLTciLz4KICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMC41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgIDwvZz4KPC9zdmc+Cg==">
	</rui-icon>
	<p> This is a success alert </p>
</rui-alert>

<rui-alert type="warning">
	<rui-icon slot="icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAuNSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgICAgICA8dGV4dCBmaWxsPSIjMDAwIiBmb250LWZhbWlseT0iSW50ZXItUmVndWxhciwgSW50ZXIiIGZvbnQtc2l6ZT0iMTYiIGxldHRlci1zcGFjaW5nPSItLjEyIj4KICAgICAgICAgICAgPHRzcGFuIHg9IjkuODMzIiB5PSIxOCI+ITwvdHNwYW4+CiAgICAgICAgPC90ZXh0PgogICAgPC9nPgo8L3N2Zz4K">
	</rui-icon>
	<p> This is a warning alert </p>
</rui-alert>

<rui-alert type="error">
	<rui-icon slot="icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwLjUiLz4KICAgICAgICA8cGF0aCBkPSJNOC40NDIgOC40NjRsNy4wNzEgNy4wNzItNy4wNzEtNy4wNzJ6Ii8+CiAgICAgICAgPHBhdGggZD0iTTE1LjUxMyA4LjQ2NGwtNy4wNzEgNy4wNzIgNy4wNzEtNy4wNzJ6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=">
	</rui-icon>
	<p> This is an error alert </p>
</rui-alert>

<rui-alert type="info">
	<rui-icon slot="icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS41IDEuNSkiPgogICAgICAgIDxjaXJjbGUgY3g9IjEwLjUiIGN5PSIxMC41IiByPSIxMC41IiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgogICAgICAgIDx0ZXh0IGZpbGw9IiMwMDAiIGZvbnQtZmFtaWx5PSJJbnRlci1SZWd1bGFyLCBJbnRlciIgZm9udC1zaXplPSIxNiIgbGV0dGVyLXNwYWNpbmc9Ii0uMTIiPgogICAgICAgICAgICA8dHNwYW4geD0iNy4wMDMiIHk9IjE2LjUiPj88L3RzcGFuPgogICAgICAgIDwvdGV4dD4KICAgIDwvZz4KPC9zdmc+Cg==">
	</rui-icon>
	<p> This is an info alert </p>
</rui-alert>
```

## Behaviour

### Dismissible

```html preview
<rui-alert dismissible={true}>
	<p> This is a dismissable alert </p>
	<rui-icon slot="dismissible" label="Dismiss alert" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CgogPGc+CiAgPHRpdGxlPmJhY2tncm91bmQ8L3RpdGxlPgogIDxyZWN0IGZpbGw9Im5vbmUiIGlkPSJjYW52YXNfYmFja2dyb3VuZCIgaGVpZ2h0PSI0MDIiIHdpZHRoPSI1ODIiIHk9Ii0xIiB4PSItMSIvPgogPC9nPgogPGc+CiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogIDxnIHRyYW5zZm9ybT0icm90YXRlKDQ1IDEyLjAwMDAwMDAwMDAwMDAwNSwxMS45OTk5OTk5OTk5OTk5OTYpICIgaWQ9InN2Z18xIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSJub25lIj4KICAgPHBhdGggaWQ9InN2Z18yIiBkPSJtMjAsMTJsLTE2LDBsMTYsMHptLTgsLThsMCwxNmwwLC0xNnoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPg==">
	</rui-icon>
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
