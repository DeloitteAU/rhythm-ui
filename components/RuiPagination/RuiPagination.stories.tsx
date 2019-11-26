import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, number, object, text} from '@storybook/addon-knobs';
import {register} from './src';
import Readme from './readme.md';

register();

storiesOf('RuiPagination', module)
	.addParameters({
		readme: {
			sidebar: Readme,
		},
	})
	.addDecorator(withKnobs)
	.add('Playground', () => (
        <rui-pagination
            id="onclick-example"
            current-page="3"
            num-pages="5">
        </rui-pagination>
	))
	.add('Using hrefs', () => (
		<rui-pagination
            id="href-example"
            current-page="3"
            num-pages="5"
            next-link="#next"
            prev-link="#prev">
        </rui-pagination>
	))
	.add('Custom Previous/Next Elements', () => (
		<rui-pagination
			currentPage="3"
			numPages="5"
		>
			<span slot="prev-content" styles="padding: 0 5px;">Previous</span>
			<span slot="next-content" styles="padding: 0 5px;">Next</span>
		</rui-pagination>
	))
	.add('Custom page labels', () => (
		<rui-pagination
            current-page="3"
            num-pages="5"
            next-aria-label="custom next label"
            prev-aria-label="custom prev label">
        </rui-pagination>
	))
	.add('Custom Ellipses Elements', () => (
        <rui-pagination
            current-page="10"
            pages-shown="5"
            num-pages="20">
            <div slot="ellipses" class="custom-ellipses">
                <div class="ellipses-item"></div>
                <div class="ellipses-item"></div>
                <div class="ellipses-item"></div>
            </div>
        </rui-pagination>
    ));

