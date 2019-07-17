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
    	{"title": "Home", "url": "/my/rul"},
    	{"title": "Link 1", "url": "/my/rul"},
		{"title": "Link 2", "url": "/my/rul" },
		{"title": "Link 3", "url": "/my/rul" },
		{"title": "Link 4", "url": "/my/rul" },
		{"title": "Link 5", "url": "/my/rul" }
	]'
>
</rui-breadcrumbs> 
```

## Custom Seperators
If you require a custom seperator you can use the ```seperator``` slot
```html preview
<rui-breadcrumbs
	crumbs='[
    	{"title": "Home", "url": "/my/rul"},
    	{"title": "Link 1", "url": "/my/rul"},
		{"title": "Link 2", "url": "/my/rul" },
		{"title": "Link 3", "url": "/my/rul" },
		{"title": "Link 4", "url": "/my/rul" },
		{"title": "Link 5", "url": "/my/rul" }
	]'
>
	<span aria-hidden="true" slot="seperator">></span>
</rui-breadcrumbs> 
```

Keep in mind that if you provide a custom seperator, you are in charge of its accessibility, remember to add appropriate aria attributes as needed.


## Custom Crumbs
If you require more control over the individual breadcrumbs, you can use the ```crumb``` slot to provide the breadcrumb items. Please keep in mind that when using this pattern, the order of crumbs is the same as the order the children appear in the component.

```html preview
<rui-breadcrumbs> 
	<a slot="crumb" href="/#"> Link 1 <span>custom richtext</a>
	<a slot="crumb" href="/#" > Link 2 </a>
	<a slot="crumb">Active Link </a>
</rui-breadcrumbs>
```

### NB: You cannot mix slotted crumbs with the ```crumbs``` attribute JSON array


 ## Variables

| CSS Variable | Default Value | Description |
| --- | --- | --- |
| --color | #000000 | The base colour for the breadcrumbs  | 
| --hover-color | #01447E | Hover colour for the breadcrumbs  | 
| --padding | 8px | padding size  | 
