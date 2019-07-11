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

## Externally controlled
If you wish to externally control the open/close state of the expand collapse make sure you use v-bind the open property as well as binding the relevant listener. The @handleClick is a listener, that will listen to the child emit 'handleClick' with the relevant data and then run the method _handleClick. 

```js
<template>
  <div>
    <RuiExpandCollapseVue
      :open="open"
      @handleClick="_handleClick"
    >
      <template v-slot:summary>
        <div slot="summary-content">
          Externally controlled summary
        </div>
      </template>
      <template v-slot:details>
        <div slot="details-content">
          Externally controlled details
        </div>
      </template>
    </RuiExpandCollapseVue>
  </div>
</template>


<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
import RuiExpandCollapseVue from './src';

@Component({
  components: {
    RuiExpandCollapseVue
  }
})
export default class RuiExpandCollapseControllerVue extends Vue {
  
  open: string | null = null;

  private _handleClick(value: string) {
    return value === 'open' ? null : 'open';
  }
}
</script>


<style>
</style>
```

