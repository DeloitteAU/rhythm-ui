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
		{"title": "Home", "url": "/#"},
		{"title": "Link 1", "url": "/#"},
		{"title": "Link 2", "url": "/#"},
		{"title": "Link 3", "url": "/#"},
		{"title": "Link 4", "url": "/#" },
		{"title": "Link 5", "url": "/#" }
	]'
/> 
```

## Collapsed array
Pass in an array of objects with title and url.
The last value in the array is the active page.

```html preview
<rui-breadcrumbs
	maxCrumbs='3'
	crumbs='[
    	{"title": "Home", "url": "/#"},
    	{"title": "Link 1", "url": "/#"},
    	{"title": "Link 2", "url": "/#"},
    	{"title": "Link 3", "url": "/#"},
    	{"title": "Link 4", "url": "/#" },
        {"title": "Link 5", "url": "/#" }
	]'
/> 
```

## Manual Links
To use manual links you must wrap them in a list tag.

```html preview
<rui-breadcrumbs> 
	<li slot='crumb'> <a href="/#"> Link 1 </a> </li>
	<li slot='crumb' > <a href="/#" > Link 2 </a> </li>
	<li slot='crumb' aria-current="page" > Active Link </li>
</rui-breadcrumbs>

```
