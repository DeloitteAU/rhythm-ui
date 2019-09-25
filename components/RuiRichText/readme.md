---
package: "@rhythm-ui/rich-text"
title: "Rich text"
category: "elements"
---

# rui-rich-text

Lorem ipsum ...


## Styles

### Default

```html preview
<rui-rich-text>
	<h1>H1 Designing with repetition, pattern, and rhythm</h1>
	<p>Let’s look at three subjects that, at first glance, may strike you as being incredibly basic and self-explanatory. However, although they may seem like they should need no introduction, we should study them.</p>
	<h2>H2 More effective designs</h2>
	<p>Say “repetition” and you might think about someone who says the same thing over and over again. However, it’s different in design.</p>
	<p>Repeating things does not have to be boring! In fact, it can empower a design when used in the right way. It can also ensure that messages are better.</p>
	<h3>H3 Repetition</h3>
	<p>Repetition is simply repeating a single element many times in a design. For example, you could draw a line horizontally and then draw several others next to it. Repetition can be useful in web and app design. For example, you’d expect the logo of a business to be repeated on every page and in the same place. Menu items are also often repeated in the same place on a page. This helps provide a consistent user experience.</p>
	<h4>H4 Pattern</h4>
	<p>Patterns are simply a repetition of more than one design element working in concert with each other. A seamless pattern is one where every element within a design (no matter how often it’s repeated) combines to form a whole. This is most common in backgrounds on web and app pages. It’s also popular in carpet and wallpaper design.</p>
	<h5>H5 Rhythm</h5>
	<p>When you repeat elements, the intervals between those repetitions can create a sense of rhythm in the viewer and a sense of movement. Musicians create rhythm in the spacing between notes, effectively making these “silent” gaps play off the notes. Designers insert spacing between elements to make rhythm. There are, broadly speaking, five types of visual rhythm.</p>
	<blockquote>Quote We retain information better the more often we encounter it and internalise it.</blockquote>
	<h6>H6 Designing with repetition, pattern, and rhythm</h6>
	<p>The use of repeated visual elements is a technique designers commonly employ in web design. You can repeat design elements, for example, to provide a consistent visual experience. It will make it easier for users to focus on the content because they know where they can find specific types of content or navigation options.</p>
	<a href="#">Button five types of visual rhythm</a>
</rui-rich-text>
```



## Customising

If you want customise the CSS beyond the variables use the `createShadowStyles` utility function. This function allows you to customise any CSS property and update the CSS for the shadow dom that otherwise would not be possible.
```js
import {css} from 'lit-element';
import {createShadowStyles} from '@rhythm-ui/styles';

createShadowStyles({
	rui-rich-text: css`
		.host {}
	`
})
```


## Extending

For more customisation of both the HTML and CSS you can extend the component.

```js
import Ruirui-rich-text from '@rhythm-ui/rich-text';

export class Myrui-rich-text extends Ruirui-rich-text {
	static tag() {
		return 'my-rich-text';
	}
}

customComponents.define(Myrui-rich-text, Myrui-rich-text.tag)
```
