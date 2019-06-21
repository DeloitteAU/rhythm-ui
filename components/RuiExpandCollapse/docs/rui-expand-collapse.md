---
package: "@rhythm-ui"
title: "rui-expand-collapse"
---

# Expand Collapse

## Internally controlled
If you do not need to implement any custom logic, then you just need to provide the component an element for the summary content and the details content that is revealed on expand/collapse. Clicking the summary content will trigger an expand/collapse.

```html preview
<rui-expand-collapse>
    <p slot="summary-content">Expander summary</p>
    <p slot="details-content">Expanded content</p>
</rui-expand-collapse>
```

If you wish for the expand collapse to default to open, use the below:
```html preview
<rui-expand-collapse open>
    <p slot="summary-content">Expander summary</p>
    <p slot="details-content">Expanded content</p>
</rui-expand-collapse>
```

## Externally controlled
If you wish to externally control the open/close state of the expand collapse
you can modify the open property through javascript and the component will listen to your changes. 

The component's onExpandCollapse function should be overriden in this case.

```html
<rui-expand-collapse id="expandExample">
    <p slot="summary-content">Expander summary</p>
    <p slot="details-content">Expanded content</p>
</rui-expand-collapse>

<script>
    window.onload = () => {
        window.expanderOpen = false;
        const expandCollapseEl = document.getElementById('expandExample');
        expandCollapseEl.onExpandCollapse = () => {
            window.expanderOpen = !window.expanderOpen;
            expandCollapseEl.open = window.expanderOpen;
        }
    }
</script>
```

 ## Variables

| CSS Variable | Default Value | Description |
| --- | --- | --- |
| --background-color | #F2F2F2 | The base background colour for the expand collapse  | 
| --color | #000000 | The base text colour for the expand collapse  | 
| --summary-color | #FFFFFF | The summary section text colour  | 
| --summary-background-color | #000000 | The summary section background colour  | 
| --summary-padding | 28px 70px 28px 20px | Summary padding  | 
| --summary-outline-focus | -webkit-focus-ring-color auto 5px | Summary button focus outline styling  | 
| --details-padding | 28px 20px | Details padding  | 
| --details-transition | opacity 200ms ease-out 250ms | Transition for the details section content  | 
| --details-container-transition | height 250ms ease-out | Transition for the details container  | 
| --icon-container-height | 20px | Height of icon container  | 
| --icon-container-width | 20px | Width of icon container  | 
| --icon-container-right | 20px | Offset of icon container from rightof summary container  | 
| --icon-container-transition | transform 300ms ease-in-out | Transition for the icon container  | 
| --icon-container-transform-expanded | rotate(180deg) | Transform applied to the icon container when expanding  | 
| --icon-content | url("data:image/svg+xml,%3Csvg viewBox='0 0 8 5' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='icon-/-16-/-chev-down' transform='translate(-4.000000, -6.000000)' fill='%23FFF' fill-rule='nonzero'%3E%3Cpath d='M11.50025,10.50025 C11.37225,10.50025 11.24425,10.45125 11.14625,10.35425 L8.00025,7.20725 L4.85425,10.35425 C4.65825,10.54925 4.34225,10.54925 4.14625,10.35425 C3.95125,10.15825 3.95125,9.84225 4.14625,9.64625 L7.64625,6.14625 C7.84225,5.95125 8.15825,5.95125 8.35425,6.14625 L11.85425,9.64625 C12.04925,9.84225 12.04925,10.15825 11.85425,10.35425 C11.75625,10.45125 11.62825,10.50025 11.50025,10.50025' id='Icon' transform='translate(8.000250, 8.250250) rotate(-180.000000) translate(-8.000250, -8.250250) '%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E ") | The content of the icon :after element  | 
