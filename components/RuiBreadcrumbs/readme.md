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
    	{"title": "Link 1", "url": "/my/rul" }
	]'
/> 
```

## Manual Links
To use the rui-link you must wrap them in a <li> tag.

```html preview
<rui-breadcrumbs> 
	<li slot='crumb'> <RuiLink href="/#" color='primary'> Link 1 </RuiLink> </li>
	<li slot='crumb' > <RuiLink href="/#" > Link 2 </RuiLink> </li>
	<li slot='crumb' aria-current="page" > <RuiLink> Active Link </RuiLink> </li>
</rui-breadcrumbs>

```
