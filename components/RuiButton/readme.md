---
package: "@rhythm-ui"
title: "rui-button"
---

# Button

Buttons provide a clickable element, which can be used in forms, or anywhere that needs simple, standard button functionality. They may display text, icons, or both. Buttons can be styled with several attributes to look a specific way.

```html preview
<rui-button>Button</rui-button>
```

## Configuration

|Prop|Values|Notes|
|---|---|---|
|Types| **primary/secondary/tertiary** |Set button type|
|Variants|**fill/outline/tertiary**|Set button variant|
|Sizes|**small/normal/large**|Set button size|
|Disabled|**true/false**|Set button disabled state|
|Behaviour|**button/submit/reset/anchor**|Set button behaviour, if unspecified the default `button` will be set, unless an href has been specified then it will be an `a` tag|
|label|**string**|Set button aria-label, should be used if the button only displays an icon to the user|

## Examples

### Types
```html preview
<rui-button type="primary">Primary</rui-button>
<rui-button type="secondary">Secondary</rui-button>
<rui-button type="tertiary">Tertiary</rui-button>
```

### Variants
Variant options are: **fill|outline|tertiary**
```html preview
<rui-button variant="fill">Fill (default)</rui-button>
<rui-button variant="outline">Outline</rui-button>
<rui-button variant="ghost">Ghost</rui-button>
```

### Sizes
Size options are: **small|normal|large**

```html preview
<rui-button size="small">Small</rui-button>
<rui-button size="normal">Normal (default)</rui-button>
<rui-button size="large">Large</rui-button>
```

## Disabled
Button can be disabled by using the disabled prop
```html preview
<rui-button disabled>Disabled</rui-button>
<rui-button variant="outline" disabled>Outline</rui-button>
<rui-button variant="ghost" disabled>Ghost</rui-button>
```
> (Disabled is not supported with the anchor behaviour)

### Icons
Button can accept iconography by adding the icon in the desired location relative to the text, styling the icon is like styling any regular nested html element.
```html preview
<rui-button>Proceed <rui-icon src="http://pluspng.com/img-png/right-arrow-png-right-arrow-512.png"></rui-icon></rui-button>
<rui-button label="Proceed"><rui-icon src="http://pluspng.com/img-png/right-arrow-png-right-arrow-512.png"></rui-icon></rui-button>
<rui-button class="custom-button-icon" variant="outline"><rui-icon src="https://image.flaticon.com/icons/svg/54/54321.svg"></rui-icon>Back</rui-icon></rui-button>
```
```css
rui-button rui-icon {
	--rui-icon__width: 12px;
	--rui-icon__height: 12px;
	--rui-icon__color: #ffffff;
}
rui-button:hover rui-icon {
	--rui-icon__color: #000000;
}
```

## Behaviour
Behaviour options are: **button|submit|reset|anchor** (if nothing is specified the default will be set unless an href has been specified)
```html preview
<rui-button behaviour="button">Button (default)</rui-button>
<rui-button behaviour="submit">Form Submit</rui-button>
<rui-button behaviour="reset">Form Reset</rui-button>
<rui-button behaviour="anchor">Anchor</rui-button>
<rui-button href="#">Href</rui-button>
<rui-button onClick="() => {window.alert('button clicked')}"}">onClick</rui-button>

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
