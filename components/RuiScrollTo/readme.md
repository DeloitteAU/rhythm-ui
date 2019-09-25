---
package: "@rhythm-ui/scroll-to"
title: "Scroll to"
category: "utilities"
---

# Scroll to

`rui-scroll-to` is a utility component used to wrap an element of your choosing and give it scroll-to-target behaviour.

## Basic Usage

Scroll to expects you to pass in an element with `slot=scroll-trigger`. 
While this element can be anything, we suggest using an `<a />` as it is the most appropriate element semantically for this behavior.

You can specify what element to scroll to via the anchors `href` attribute, it expects a queryselector compatible string. This selector 
should be unique, if the selector returns more than one element, the first result will be used.

```html preview
<rui-scroll-to>
    <a slot="scroll-trigger" href="#id-example-1">Click to scroll to Item 1</a>
</rui-scroll-to>
<div style="margin-top: 50px;">
    <h3 id="id-example-1">Item 1</h3>
    <p aria-hidden="true">
      Ex consequat commodo adipisicing exercitation aute excepteur occaecat ullamco duis aliqua id magna ullamco eu. 
      Do aute ipsum ipsum ullamco cillum consectetur ut et aute consectetur labore. Fugiat laborum incididunt tempor eu 
      consequat enim dolore proident. Qui laborum do non excepteur nulla magna eiusmod consectetur in.
    </p>
</div>
```

## Using an button

You can define a `to` attribute for when other elements are assigned to the trigger slot.

```html preview
<rui-scroll-to to="#id-example">
    <rui-button slot="scroll-trigger">Click to scroll to Item 2</rui-button>
</rui-scroll-to>
<div style="margin-top: 50px;">
    <h3 id="id-example">Item 2</h3>
    <p aria-hidden="true">
      Ex consequat commodo adipisicing exercitation aute excepteur occaecat ullamco duis aliqua id magna ullamco eu. 
      Do aute ipsum ipsum ullamco cillum consectetur ut et aute consectetur labore. Fugiat laborum incididunt tempor eu 
      consequat enim dolore proident. Qui laborum do non excepteur nulla magna eiusmod consectetur in.
    </p>
</div>
```

## Scroll to an element with offset

Often you may need to add an offset to the scroll due to the layout of elements on the page or because scrolling to the exact top 
of the element may look jarring. You can add an offset via the `offset` attribute. 

```html preview
<rui-scroll-to offset="-20">
    <a slot="scroll-trigger" href="#offset-example">Click to scroll to Item 3 with 20px top offset</a>
</rui-scroll-to>
<div style="margin-top: 50px;">
    <h3 id="offset-example">Item 3</h3>
    <p aria-hidden="true">
      Ex consequat commodo adipisicing exercitation aute excepteur occaecat ullamco duis aliqua id magna ullamco eu. 
      Do aute ipsum ipsum ullamco cillum consectetur ut et aute consectetur labore. Fugiat laborum incididunt tempor eu 
      consequat enim dolore proident. Qui laborum do non excepteur nulla magna eiusmod consectetur in.
    </p>
</div>
```

## Disabling animation

If you do not wish to use a smooth scroll animation, you can disable it by setting the 
`disable-animation` attribute. Please note this component will never animate if
 [prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) is set.

```html preview
<rui-scroll-to disable-animation>
    <a slot="scroll-trigger" href="#jump-scroll-example">Click to scroll to Item 4 without animation</a>
</rui-scroll-to>
<div style="margin-top: 20px;">
    <h3 id="jump-scroll-example">Item 4</h3>
    <p aria-hidden="true">
      Ex consequat commodo adipisicing exercitation aute excepteur occaecat ullamco duis aliqua id magna ullamco eu. 
      Do aute ipsum ipsum ullamco cillum consectetur ut et aute consectetur labore. Fugiat laborum incididunt tempor eu 
      consequat enim dolore proident. Qui laborum do non excepteur nulla magna eiusmod consectetur in.
    </p>
</div>
```

## Scrolling to elements within scrollable elements

If you need to scroll to an element within another scrollable element you will need to use the `scroll-container` 
attribute, which is a selector string for the scrollable container.

The container will then scroll the window to the parent container and scroll the given container to the target element.

```html preview
<rui-scroll-to scroll-container="#scroll-container">
    <a slot="scroll-trigger" href="#scroll-within-scroll-example">Click to scroll to Item 2 within the scroll zone</a>
</rui-scroll-to>
<div id="scroll-container" style="height: 100px; margin-top: 50px; background: #f5f5f5; padding: 20px; overflow: scroll">
    <h3 id="offset-example">Item 1</h3>
    <p aria-hidden="true">
      Ex consequat commodo adipisicing exercitation aute excepteur occaecat ullamco duis aliqua id magna ullamco eu. 
      Do aute ipsum ipsum ullamco cillum consectetur ut et aute consectetur labore. Fugiat laborum incididunt tempor eu 
      consequat enim dolore proident. Qui laborum do non excepteur nulla magna eiusmod consectetur in.
    </p>
    <h3 id="scroll-within-scroll-example">Item 2</h3>
    <p aria-hidden="true">
      Ex consequat commodo adipisicing exercitation aute excepteur occaecat ullamco duis aliqua id magna ullamco eu. 
      Do aute ipsum ipsum ullamco cillum consectetur ut et aute consectetur labore. Fugiat laborum incididunt tempor eu 
      consequat enim dolore proident. Qui laborum do non excepteur nulla magna eiusmod consectetur in.
    </p>
</div>
```

## Scroll to top

By default, if no `to` or `href` attribute is provided, the trigger will scroll
to the top of the page.

```html preview
<rui-scroll-to>
    <rui-button slot="scroll-trigger">Back to top</rui-button>
</rui-scroll-to>
```

Where possible when using `<a />` tags you should at least define `href="#"`for top behavior.
