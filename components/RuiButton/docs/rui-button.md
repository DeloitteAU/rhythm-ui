---
package: "@rhythm-ui"
title: "rui-button"
---

# button

Buttons provide a clickable element, which can be used in forms, or anywhere that needs simple, standard button functionality. They may display text, icons, or both. Buttons can be styled with several attributes to look a specific way.

## Types

```html preview
<rui-button>Default</rui-button>
<rui-button type="primary">Primary</rui-button>
<rui-button type="secondary">Secondary</rui-button>
<rui-button type="tertiary">Tertiary</rui-button>
```

## Variants

```html preview
<rui-button variant="fill">Fill (default)</rui-button>
<rui-button variant="outline">Outline</rui-button>
<rui-button variant="ghost">Ghost</rui-button>
```

## Behaviour

```html preview
<rui-button behaviour="button">Button (default)</rui-button>
<rui-button behaviour="submit">Form Submit</rui-button>
<rui-button behaviour="reset">Form Reset</rui-button>
<rui-button behaviour="anchor">Anchor</rui-button>
<rui-button href="#">Href</rui-button>
```

## Disabled

```html preview
<rui-button disabled>Disabled</rui-button>
<rui-button variant="outline" disabled>Outline</rui-button>
<rui-button variant="ghost" disabled>Ghost</rui-button>
```

## Sizes

```html preview
<rui-button size="small">Small</rui-button>
<rui-button size="normal">Normal (default)</rui-button>
<rui-button size="large">Large</rui-button>
```

## Extending

```js
import RuiButton from '@rhythm-ui/button';

export class MyBUtton extends RuiButton {
	static tag() {
		return 'my-button';
	}
}

customComponents.define(MyButton, MyButton.tag)
```


 ## Variables

| CSS Variable | Default Value | Description |
| --- | --- | --- |
| --font-size | 1rem | The default font size  | 
| --font-size-small | 0.9rem | The font size when small  | 
| --font-size-large | 1.1rem | The font size when large  | 
| --font-weight | 400 | The font weight  | 
| --border-radius | 4px | The border radius  | 
| --padding | 15px 25px | The regular button padding  | 
| --padding-small | 8px 15px | The small button padding  | 
| --padding-large | 22px 38px | The large button padding  | 
| --color | #FFF | The button font colour  | 
| --color-active | var(--color) | The active font colour  | 
| --color-disabled | #CCC | The disabled button font color  | 
| --background-disabled | #DDD | The disabled button background color  | 
| --background | #595457 | The button accent colour  | 
| --border | 1px solid var(--background) | The button border  | 
