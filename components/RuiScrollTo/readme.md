---
package: "@rhythm-ui/scroll-to"
title: "rui-scroll-to"
---

# Scroll to
`rui-scroll-to` is a utility component used to wrap an element of your choosing and give it scroll-to-target behaviour.

## Basic Usage
Scroll to expects you to pass in an element with `slot=scroll-trigger`. 
While this element can be anything, we suggest using a button as it is the most appropriate element semantically for this behaviour.

You can specify what element to scroll to via the `to` attribute, it expects a queryselector compatible string. This selector should be unique,if the selector returns more than one element, the first result will be used.

```html preview
<rui-scroll-to to="#id-example">
    <button slot="scroll-trigger">Click to scroll</button>
</rui-scroll-to>
<div style="height: 100px; background: #333"></div>
<div id="id-example" style="border: 2px solid red">target</div>
```

## Scroll to an element with offset
Often you may need to add an offset to the scroll due to the layout of elements on the page or because scrolling to the exact top of the element may look jarring. You can add an offset via the `offset` attribute. 

```html preview
<rui-scroll-to to="#offset-example" offset="-20">
    <button slot="scroll-trigger">Click to scroll with offset</button>
</rui-scroll-to>
<div style="height: 80px; background: #333"></div>
<div style="height: 20px; background: #DDD; border: 1px solid blue;">20px offset</div>
<div id="offset-example" style="border: 1px solid red;">target</div>
```

## Scroll to top
By default, if no `to` attribute is provided, the trigger will scroll
to the top of the page.

```html preview
<rui-scroll-to>
    <button slot="scroll-trigger">Back to top</button>
</rui-scroll-to>
```

## Disabling smooth scroll
If you do not wish to use smooth scroll, you can disable it via the 
`no-smooth-scroll` attribute.

```html preview
<rui-scroll-to no-smooth-scroll to="#jump-scroll-example">
    <button slot="scroll-trigger">Click to jump to element</button>
</rui-scroll-to>
<div style="height: 100px; background: #333"></div>
<div id="jump-scroll-example" style="border: 2px solid red">target</div>
```

## Scrolling to elements within other scrollable elements
If you need to scroll to an element within another scrollable element you will need to use the `scroll-container` attribute, which is a selector string for the scrollable container.

The container will then scroll the window to the parent container and scroll the given container to the target element.

```html preview
<rui-scroll-to scroll-container="#scroll-container" to="#scroll-within-scroll-example">
    <button slot="scroll-trigger">Scroll within scroll</button>
</rui-scroll-to>
<div style="height: 300px; background: #333"></div>
<div id="scroll-container" style="height: 100px; border: 1px solid red; overflow: scroll">
    <p>Target is 1000px below</p>
    <div style="height: 1000px;"></div>
    <div id="scroll-within-scroll-example" style="border: 2px solid red">target</div>
    <div style="height: 1000px;"></div>
</div>
```

