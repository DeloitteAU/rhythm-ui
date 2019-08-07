import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, number, object, text} from '@storybook/addon-knobs';
import RuiPagination from './src';
import Readme from './README.md';


storiesOf('Pagination', module)
	.addParameters({
		readme: {
			sidebar: Readme,
		},
	})
	.addDecorator(withKnobs)
	.add('Playground', () => (
		<RuiPagination
			onPageRequest={pageNumber => {alert(`Page ${pageNumber} requested!`);}}
			currentPage={number('currentPage', 3)}
			numPages={number('numPages', 5)}
			pagesShown={number('pagesShown', 5)}
		/>
	))
	.add('Using hrefs', () => (
		<RuiPagination
			generateHref={pageNum => `#${pageNum}`}
			currentPage={3}
			numPages={5}
			nextLink="#next"
			prevLink="#prev"
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
	.add('Custom page labels', () => (
		<RuiPagination
			generateLabel={pageNum => ((pageNum < 10) ? `0${pageNum}` : pageNum)}
			generateAriaLabel={pageNum => `Visit page ${pageNum}`}
			currentPage={3}
			numPages={5}
		/>
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

