---
package: "@rhythm-ui/grid"
title: "rui-grid"
---

# grid

## Preset Values

<div class="demo-grid">

```html preview
<rui-grid>
	<div class="s-12">s-12</div>
</rui-grid>

<rui-grid>
	<div class="s-12 m-6">s-12 m-6</div>
	<div class="s-12 m-6">s-12 m-6</div>
</rui-grid>

<rui-grid>
	<div class="s-12 m-6 l-4">s-12 m-6 l-4</div>
	<div class="s-12 m-6 l-4">s-12 m-6 l-4</div>
	<div class="s-12 m-6 l-4">s-12 m-6 l-4</div>
</rui-grid>

<rui-grid>
	<div class="s-12 m-6 l-4 xl-3">s-12 m-6 l-4 xl-3</div>
	<div class="s-12 m-6 l-4 xl-3">s-12 m-6 l-4 xl-3</div>
	<div class="s-12 m-6 l-4 xl-3">s-12 m-6 l-4 xl-3</div>
	<div class="s-12 m-6 l-4 xl-3">The height div will expand with because it has a lot of content inside of it.</div>
</rui-grid>

<rui-grid>
	<div class="s-1">s-12</div>
	<div class="s-1">s-12</div>
	<div class="s-1">s-12</div>
	<div class="s-1">s-12</div>
	<div class="s-1">s-12</div>
	<div class="s-1">s-12</div>
	<div class="s-1">s-12</div>
	<div class="s-1">s-12</div>
	<div class="s-1">s-12</div>
	<div class="s-1">s-12</div>
	<div class="s-1">s-12</div>
	<div class="s-1">s-12</div>
</rui-grid>
```

## Unspecified values

```html preview
<rui-grid>
	<div></div>
	<div class="s-12 m-6">s-12 m-6</div>
	<div></div>
</rui-grid>
```

## With 6 columns

```html preview
<rui-grid columns="6" class="demo">
	<div></div>
	<div class="s-12 m-6">s-12 m-6</div>
	<div></div>
</rui-grid>
```

## Position / Ordering

Set start position with prefix `p-` eg `p-s-2` or `p-l-4`;

```html preview
<rui-grid>
	<div class="p-s-4 s-2">p-s-4 s-2</div>
	<div></div>
</rui-grid>
```

</div>
