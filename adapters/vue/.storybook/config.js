import {configure, addDecorator, addParameters} from '@storybook/vue';
import {addReadme} from 'storybook-readme/vue';


addDecorator(addReadme);

addParameters({
	options: {
		/**
		 * where to show the addon panel
		 * @type {('bottom'|'right')}
		 */
		panelPosition: 'right',
	},
});

const req = require.context('../', true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
