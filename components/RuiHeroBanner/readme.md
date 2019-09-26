---
package: "@rhythm-ui/hero-banner"
title: "Hero banner"
category: "elements"
---

# Hero Banner


## Configuration

|Prop|Values|Notes|
|---|---|---|
| img | String | Image url to display as background image |
| overlay | Boolean | Toggle for the overlay if image is set through CSS |

## Default
```html preview
<rui-hero-banner>
	<h1>Title</h1>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sem libero, eleifend in consequat ut, egestas vel lectus.
		Sed placerat eget mauris quis viverra. Phasellus volutpat sed justo feugiat viverra. 
		Vestibulum egestas justo lobortis quam laoreet, non aliquam mauris luctus.
	</p>
</rui-hero-banner>
```


## Banner with image and actions
Hero Banner has slots for content and a slot for CTA buttons. By default the Hero Banner comes with a non-visible overlay when an image has been specified. To show the overlay specify the overlay variables.
It is possible to set the image directly using CSS `--rui-hero-banner__background-image`, however when using this you need to set the `overlay` property on the root `<rui-hero-banner overlay>` to show the overlay.

```html preview
<rui-hero-banner img="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80">
	<h1>Title</h1>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sem libero, eleifend in consequat ut, egestas vel lectus.
		Sed placerat eget mauris quis viverra. Phasellus volutpat sed justo feugiat viverra. 
		Vestibulum egestas justo lobortis quam laoreet, non aliquam mauris luctus.
	</p>
	<div slot="actions">
		<rui-button type="primary">Primary</rui-button>
		<rui-button type="secondary">Secondary</rui-button>
	</div>
</rui-hero-banner>
```

## Customise

If you want customise the CSS beyond the variables use the `createShadowStyles` utility function. This function allows you to customise any CSS property and update the CSS for the shadow dom that otherwise would not be possible.
```js
import {css} from 'lit-element';
import {createShadowStyles} from '@rhythm-ui/styles';

createShadowStyles({
	RuiHeroBanner: css`
		:host {}
	`
})
```


## Extending

For more customisation of both the HTML and CSS you can extend the component.

```js
import RuiHeroBanner from '@rhythm-ui/hero-banner';

export class MyHeroBanner extends RuiHeroBanner {
	static tag() {
		return 'my-hero-banner';
	}
}

customComponents.define(MyHeroBanner, MyHeroBanner.tag)
```
