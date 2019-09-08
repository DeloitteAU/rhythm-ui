---
package: "@rhythm-ui/header"
title: "rui-header"
---

# Header

Header is a wrapping component for the site header and primary navigation. Header requires subcomponents for mobile and desktop view.

```html preview
<rui-header>
	<rui-header-mobile slot="mobile">
		<div slot="main-left">left main area</div>
		<div slot="main-center">center main area</div>
		<div slot="main-right">right main area</div>
		<div slot="menu-top">top main area</div>
		<div slot="menu-middle">middle main area</div>
		<div slot="menu-bottom">bottom main area</div>
	</rui-header-mobile>
	<rui-header-desktop slot="desktop">
		<div slot="utilities-left">left utility area</div>
		<div slot="utilities-center">center utility area</div>
		<div slot="utilities-right">right utility area</div>
		<div slot="main-left">left main area</div>
		<div slot="main-center">center main area</div>
		<div slot="main-right">right main area</div>
	</rui-header-desktop>
</rui-header>
```
```css
--rui-header__desktop__content-max-width: 100%;
--rui-header__desktop__utilities-padding: 5px 25px;
--rui-header__desktop__utilities-background: #cccc;
--rui-header__desktop__utilities-border-bottom: 1px solid #888;
--rui-header__desktop__utilities-box-shadow: 0px 1px 4px #aaaaaa;
--rui-header__desktop__main-padding: 5px 25px;
--rui-header__desktop__main-background: #FFF;
--rui-header__desktop__main-border-bottom: 1px solid #888;
--rui-header__desktop__main-box-shadow: 0px 1px 4px #aaaaaa;
```

## Configuration

|Prop|Values|Notes|
|---|---|---|
