---
package: "@rhythm-ui"
title: "rui-layout"
---

# layout

```html
<rui-layout>
	<header></header>
	<nav></nav>
	<aside></aside>
	<footer></footer>
</rui-layout>
```

## Types

### Monet (Default)

```html
<rui-layout type="monet">
	<header></header>
	<main></main>
	<footer></footer>
</rui-layout>
```

### Van Gogh

```html
<rui-layout type="vangogh">
	<header></header>
	<nav></nav>
	<main></main>
	<aside></aside>
	<footer></footer>
</rui-layout>
```

### Picasso

```html
<rui-layout type="picasso">
	<header></header>
	<nav></nav>
	<main></main>
	<footer></footer>
</rui-layout>
```

### Da Vinci

```html
<rui-layout type="davinci">
	<header></header>
	<nav></nav>
	<main></main>
	<footer></footer>
</rui-layout>
```

 ## Variables

| CSS Variable | Default Value | Description |
| --- | --- | --- |
| --container-width | 1216px | The max container width  | 
| --column-gap | 32px | The gap between columns  | 
| --template-columns | 336px minmax(0, 1fr) 336px | The grids default template columns  | 
