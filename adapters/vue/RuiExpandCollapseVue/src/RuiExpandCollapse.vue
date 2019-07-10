<template>
  <rui-expand-collapse
    :open="open"
    @click="_changeStateValue"
  >
    <slot name="summary" />
    <slot name="details" />
  </rui-expand-collapse>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
import '@rhythm-ui/expand-collapse';

// https://vuejs.org/v2/api/#ignoredElements
Vue.config.ignoredElements = [
  'rui-expand-collapse'
];

@Component({})
export default class RuiExpandCollapseVue extends Vue {
  
  @Prop() private open?: string | null

  @Prop() private handleClick?: Function

  get myPropData() {
    return this.open;
  }

  private _changeStateValue(): void {
    if (this.handleClick) {
      this.$emit('handleClick', this.open)
    }
    return
  }
}
</script>

<style></style>
