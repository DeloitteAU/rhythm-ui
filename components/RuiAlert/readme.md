---
package: "@rhythm-ui/alert"
title: "Alert"
category: "elements"
---

# Alert

Provide important contextual information to your users.

## Install
<pre> yarn install "@rhythm-ui/@rhythm-ui/alert" </pre>

## Accessibility
This component adheres to section [3.2 Alert](https://www.w3.org/TR/wai-aria-practices/#alert) from the W3C Guidelines. 

The component adds the `role="alert"` and `aria-live="polite"` to the host element as soon as it is rendered on the page, thus notifying the user of the existence of the alert. Please note that adding multiple alerts to a page will result in multiple alerts being called out to the users using screen readers.

## Examples and variations

### Default

The default alert component accepts any HTML element as part of it's main content section.

```html preview
<rui-alert>
	<div>
		<h5>Alert title</h5>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in malesuada lectus. Quisque tristique tellus ante, vitae pharetra nulla sollicitudin tempus  </p>
		<a href="#">This is a CTA link or action to do something</a>
	</div>
</rui-alert>
```

### Types and icons

Alert knows the following types **success | warning | error | info**, and has the ability to show an icon by using the `icon` slot. When using `rui-icon` for the slot it will automatically use the provided border-color for visual coherency unless `rui-icon` color has been set externally.

```html preview	

<rui-alert type="success">
	<rui-icon slot="icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMDAwIj4KICAgICAgICA8cGF0aCBkPSJNNi41IDEyLjI2OEw5LjYxOCAxNS41bDcuODgyLTciLz4KICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMC41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgIDwvZz4KPC9zdmc+Cg==">
	</rui-icon>
	<div>
		<p> This is a success alert </p>
	</div>
</rui-alert>

<rui-alert type="warning">
	<rui-icon slot="icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAuNSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgICAgICA8dGV4dCBmaWxsPSIjMDAwIiBmb250LWZhbWlseT0iSW50ZXItUmVndWxhciwgSW50ZXIiIGZvbnQtc2l6ZT0iMTYiIGxldHRlci1zcGFjaW5nPSItLjEyIj4KICAgICAgICAgICAgPHRzcGFuIHg9IjkuODMzIiB5PSIxOCI+ITwvdHNwYW4+CiAgICAgICAgPC90ZXh0PgogICAgPC9nPgo8L3N2Zz4K">
	</rui-icon>
	<div>
		<p> This is a warning alert </p>
	</div>
</rui-alert>

<rui-alert type="error">
	<rui-icon slot="icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwLjUiLz4KICAgICAgICA8cGF0aCBkPSJNOC40NDIgOC40NjRsNy4wNzEgNy4wNzItNy4wNzEtNy4wNzJ6Ii8+CiAgICAgICAgPHBhdGggZD0iTTE1LjUxMyA4LjQ2NGwtNy4wNzEgNy4wNzIgNy4wNzEtNy4wNzJ6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=">
	</rui-icon>
	<div>
		<p> This is an error alert </p>
	</div>
</rui-alert>

<rui-alert type="info">
	<rui-icon slot="icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS41IDEuNSkiPgogICAgICAgIDxjaXJjbGUgY3g9IjEwLjUiIGN5PSIxMC41IiByPSIxMC41IiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgogICAgICAgIDx0ZXh0IGZpbGw9IiMwMDAiIGZvbnQtZmFtaWx5PSJJbnRlci1SZWd1bGFyLCBJbnRlciIgZm9udC1zaXplPSIxNiIgbGV0dGVyLXNwYWNpbmc9Ii0uMTIiPgogICAgICAgICAgICA8dHNwYW4geD0iNy4wMDMiIHk9IjE2LjUiPj88L3RzcGFuPgogICAgICAgIDwvdGV4dD4KICAgIDwvZz4KPC9zdmc+Cg==">
	</rui-icon>
	<div>
		<p> This is an info alert </p>
	</div>
</rui-alert>
```

### Dismissible

Setting the `dismissible` property allows the alert to be dismissed. Setting this property requires the `dismissible` slot to be filled with an icon or content as the close button does not have inherited styles or content. When using `rui-icon` for the slot it will automatically use the provided font color.


```html preview
<rui-alert dismissible>
	<div>
		<p> This is a dismissable alert </p>
	</div>
	<rui-icon slot="dismissible" label="Dismiss alert" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CgogPGc+CiAgPHRpdGxlPmJhY2tncm91bmQ8L3RpdGxlPgogIDxyZWN0IGZpbGw9Im5vbmUiIGlkPSJjYW52YXNfYmFja2dyb3VuZCIgaGVpZ2h0PSI0MDIiIHdpZHRoPSI1ODIiIHk9Ii0xIiB4PSItMSIvPgogPC9nPgogPGc+CiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogIDxnIHRyYW5zZm9ybT0icm90YXRlKDQ1IDEyLjAwMDAwMDAwMDAwMDAwNSwxMS45OTk5OTk5OTk5OTk5OTYpICIgaWQ9InN2Z18xIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSJub25lIj4KICAgPHBhdGggaWQ9InN2Z18yIiBkPSJtMjAsMTJsLTE2LDBsMTYsMHptLTgsLThsMCwxNmwwLC0xNnoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPg==">
	</rui-icon>
</rui-alert>
```

## Events

Alert fires a `dismissed` event when the user dismisses the alert.

```js
    document.querySelector('rui-alert').addEventListener('dismissed', (e) => console.log(e));
```

## Attributes

Please see below for the list of properties accepted by alert:

|Prop|Values|Notes|
|---|---|---|
|Types| **success / warning / error / info** | Sets the alert type |
|dismissible| boolean | Allows the alert to be dismissed |


## Styles


