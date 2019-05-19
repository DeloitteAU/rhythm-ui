---
package: "@rhythm-ui/button"
title: "RuiButton"
---

# button

Buttons provide a clickable element, which can be used in forms, or anywhere that needs simple, standard button functionality. They may display text, icons, or both. Buttons can be styled with several attributes to look a specific way.

## Types

<rui-button>Default</rui-button>
<rui-button type="primary">Primary</rui-button>
<rui-button type="secondary">Secondary</rui-button>
<rui-button type="tertiary">Tertiary</rui-button>

```html
<rui-button>Default</rui-button>
<rui-button type="primary">Primary</rui-button>
<rui-button type="secondary">Secondary</rui-button>
<rui-button type="tertiary">Tertiary</rui-button>
```

## Variants

<rui-button variant="fill">Fill (default)</rui-button>
<rui-button variant="outline">Outline</rui-button>
<rui-button variant="ghost">Ghost</rui-button>

```html
<rui-button variant="fill">Fill (default)</rui-button>
<rui-button variant="outline">Outline</rui-button>
<rui-button variant="ghost">Ghost</rui-button>
```

## Behaviour

<rui-button behaviour="button">Button (default)</rui-button>
<rui-button behaviour="submit">Form Submit</rui-button>
<rui-button behaviour="reset">Form Reset</rui-button>
<rui-button behaviour="anchor">Anchor</rui-button>
<rui-button href="#">Href</rui-button>

```html
<rui-button behaviour="button">Button (default)</rui-button>
<rui-button behaviour="submit">Form Submit</rui-button>
<rui-button behaviour="reset">Form Reset</rui-button>
<rui-button behaviour="anchor">Anchor</rui-button>
<rui-button href="#">Href</rui-button>
```

## Disabled

<rui-button disabled>Disabled</rui-button>
<rui-button variant="outline" disabled>Outline</rui-button>
<rui-button variant="ghost" disabled>Ghost</rui-button>

```html
<rui-button disabled>Disabled</rui-button>
<rui-button variant="outline" disabled>Outline</rui-button>
<rui-button variant="ghost" disabled>Ghost</rui-button>
```

## Sizes

<rui-button size="small">Small</rui-button>
<rui-button size="normal">Normal (default)</rui-button>
<rui-button size="large">Large</rui-button>

```html
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
| --font-size-large | 1.1rem | The font size when large  | 
| --border-radius | 4px | The border radius  | 
| --padding-small | 8px 15px | The small button padding  | 
| --color | #fff | The button font colour  | 
| --color-disabled | #ccc | The disabled button font color  | 
| --background | #595457 | The button accent colour  | 
