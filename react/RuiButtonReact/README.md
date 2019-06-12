# Button

Buttons provide a clickable element, which can be used in forms, or anywhere that needs simple, standard button functionality. They may display text, icons, or both. Buttons can be styled with several attributes to look a specific way.


## Types

```html preview
<RuiButton>Default</RuiButton>
<RuiButton type="primary">Primary</RuiButton>
<RuiButton type="secondary">Secondary</RuiButton>
<RuiButton type="tertiary">Tertiary</RuiButton>
```
<RuiButton type="primary">Primary</RuiButton>


## Variants

```html preview
<RuiButton variant="fill">Fill (default)</RuiButton>
<RuiButton variant="outline">Outline</RuiButton>
<RuiButton variant="ghost">Ghost</RuiButton>
```

## Behaviour

```html preview
<RuiButton behaviour="button">Button (default)</RuiButton>
<RuiButton behaviour="submit">Form Submit</RuiButton>
<RuiButton behaviour="reset">Form Reset</RuiButton>
<RuiButton behaviour="anchor">Anchor</RuiButton>
<RuiButton href="#">Href</RuiButton>
```

## Disabled

```html preview
<RuiButton disabled>Disabled</RuiButton>
<RuiButton variant="outline" disabled>Outline</RuiButton>
<RuiButton variant="ghost" disabled>Ghost</RuiButton>
```

## Sizes

```html preview
<RuiButton size="small">Small</RuiButton>
<RuiButton size="normal">Normal (default)</RuiButton>
<RuiButton size="large">Large</RuiButton>
```

## Extending

```js
import RuiButton from '@rhythm-ui/button';

export class MyButton extends RuiButton {
	static tag() {
		return 'my-button';
	}
}

customComponents.define(MyButton, MyButton.tag)
```
