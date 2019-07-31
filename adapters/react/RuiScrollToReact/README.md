# Scroll to
`RuiScrollTo` is a utility component used to wrap an element of your choosing and give it scroll-to-target behaviour.

## Basic Usage
Scroll to expects you to pass one child component to it to act as the scroll trigger. 

You can specify what element to scroll to via the `to` prop, it expects a selector string. This selector should be unique, if the selector returns more than one element, the first result will be used.

```jsx
<RuiScrollTo to="#id-example">
    <button>Click to scroll</button>
</RuiScrollTo>
```

## Scroll to an element with offset
Often you may need to add an offset to the scroll due to the layout of elements on the page or because scrolling to the exact top of the element may look jarring. You can add an offset via the `offset` prop. 

```jsx
<RuiScrollTo to="#id-example" offset={-20}>
    <button>Click to scroll</button>
</RuiScrollTo>
```

## Scroll to top
By default, if no `to` prop is provided, the trigger will scroll
to the top of the page.

```jsx
<RuiScrollTo>
    <button>Back to top</button>
</RuiScrollTo>
```

## Disabling smooth scroll
If you do not wish to use smooth scroll, you can disable it via the 
`noSmoothScroll` prop.

```jsx
<RuiScrollTo noSmoothScroll to="#jump-scroll-example">
    <button>Click to jump to element</button>
</RuiScrollTo>
```

## Scrolling to elements within other scrollable elements
If you need to scroll to an element within another scrollable element you will need to use the `scrollContainer` prop, which is a selector string for the scrollable container.

The container will then scroll the window to the parent container and scroll the given container to the target element.

```jsx
<RuiScrollTo scrollContainer="#scroll-container" to="#scroll-within-scroll-example">
    <button>Scroll within scroll</button>
</RuiScrollTo>
```
