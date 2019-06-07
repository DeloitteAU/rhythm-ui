import React from 'react';

import { storiesOf } from '@storybook/react';

import { RuiGrid } from './lib';


storiesOf('Grid', module)
	.add('with some grid', () => (
		<div>
			<RuiGrid columns="6" className="demo">
				<div> 1 column </div>
				<div> 2 column </div>
				<div> 3 column </div>
				<div> 4 column </div>
				<div> 5 column </div>
				<div> 6 column </div>
			</RuiGrid>
		</div>
	));
