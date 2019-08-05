---
package: "@rhythm-ui/back-to-top"
title: "rui-back-to-top"
---

# Back to Top
Back to top buttons prevent users from having to scroll past vast amounts of content unecessarily.

NB: This component is a wrapper around the `rui-scroll-to` component

## General Usage
By default the back to top button 
shows an icon and a 'Back to Top' label.

```html preview
<rui-back-to-top></rui-back-to-top>
```

You can specify that the button be an icon button via the `variant="icon"`. 

```html preview
<rui-back-to-top variant="icon"></rui-back-to-top>
```

If you need to provide some custom content within the back to top component, use `variant="custom"`

```html preview
<rui-back-to-top variant="custom">
    <span>Custom back to top</span>
</rui-back-to-top>
```