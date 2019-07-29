---
package: "@rhythm-ui"
title: "rui-breadcrumbs"
---
# Breadcrumbs

Breadcrumbs indicate location of the current page with links back to the pages navigated through to get there. 

## Basic Usage
The `rui-breadcrumbs` component expects you to pass child elements for each of the crumbs you wish to display. 
Each child should use the `slot="crumb"` attribute and be an anchor tag. The last element passed in should be 
the `active` crumb, which should not have any `href` or `onclick` behaviour. 

```html preview
<rui-breadcrumbs>
	<a slot="crumb" href="#home">Home</a>
	<a slot="crumb" href="#b1">Breadcrumb 1</a>
	<a slot="crumb" href="#b2">Breadcrumb 2</a>
	<span slot="crumb">Breadcrumb 3</span>
</rui-breadcrumbs> 
```

## Breadcrumb Truncation
By default, the max amount of crumbs that can display before truncation is 7. If you wish to modify this value, you can set a max amount of crumbs to display before truncation via the `max-crumbs` attribute. 

```html preview
<rui-breadcrumbs max-crumbs="3">
	<a slot="crumb" href="#home">Home</a>
	<a slot="crumb" href="#b1">Breadcrumb 1</a>
	<a slot="crumb" href="#b2">Breadcrumb 2</a>
	<a slot="crumb" href="#b3">Breadcrumb 3</a>
	<a slot="crumb" href="#b4">Breadcrumb 4</a>
	<span slot="crumb">Breadcrumb 5</span>
</rui-breadcrumbs> 
```

### Titles When Truncated
Rendering of option titles within a truncated select
uses the text content of the provided element. If this is
not wanted, you can provide an override to the 
rendered label via the `data-truncated-label` attribute

```html preview
<rui-breadcrumbs max-crumbs="2">
	<a slot="crumb" href="#l1"> Link 1 </a>
	<a data-truncated-label="Link 2 Custom Label" slot="crumb" href="l2"> Link 2 <span>some other content</span> </a>
	<a slot="crumb" href="#l3" > Link 3 </a>
	<a slot="crumb" href="#l4" > Link 4 </a>
	<span slot="crumb">Active Link </span>
</rui-breadcrumbs>
```

### Custom behaviour when truncated
Clicking a truncated breadcrumb option will navigate to the elements href by default, if no href is provided 
a `rui-breadcrumbs-item-select` event will be fired, with the selected crumb available via `event.detail.crumbIndex`.

```html
<script>
	const el = document.getElementById('truncated-event-example');
	if (el) {
		el.addEventListener('rui-breadcrumbs-item-select', (e) => {
			console.log(`Crumb ${e.detail.crumbIndex} selected!`;)
		})
	}
</script>
<rui-breadcrumbs id="truncated-event-example" max-crumbs="2">
	<a slot="crumb" href="#l1"> Link 1 </a>
	<a data-truncated-label="Link 2 Custom Label" slot="crumb" href="l2"> Link 2 <span>some other content</span> </a>
	<a slot="crumb" href="#l3" > Link 3 </a>
	<a slot="crumb" href="#l4" > Link 4 </a>
	<span slot="crumb">Active Link </span>
</rui-breadcrumbs>
```

## Custom Seperators
If you require a custom seperator you can use the ```seperator``` slot
```html preview
<rui-breadcrumbs>
	<a slot="crumb" href="#home">Home</a>
	<a slot="crumb" href="#b1">Breadcrumb 1</a>
	<a slot="crumb" href="#b2">Breadcrumb 2</a>
	<a slot="crumb" href="#b3">Breadcrumb 3</a>
	<a slot="crumb" href="#b4">Breadcrumb 4</a>
	<span slot="crumb">Breadcrumb 5</span>
	<span class="chevron-right" aria-hidden="true" slot="seperator"></span>
</rui-breadcrumbs> 
```

Keep in mind that if you provide a custom seperator, you are in charge of its accessibility, remember to add appropriate aria attributes as needed.