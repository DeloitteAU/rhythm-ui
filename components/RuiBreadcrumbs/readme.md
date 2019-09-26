---
package: "@rhythm-ui/breadcrumbs"
title: "Breadcrumbs"
category: "elements"
---

# Breadcrumbs

A breadcrumb trail consists of a list of links to the parent pages of the current page in hierarchical order.
It helps users find their place within a website or web application.

## Accessibility

This component adheres to [3.4 Breadcrumb](https://www.w3.org/TR/wai-aria-practices/#breadcrumb) in the W3C Guidelines.

- To prevent screen reader announcement of the visual separators between links, they are added via CSS
- The `aria-current="page"`attribute will be automatically added to the last child

## Basic usage

```html preview
<rui-breadcrumbs>
	<a href="#">Home</a>
	<a href="#">Link 1</a>
	<a href="#">Link 2</a>
	<a href="#">Current</a>
</rui-breadcrumbs>
```

## Limit to max breadcrumbs

You can define the maximum number of crumbs to initially display by setting the `max` attribute.

```html preview
<rui-breadcrumbs max="3">
	<a href="#">Home</a>
	<a href="#">Link 1</a>
	<a href="#">Link 2</a>
	<a href="#">Link 3</a>
	<a href="#">Link 4</a>
	<a href="#">Link 5</a>
	<a href="#">Current</a>
</rui-breadcrumbs>
```

## Attributes

Events triggered by actions inside the component.

| Attribute | Value  | Description                                                |
|-----------|--------|------------------------------------------------------------|
|`max` | number | Specifies the maximum breadcrumbs allowed to initially display. |

## Events

Events triggered by actions inside the component.

| Attribute | Value  | Description                                 |
|-----------|--------|---------------------------------------------|
|`onexpand` | script | Fires when hidden breadcrumbs are expanded. |

## Styling

> Styles are automatically applied to the anchor element child. These styles may be overriden by targeting the anchor element through your own stylesheets.


To extend and override templates or methods

```js
import RuiBreadcrumbs from '@rhythm-ui/breadcrumbs';

class MyComponent extends RuiBreadcrumbs {
	// Your overrides
}

customElements.define('my-component', MyComponent);
```