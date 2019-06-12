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
<rui-expand-collapse open="true">
    <p slot="summary-content">Expander summary</p>
    <p slot="details-content">Expanded content</p>
</rui-expand-collapse>
```

## Externally controlled
If you wish to externally control the open/close state of the expand collapse
you can modify the open property through javascript and the component will listen to your changes. 

The component's onExpandCollapse function should be overriden in this case.

 ## Variables

| CSS Variable | Default Value | Description |
| --- | --- | --- |
