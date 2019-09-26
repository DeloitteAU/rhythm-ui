---
package: "@rhythm-ui/button"
title: "Button"
category: "elements"
---

# Button

Buttons provide a clickable element, which can be used in forms, or anywhere that needs simple, standard button functionality. They may display text, icons, or both. Buttons can be styled with several attributes to look a specific way.

```html preview
<rui-button>Button</rui-button>
```
```css
/* Font */
--rui-button__font-size: 1rem;
--rui-button__font-weight: 400;
--rui-button__color: #FFF;
--rui-button__line-height: 1em;

/* Dimensions */
--rui-button__padding: 15px 25px;
--rui-button__border-radius: 4px;
--rui-button__width: auto;
--rui-button__max-width-min: auto;
--rui-button__max-width: auto;

/* Aesthetic */
--rui-button__display: inline-block;
--rui-button__flex-direction: row;
--rui-button__justify-content: flex-start;
--rui-button__align-items: flex-start;
--rui-button__transform: none;
--rui-button__transition: background-color 250ms, color 250ms, opacity 250ms, font-size 250ms;
--rui-button__cursor: pointer;
--rui-button__background-color: var(--global-gray-color-3, #673AB7);
--rui-button__border: none;

/* Hover */
--rui-button__color-hover: var(--rui-button__color);
--rui-button__background-color-hover: var(--global-gray-color-4, #311B92);
--rui-button__border-hover: var(--rui-button__border);
--rui-button__transform-hover: none;

/* Focus */
--rui-button__color-focus: var(--rui-button__color);
--rui-button__background-color-focus: var(--global-gray-color-4, #311B92);
--rui-button__border-focus: var(--rui-button__border);
--rui-button__transform-focus: none;

/* Active */
--rui-button__color-active: var(--rui-button__color);
--rui-button__background-color-active: var(--global-gray-color-4, #311B92);
--rui-button__border-active: var(--rui-button__border);
--rui-button__transform-active: translateY(1px);

/* Visited */
--rui-button__color-visited: var(--rui-button__color);
--rui-button__background-color-visited: var(--global-gray-color-4, #311B92);
--rui-button__border-visited: var(--rui-button__border);
--rui-button__transform-visited: translateY(1px);

/* Disabled */
--rui-button__color-disabled: var(--global-gray-color-2, #CCC);
--rui-button__background-color-disabled: var(--global-gray-color-1, #DDD);
--rui-button__border-disabled: none;
--rui-button__transform-disabled: none;
--rui-button__cursor-disabled: not-allowed;
```

## Configuration

|Prop|Values|Notes|
|---|---|---|
|type| **primary / secondary / tertiary** |Sets the button type|
|variant|**fill / outline / tertiary**|Sets the button variant|
|size|**small / normal / large**|Sets the button size|
|disabled|**true / false**|Sets the button disabled state|
|behaviour|**button / submit / reset / anchor**|Sets the button behaviour, if unspecified the default `button` will be set, unless an href has been specified then it will be an `a` tag|
|label|**string**|Sets the button aria-label, should be used if the button only displays an icon to the user|

## Styles

### Types

Type options are: **primary | secondary | tertiary**

```html preview
<rui-button type="primary">Primary</rui-button>
<rui-button type="secondary">Secondary</rui-button>
<rui-button type="tertiary">Tertiary</rui-button>
```
```css
/* Types */
rui-button[type="primary"] {
	--rui-button__color: var(--global-white-color, #FFF);
	--rui-button__border: none;
	--rui-button__background-color: var(--global-primary-color, #8BC34A);
	--rui-button__background-color-hover: var(--global-primary-shade-4, #558B2F);
	--rui-button__background-color-active: var(--global-primary-shade-4, #558B2F);
	--rui-button__background-color-focus: var(--global-primary-shade-4, #558B2F);
}

rui-button[type="secondary"] {
	--rui-button__color: var(--rui-button__-global-white-color, #FFF);
	--rui-button__border: none;
	--rui-button__background-color: var(--global-secondary-color, #03A9F4);
	--rui-button__background-color-hover: var(--global-secondary-shade-4, #0277BD);
	--rui-button__background-color-active: var(--global-secondary-shade-4, #0277BD);
	--rui-button__background-color-focus: var(--global-secondary-shade-4, #0277BD);
}

rui-button[type="tertiary"] {
	--rui-button__color: var(--rui-button__-global-white-color, #FFF);
	--rui-button__background-color: var(--global-tertiary-color, #F44336);
	--rui-button__background-color-hover: var(--global-tertiary-shade-4, #B71C1C);
	--rui-button__background-color-active: var(--global-tertiary-shade-4, #B71C1C);
	--rui-button__background-color-focus: var(--global-tertiary-shade-4, #B71C1C);
}
```

