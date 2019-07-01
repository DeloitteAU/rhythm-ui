<template>
  <rui-expand-collapse>
    <slot name="summary"></slot>
    <slot name="details"></slot>
  </rui-expand-collapse>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import '@rhythm-ui/expand-collapse';

// TODO: Need to figure out how to register the component from RUI
// Type of RuiExpandCollapse is not assignable to parameter of type 'VueClass<Vue>'.
// Will get warning message if we have registered the componenet correctly.

@Component({})
export default class RuiExpandCollapseVue extends Vue {

  //Registering props example --> this can also be placed in the @Component decorator. 
  @Prop({default: 'wow'}) private basicData!: string

  // Data property example
  flag: boolean = false;

  // lifecycle hook
  mounted() {
    console.log('props', this.basicData)
    console.log('state', this.flag);
  }

  // computed example
  get myPropData(): string {
    return this.basicData;
  }

  // methods example
  changeStateValue(): boolean {
    return this.flag =  !this.flag;
  }
}
</script>

<style></style>
