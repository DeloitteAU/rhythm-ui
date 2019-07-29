import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, number, object, string} from '@storybook/addon-knobs';
import RuiPagination from './src';
import Readme from './README.md';


const playgroundItems = {
	1: {label: '01', href: '#1'},
	2: {label: '02', href: '#2'},
	3: {label: '03', href: '#3'},
	4: {label: '04', href: '#4'},
	5: {label: '05', href: '#5'},
};

storiesOf('Pagination', module)
	.addParameters({
		readme: {
			sidebar: Readme,
		},
	})
	.addDecorator(withKnobs)
	.add('Playground', () => (
		<RuiPagination
			currentPage={number('currentPage', 3)}
			items={object('items', playgroundItems)}
			nextLink={string('nextLink', '#')}
			prevLink={string('prevLink', '#')}
			pagesShown={number('pagesShown', 5)}
		/>
	))
	.add('Playground (Custom Events)', () => (
		<RuiPagination
			currentPage={number('currentPage', 5)}
			numPages={number('numPages', 10)}
			pagesShown={number('pagesShown', 10)}
			onNextClick={() => { alert('Next clicked!');}}
			onPrevClick={() => { alert('Prev clicked!');}}
			onItemClick={page => { alert(`Item ${page} clicked!`);}}
		/>
	))
	.add('Items Config', () => (
		<RuiPagination
			items={{
				1: {href: '#1'},
				2: {href: '#2'},
				3: {href: '#3'},
				4: {href: '#4'},
				5: {href: '#5'},
			}}
			nextLink="#"
			prevLink="#"
			currentPage={3}
		/>
	))
	.add('Custom Previous/Next Elements', () => (
		<RuiPagination
			currentPage={3}
			numPages={5}
		>
			<RuiPagination.Previous style={{padding: '0 5px'}}>Previous</RuiPagination.Previous>
			<RuiPagination.Next style={{padding: '0 5px'}}>Next</RuiPagination.Next>
		</RuiPagination>
	))
	.add('Custom Ellipses Elements', () => {
		const ellipsesStyle = {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		};

		const ellipsesItemStyle = {
			width: '3px',
			height: '3px',
			margin: '0 1px',
			background: '#333',
		};

		return (
			<RuiPagination
				currentPage={10}
				pagesShown={5}
				numPages={20}
			>
				<RuiPagination.Ellipses style={ellipsesStyle}>
					<div style={ellipsesItemStyle} />
					<div style={ellipsesItemStyle} />
					<div style={ellipsesItemStyle} />
				</RuiPagination.Ellipses>
			</RuiPagination>
		);
	});

