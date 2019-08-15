---
package: "@rhythm-ui"
title: "rui-breadcrumbs"
---
# Breadcrumbs

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
		{"title": "Home", "url": "#"},
		{"title": "Link 1", "url": "#"},
		{"title": "Link 2", "url": "#"},
		{"title": "Link 3", "url": "#"},
		{"title": "Link 4", "url": "#" },
		{"title": "Active Link", "url": "#" }
	]'
/> 
```

## Collapsed array
Set maxCrumbs to collapse the list.

```html preview
<rui-breadcrumbs
	maxCrumbs='3'
	crumbs='[
    	{"title": "Home", "url": "#"},
    	{"title": "Link 1", "url": "#"},
    	{"title": "Link 2", "url": "#"},
    	{"title": "Link 3", "url": "#"},
    	{"title": "Link 4", "url": "#" },
        {"title": "Active Link", "url": "#" }
	]'
/> 
```

## Manual Links
To use manual links you must wrap them in a list tag. Add aria-current to the link that is active.

```html preview
<rui-breadcrumbs> 
	<li slot='crumb'> <a href="#"> Home </a> </li>
	<li slot='crumb'> <a href="#"> Link 1 </a> </li>
	<li slot='crumb'> <a href="#"> Link 2 </a> </li>
	<li slot='crumb'> <a href="#"> Link 3 </a> </li>
	<li slot='crumb'> <a href="#"> Link 4 </a> </li>
	<li slot='crumb' aria-current="page"> Active Link </li>
</rui-breadcrumbs>

```

## Manual Links with a collapsed array
Collapsed list also works with manual configured links.

```html preview
<rui-breadcrumbs
	maxCrumbs='3'
> 
	<li slot='crumb'> <a href="#"> Home </a> </li>
	<li slot='crumb'> <a href="#"> Link 1 </a> </li>
	<li slot='crumb'> <a href="#"> Link 2 </a> </li>
	<li slot='crumb'> <a href="#"> Link 3 </a> </li>
	<li slot='crumb'> <a href="#"> Link 4 </a> </li>
	<li slot='crumb' aria-current="page"> Active Link </li>
</rui-breadcrumbs>

```

