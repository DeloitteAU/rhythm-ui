---
package: "@rhythm-ui/scroll-to"
title: "Scroll to"
category: "utilities"
---

# Scroll to

`rui-scroll-to` is a utility component used to wrap an element of your choosing and give it scroll-to-target behaviour.

## Basic Usage

rui-scroll-to must contain a child element having a `slot` atrribute with a value of `scroll-trigger`. 
While this element may be anything, it is recommended to use an anchor element as it is the most semantically appropriate element for this behaviour. 

You can specify what element to scroll to via the anchor's `href` attribute which expects a CSS ID selector.

In addition, default styling is automatically applied if an anchor element is also used.

```html preview
  <p id="top">I'm sitting at the top of this page.</p>
  <p>
    <rui-scroll-to>
      <a href="#top" slot="scroll-trigger">Take me to the top of this page</a>
    </rui-scroll-to>
  </p>
```

## Style customisation

The child anchor element can be further styled as desired:

```html preview
<style>
  .rui-scroll-to__icon {
    transform: rotate(180deg);
  }

  .rui-scroll-to__icon-container {
    display: inline-flex;
    width: 1.75em;
    height: 1.75em;
    background: currentColor;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
  }

  .rui-scroll-to__text-content {
    margin-right: 0.5em;
  }

  .sample-2 > a {
    font-size: 24px;
  }
</style>

<p>rui-scroll-to containing text and an icon</p>

<rui-scroll-to>
    <a href="#" slot="scroll-trigger">
      <span class="rui-scroll-to__text-content">
        Back to top
      </span>
      <span class="rui-scroll-to__icon-container">
        <svg width="8px" height="5px" viewBox="0 0 8 5" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="rui-scroll-to__icon">
            <g stroke="none" stroke-width="1" fill-rule="evenodd">
                <g transform="translate(-4.000000, -6.000000)" fill-rule="nonzero">
                    <path d="M7.99975,10.74975 C7.80775,10.74975 7.61575,10.67675 7.46975,10.52975 L4.21975,7.27975 C3.92675,6.98675 3.92675,6.51275 4.21975,6.21975 C4.51275,5.92675 4.98675,5.92675 5.27975,6.21975 L7.99975,8.93875 L10.71975,6.21975 C11.01275,5.92675 11.48675,5.92675 11.77975,6.21975 C12.07275,6.51275 12.07275,6.98675 11.77975,7.27975 L8.52975,10.52975 C8.38375,10.67675 8.19175,10.74975 7.99975,10.74975" fill="#FFF"></path>
                </g>
            </g>
        </svg>
      </span>
    </a>
</rui-scroll-to>

<p>rui-scroll-to containing an icon only</p>

<rui-scroll-to class="sample-2">
    <a href="#" slot="scroll-trigger">
      <span class="rui-scroll-to__icon-container">
        <svg width="8px" height="5px" viewBox="0 0 8 5" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="rui-scroll-to__icon">
            <g stroke="none" stroke-width="1" fill-rule="evenodd">
                <g transform="translate(-4.000000, -6.000000)" fill-rule="nonzero">
                    <path d="M7.99975,10.74975 C7.80775,10.74975 7.61575,10.67675 7.46975,10.52975 L4.21975,7.27975 C3.92675,6.98675 3.92675,6.51275 4.21975,6.21975 C4.51275,5.92675 4.98675,5.92675 5.27975,6.21975 L7.99975,8.93875 L10.71975,6.21975 C11.01275,5.92675 11.48675,5.92675 11.77975,6.21975 C12.07275,6.51275 12.07275,6.98675 11.77975,7.27975 L8.52975,10.52975 C8.38375,10.67675 8.19175,10.74975 7.99975,10.74975" fill="#FFF"></path>
                </g>
            </g>
        </svg>
      </span>
    </a>
</rui-scroll-to>
```



## Using a button

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
    <a slot="scroll-trigger">
      <span class="rui-scroll-to__text-content">
        Back to top
      </span>
      <span class="rui-scroll-to__icon-container">
        <svg width="8px" height="5px" viewBox="0 0 8 5" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="rui-scroll-to__icon">
            <g stroke="none" stroke-width="1" fill-rule="evenodd">
                <g transform="translate(-4.000000, -6.000000)" fill-rule="nonzero">
                    <path d="M7.99975,10.74975 C7.80775,10.74975 7.61575,10.67675 7.46975,10.52975 L4.21975,7.27975 C3.92675,6.98675 3.92675,6.51275 4.21975,6.21975 C4.51275,5.92675 4.98675,5.92675 5.27975,6.21975 L7.99975,8.93875 L10.71975,6.21975 C11.01275,5.92675 11.48675,5.92675 11.77975,6.21975 C12.07275,6.51275 12.07275,6.98675 11.77975,7.27975 L8.52975,10.52975 C8.38375,10.67675 8.19175,10.74975 7.99975,10.74975" fill="#FFF"></path>
                </g>
            </g>
        </svg>
      </span>
    </a>
</rui-scroll-to>
```

Where possible when using `<a />` tags you should at least define `href="#"`for top behavior.
