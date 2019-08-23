---
package: "@rhythm-ui/accordion"
title: "rui-accordion"
---

# Accordion

The purpose of the accordion component is to control expand-collapse components. Any number of expand-collapse components may be nested inside an accordion component. This component behaves in two different ways according to the `behaviour` attribute. The value of this attribute is either `single` or `multiple`. A value of `single` indicates that only one expand-collapse component can be expanded at once. Only one. A value of `multiple` indicates that there are no restrictions when it comes to the number of expanded expanded-collapse components. This is the default value of the `behaviour` attribute.

An accordion component may optionally have a heading and a button that expands or collapses each expand-collapse component nested. Please note that it only makes sense to display the aforementioned button when the value of the behaviour attribute is `multiple`. 

## Example of an accordion with a value of `single` for the behaviour attribute.

```html preview
<rui-accordion behaviour="single">
    <h6 slot="heading">
        Visa requirements for Australian citizens
    </h6>
    <rui-expand-collapse open>
        <p slot="summary-content">Expander summary</p>
        <p slot="details-content">Expanded content</p>
    </rui-expand-collapse>
    <rui-expand-collapse>
        <p slot="summary-content">Expander summary</p>
        <p slot="details-content">Expanded content</p>
    </rui-expand-collapse>
    <rui-expand-collapse>
        <p slot="summary-content">Expander summary</p>
        <p slot="details-content">Expanded content</p>
    </rui-expand-collapse>
</rui-accordion> 
```

## Example of an accordion with a value of `multiple` for the behaviour attribute.

Please note that there are two slots allocated for a button. The `button-collapse` slot is used by a button that collapses expand-collapse components. The `button-expand` slot is used by a button that expands expand-collapse components.

```html preview
<rui-accordion behaviour="multiple">
    <h6 slot="heading">
        Visa requirements for Australian citizens
    </h6>
    <p slot="button-collapse">
        <rui-button behaviour="button">Collapse all</rui-button>
    </p>
    <p slot="button-expand">
        <rui-button behaviour="button">Expand all</rui-button>
    </p>
    <rui-expand-collapse>
        <p slot="summary-content">Expander summary</p>
        <p slot="details-content">Expanded content</p>
    </rui-expand-collapse>
    <rui-expand-collapse>
        <p slot="summary-content">Expander summary</p>
        <p slot="details-content">Expanded content</p>
    </rui-expand-collapse>
    <rui-expand-collapse>
        <p slot="summary-content">Expander summary</p>
        <p slot="details-content">Expanded content</p>
    </rui-expand-collapse>
</rui-accordion> 
```