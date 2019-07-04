# Expand Collapse

## Internally controlled
If you do not need to implement any custom logic, then you just need to provide the component an element for the summary content and the details content that is revealed on expand/collapse. Clicking the summary content will trigger an expand/collapse.

```html preview
<RuiExpandCollapseVue>
  <template v-slot:summary>
    <div slot="summary-content">
      Summary
    </div>
  </template>
  <template v-slot:details>
    <div slot="details-content">
      Details
    </div>
  </template>
</RuiExpandCollapseVue>
```

Leveraging slots we can pass content into the expand and collapse.

If you wish for the expand collapse to default to open, use the below:

```html preview
<RuiExpandCollapseVue open>
  <template v-slot:summary>
    <div slot="summary-content">
      Summary
    </div>
  </template>
  <template v-slot:details>
    <div slot="details-content">
      Details
    </div>
  </template>
</RuiExpandCollapseVue>
```

## To do -> External control open/close for component.