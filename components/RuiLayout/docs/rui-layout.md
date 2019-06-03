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

```html preview
<rui-layout type="monet">
	<header>Header</header>
	<main>Main</main>
	<footer>Footer</footer>
</rui-layout>
```

### Picasso

```html preview
<rui-layout type="picasso">
	<header>Header</header>
	<nav>Nav</nav>
	<main>Main</main>
	<footer>Footer</footer>
</rui-layout>
```

### Da Vinci

```html preview
<rui-layout type="davinci">
	<header>Header</header>
	<nav>Nav</nav>
	<main>Main</main>
	<footer>Footer</footer>
</rui-layout>
```
### Van Gogh

```html preview
<rui-layout type="vangogh">
	<header>Header</header>
	<nav>Nav</nav>
	<main>Main</main>
	<aside>Aside</aside>
	<footer>Footer</footer>
</rui-layout>
```

### Morisot

```html preview
<rui-layout type="morisot">
	<header>Header</header>
	<nav>Nav</nav>
	<main>Main</main>
	<aside>Aside</aside>
	<footer>Footer</footer>
</rui-layout>
```

### Rembrandt

```html preview
<rui-layout type="rembrandt">
	<header>Header</header>
	<nav>Nav</nav>
	<main>Main</main>
	<aside>Aside</aside>
	<footer>Footer</footer>
</rui-layout>
```

 ## Variables

| CSS Variable | Default Value | Description |
| --- | --- | --- |
| --container-width | 1216px | The max container width  | 
| --columns | 12 | The default number of columns (must be in range 1 to 16)  | 
| --column-gap | 32px | The gap between columns  | 
| --row-gap | var(--column-gap) | The gap between rows  | 
| --template-columns | 20% minmax(0, 1fr) 20% | The grids default template columns  | 
| --template-rows | 80px 1fr auto | The grid row  | 
