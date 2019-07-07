<template>
  <rui-expand-collapse @click="changeStateValue">
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
  
  @Prop() private open?: boolean

  @Prop() private handleClick?: Function

  get myPropData() {
    return this.open;
  }

  private changeStateValue(): void {
    this.$emit('handleClick', this.open)
  }
}
</script>

<style></style>
