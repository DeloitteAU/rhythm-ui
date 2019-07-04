import {storiesOf} from '@storybook/vue';
import {action} from '@storybook/addon-actions'
import RuiExpandCollapseVue from './src';
import Readme from './README.md';

storiesOf('Expand Collapse', module) 
.addParameters({
  readme: {
    // Show readme at the addons panel
    sidebar: Readme,
  },
})
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