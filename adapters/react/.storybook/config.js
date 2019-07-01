
import {configure, addDecorator, addParameters} from '@storybook/react';
import {addReadme} from 'storybook-readme';
import {withKnobs} from '@storybook/addon-knobs';
import React from "react";
import './styles.css';

const wrapperDecorator = storyFn => <div className='code-preview'>{storyFn()}</div>;

addDecorator(wrapperDecorator);
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
// automatically import all files ending in *.stories.tsx
const req = require.context('../', true, /.stories.tsx$/);
function loadStories() {
	req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
