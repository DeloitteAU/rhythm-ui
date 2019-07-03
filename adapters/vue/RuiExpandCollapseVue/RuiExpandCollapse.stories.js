import {storiesOf} from '@storybook/vue';
import {action} from '@storybook/addon-actions'
import RuiExpandCollapseVue from './src/RuiExpandCollapse.vue';

storiesOf('Expand Collapse', module)
.add('basic expand for vue', () => ({
  components: {RuiExpandCollapseVue},
  template: `
    <RuiExpandCollapseVue>
      <template v-slot:summary>
        <div slot="summary-content">
          Vue Summary
        </div>
      </template>
      <template v-slot:details>
        <div slot="details-content">
          Vue Details
        </div>
      </template>
    </RuiExpandCollapseVue>
  `,
  methods: {action: action('clicked')}
}));