### Variants

Variant options are: **fill | outline | tertiary**

```html preview
<rui-button variant="fill">Fill</rui-button>
<rui-button variant="outline">Outline</rui-button>
<rui-button variant="ghost">Ghost</rui-button>
```
```css
/* Variants */
rui-button[variant="outline"] {
	--rui-button__background-color: transparent;
	--rui-button__border-active: var(--rui-button__border);
	--rui-button__border-focus: var(--rui-button__border);
	--rui-button__border-hover: var(--rui-button__border);
	--rui-button__border: 1px solid var(--rui-button__border-color);
	--rui-button__color: var(--global-gray-color-3, #595457);
}

rui-button[variant="ghost"] {
	--rui-button__background-color-active: var(--global-gray-color-3, #595457);
	--rui-button__background-color-focus: var(--global-gray-color-3, #595457);
	--rui-button__background-color-hover: var(--global-gray-color-3, #595457);
	--rui-button__background-color: transparent;
	--rui-button__border-active: none;
	--rui-button__border-focus: none;
	--rui-button__border-hover: none;
	--rui-button__border: none;
	--rui-button__color: var(--global-gray-color-3, #595457);
}
```

### Sizes

Size options are: **small | normal | large**

```html preview
<rui-button size="small">Small</rui-button>
<rui-button size="normal">Normal</rui-button>
<rui-button size="large">Large</rui-button>
```
```css
/* Sizes */
rui-button[size="small"] {
	--rui-button__padding: 8px 15px;
	--rui-button__font-size: 0.9rem;
}

rui-button[size="large"] {
	--rui-button__padding: 22px 38px;
	--rui-button__font-size: 1.1rem;
}
```

### Disabled

Button can be disabled by using the disabled prop

```html preview
<rui-button disabled>Disabled</rui-button>
```
```css
/* Disabled */
rui-button {
	--rui-button__color-disabled: var(--global-gray-color-2, #CCC);
	--rui-button__background-color-disabled: var(--global-gray-color-1, #DDD);
	--rui-button__border-disabled: none;
	--rui-button__cursor-disabled: not-allowed;
	--rui-button__transform-disabled: none;
}
```
> (Disabled is not supported with the anchor behaviour)

### Icons

Button can accept iconography by adding the icon in the desired location relative to the text, styling the icon is like styling any regular nested html element. If you create an icon only button please specify the `label` property to provide the appropriate A11Y support.

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

### Widths

To control the width of the button specify the (min/max) width of the button

```html preview
<rui-button class="max">This button has a maximum width</rui-button>
<rui-button class="min">This button has a minimum width</rui-button>
<rui-button class="full">This button is full width</rui-button>
```
```css
rui-button.max {
	--rui-button__max-width: 250px;
}

rui-button.min {
	--rui-button__min-width: 500px;
}

rui-button.full {
	--rui-button__width: 100%;
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
<rui-button @click="() => {window.alert('button clicked')}"}">onClick</rui-button>

```

## Customising

If you want customise the CSS beyond the variables use the `createShadowStyles` utility function. This function allows you to customise any CSS property and update the CSS for the shadow dom that otherwise would not be possible.
```js
import {css} from 'lit-element';
import {createShadowStyles} from '@rhythm-ui/styles';

createShadowStyles({
	RuiButton: css`
		.btn {}
	`
})
```


## Extending

For more customisation of both the HTML and CSS you can extend the component.

```js
import RuiButton from '@rhythm-ui/button';

export class MyButton extends RuiButton {
	static tag() {
		return 'my-button';
	}
}

customComponents.define(MyButton, MyButton.tag)
```
