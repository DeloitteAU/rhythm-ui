---
package: "@rhythm-ui"
title: "rui-breadcrumbs"
---
#Breadcrumbs

Breadcrumbs indicate location of the current page with links back to the pages navigated through to get there. 

```html
<rui-breadcrumbs>
</rui-breadcrumbs>

```

Rui-breadcrumbs can be used with a json object or by using the Rui-links component. 

## Array
Pass in an array of objects with title and url.
The last value in the array is the active page.

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

## Manual Links
To use the rui-link you must wrap them in a list tag.

```html preview
<rui-breadcrumbs maxCrumbs='2'> 
	<a slot="crumb" href="/#"> Link 1 </a>
	<a slot="crumb" href="/#" > Link 2 </a>
	<a slot="crumb">Active Link </a>
</rui-breadcrumbs>

```


 ## Variables

| CSS Variable | Default Value | Description |
| --- | --- | --- |
| --color | #000000 | The base colour for the breadcrumbs  | 
| --hover-color | #01447E | Hover colour for the breadcrumbs  | 
| --padding | 8px | padding size  | 
