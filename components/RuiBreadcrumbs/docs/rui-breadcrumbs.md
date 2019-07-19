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
    	{"title": "Home", "url": "#"},
    	{"title": "Breadcrumb 1", "url": "#"},
		{"title": "Breadcrumb 2", "url": "#" },
		{"title": "Breadcrumb 3", "url": "#" }
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
    	{"title": "Home", "url": "#"},
    	{"title": "Breadcrumb 1", "url": "#"},
		{"title": "Breadcrumb 2", "url": "#" },
		{"title": "Breadcrumb 3", "url": "#" },
		{"title": "Breadcrumb 4", "url": "#" },
		{"title": "Breadcrumb 5", "url": "#" }
	]'
>
</rui-breadcrumbs> 
```

## Custom Seperators
If you require a custom seperator you can use the ```seperator``` slot
```html preview
<rui-breadcrumbs
	crumbs='[
    	{"title": "Home", "url": "#"},
    	{"title": "Link 1", "url": "#"},
		{"title": "Link 2", "url": "#" },
		{"title": "Link 3", "url": "#" },
		{"title": "Link 4", "url": "#" },
		{"title": "Link 5", "url": "#" }
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
	<a slot="crumb" href="#"> Link 1 <span>custom richtext</a>
	<a slot="crumb" href="#" > Link 2 </a>
	<span slot="crumb">Active Link </span>
</rui-breadcrumbs>
```

### NB: You cannot mix slotted crumbs with the ```crumbs``` attribute JSON array

## Custom Crumb Titles When Truncated
Rendering of option titles within a truncated select
uses the text content of the provided element. If this is
not wanted, you can provid an override to the 
rendered label via the `data-truncated-label` attribute

```html preview
<rui-breadcrumbs max-crumbs="2">
	<a slot="crumb" href="/#"> Link 1 </a>
	<a data-truncated-label="Link 2 Custom Label" slot="crumb" href="#" > Link 2 <span>some other content</span> </a>
	<a slot="crumb" href="#" > Link 3 </a>
	<a slot="crumb" href="#" > Link 4 </a>
	<span slot="crumb">Active Link </span>
</rui-breadcrumbs>
```

### NB: You cannot mix slotted crumbs with the ```crumbs``` attribute JSON array


 ## Variables

| CSS Variable | Default Value | Description |
| --- | --- | --- |
| --color | #000000 | The base colour for the breadcrumbs  | 
| --hover-color | #01447E | Hover colour for the breadcrumbs  | 
| --padding | 8px | padding size  | 
