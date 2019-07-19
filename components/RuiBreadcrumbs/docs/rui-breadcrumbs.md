---
package: "@rhythm-ui"
title: "rui-breadcrumbs"
---
# Breadcrumbs

Breadcrumbs indicate location of the current page with links back to the pages navigated through to get there. 

## Basic Usage
If you do not need custom label elements, you can configure the breadcrumbs by passing in a JSON array containing the titles and links of the breadcrumbs. The last link given will always be the active link.

```html preview
<rui-breadcrumbs
	crumbs='[
    	{"title": "Home", "url": "#home"},
    	{"title": "Breadcrumb 1", "url": "#b1"},
		{"title": "Breadcrumb 2", "url": "#b2" },
		{"title": "Breadcrumb 3", "url": "#b3" }
	]'
>
</rui-breadcrumbs> 
```

## Breadcrumb Truncation
If you have space limitations, you can set a max amount of crumbs to display before truncation via the `max-crumbs` attribute.

```html preview
<rui-breadcrumbs
	max-crumbs="3"
	crumbs='[
    	{"title": "Home", "url": "#home"},
    	{"title": "Breadcrumb 1", "url": "#b1"},
		{"title": "Breadcrumb 2", "url": "#b2" },
		{"title": "Breadcrumb 3", "url": "#b3" },
		{"title": "Breadcrumb 4", "url": "#b4" },
		{"title": "Breadcrumb 5", "url": "#b5" }
	]'
>
</rui-breadcrumbs> 
```

## Custom Seperators
If you require a custom seperator you can use the ```seperator``` slot
```html preview
<rui-breadcrumbs
	crumbs='[
    	{"title": "Home", "url": "#home"},
    	{"title": "Link 1", "url": "#link1"},
		{"title": "Link 2", "url": "#link2" },
		{"title": "Link 3", "url": "#link3" },
		{"title": "Link 4", "url": "#link4" },
		{"title": "Link 5", "url": "#link5" }
	]'
>
	<span aria-hidden="true" slot="seperator">/</span>
</rui-breadcrumbs> 
```

Keep in mind that if you provide a custom seperator, you are in charge of its accessibility, remember to add appropriate aria attributes as needed.


## Custom Crumbs
If you require more control over the individual breadcrumbs, you can use the ```crumb``` slot to provide the breadcrumb items. Please keep in mind that when using this pattern, the order of crumbs is the same as the order the children appear in the component.

```html preview
<rui-breadcrumbs> 
	<a slot="crumb" href="#l1"> Link 1 <span>custom richtext</a>
	<a slot="crumb" href="#l2" > Link 2 </a>
	<span slot="crumb">Active Link </span>
</rui-breadcrumbs>
```

*Note: You cannot mix usage of slotted crumbs and the ```crumbs``` attribute crumbs*

### Custom Crumb Titles When Truncated
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


 ## Variables

| CSS Variable | Default Value | Description |
| --- | --- | --- |
| --color | #000000 | The base colour for the breadcrumbs  | 
| --hover-color | #01447E | Hover colour for the breadcrumbs  | 
| --padding | 8px | padding size  | 
