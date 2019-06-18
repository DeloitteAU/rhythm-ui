---
package: "@rhythm-ui"
title: "rui-breadcrumbs"
---

Readme file for rui-breadcrumbs

```html
<rui-breadcrumbs>
</rui-breadcrumbs>

```


Use Rui breadcrumbs with an array or manual links

## Array
Pass in an array of objects with title and url. This is the preferred method.
```html preview
<rui-breadcrumbs 
	location='[
    	{"title": "Home", "url": "/my/rul"},
    	{"title": "Link 1", "url": "/my/rul" }
	]'
/> 
```

## Manual Links
Pass in individual anchor tags

```html preview
<rui-breadcrumbs> 
	<div slot="crumb"> <a href="#">Home</a> </div>
	<div slot="crumb"> <a href="#">Link 1</a> </div>
	<div slot="crumb"> Last link </div>
</rui-breadcrumbs>

```


 ## Variables

| CSS Variable | Default Value | Description |
| --- | --- | --- |
| --color | #000000 | The base colour for the breadcrumbs  | 
| --hover-color | #01447E | Hover colour for the breadcrumbs  | 
