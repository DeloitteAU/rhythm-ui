
import { configure, addDecorator, addParameters } from '@storybook/react';
import { addReadme } from 'storybook-readme';
import {withKnobs} from "@storybook/addon-knobs";


addDecorator(addReadme);
addDecorator(withKnobs);


addParameters({
	options: {
		/**
		 * where to show the addon panel
		 * @type {('bottom'|'right')}
		 */
		panelPosition: 'right',
	},
});
// automatically import all files ending in *.stories.js
const req = require.context('../react', true, /.stories.tsx$/);
function loadStories() {
	req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
