<template>
  <rui-expand-collapse>
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

  //Registering props example --> this can also be placed in the @Component decorator. 
  @Prop({default: 'wow'}) private basicData!: string

  // Data property example
  flag: boolean = false;

  // lifecycle hook
  mounted() {
    this.flag = true;
  }

  // computed example
  get myPropData(): string {
    return this.basicData;
  }

  // methods example
  private changeStateValue(): boolean {
    return this.flag = !this.flag;
  }
}
</script>

<style></style>
