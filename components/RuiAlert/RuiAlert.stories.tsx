import React, {Fragment} from 'react';
import {storiesOf} from '@storybook/react';
import {text, boolean, radios} from '@storybook/addon-knobs';
import {register} from './src';
import Readme from './readme.md';

register();

storiesOf('RuiAlert', module)
	.addParameters({
		readme: {
			sidebar: Readme,
		},
	})
	.add('Default', () => (
		<rui-alert>
			<rui-rich-text>
				<h5>Alert title</h5>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in malesuada lectus. Quisque tristique tellus ante, vitae pharetra nulla sollicitudin tempus  </p>
				<a href="#">This is a CTA link or action to do something</a>
			</rui-rich-text>
		</rui-alert>
	))
	.add('Icons', () => (
		<rui-alert>
			<rui-icon slot="icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMDAwIj4KICAgICAgICA8cGF0aCBkPSJNNi41IDEyLjI2OEw5LjYxOCAxNS41bDcuODgyLTciLz4KICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMC41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgIDwvZz4KPC9zdmc+Cg==">
			</rui-icon>
			<rui-rich-text>
				<h5>Alert title</h5>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in malesuada lectus. Quisque tristique tellus ante, vitae pharetra nulla sollicitudin tempus  </p>
				<a href="#">This is a CTA link or action to do something</a>
			</rui-rich-text>
		</rui-alert>
	))
	.add('Types', () => (
		<Fragment>
			<rui-alert type="success">
				<rui-icon slot="icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMDAwIj4KICAgICAgICA8cGF0aCBkPSJNNi41IDEyLjI2OEw5LjYxOCAxNS41bDcuODgyLTciLz4KICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMC41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgIDwvZz4KPC9zdmc+Cg==">
				</rui-icon>
				<rui-rich-text>
					<p> This is a success alert </p>
				</rui-rich-text>
			</rui-alert>
			<rui-alert type="warning">
				<rui-icon slot="icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAuNSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgICAgICA8dGV4dCBmaWxsPSIjMDAwIiBmb250LWZhbWlseT0iSW50ZXItUmVndWxhciwgSW50ZXIiIGZvbnQtc2l6ZT0iMTYiIGxldHRlci1zcGFjaW5nPSItLjEyIj4KICAgICAgICAgICAgPHRzcGFuIHg9IjkuODMzIiB5PSIxOCI+ITwvdHNwYW4+CiAgICAgICAgPC90ZXh0PgogICAgPC9nPgo8L3N2Zz4K">
				</rui-icon>
				<rui-rich-text>
					<p> This is a warning alert </p>
				</rui-rich-text>
			</rui-alert>

			<rui-alert type="error">
				<rui-icon slot="icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwLjUiLz4KICAgICAgICA8cGF0aCBkPSJNOC40NDIgOC40NjRsNy4wNzEgNy4wNzItNy4wNzEtNy4wNzJ6Ii8+CiAgICAgICAgPHBhdGggZD0iTTE1LjUxMyA4LjQ2NGwtNy4wNzEgNy4wNzIgNy4wNzEtNy4wNzJ6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=">
				</rui-icon>
				<rui-rich-text>
					<p> This is an error alert </p>
				</rui-rich-text>
			</rui-alert>

			<rui-alert type="info">
				<rui-icon slot="icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS41IDEuNSkiPgogICAgICAgIDxjaXJjbGUgY3g9IjEwLjUiIGN5PSIxMC41IiByPSIxMC41IiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgogICAgICAgIDx0ZXh0IGZpbGw9IiMwMDAiIGZvbnQtZmFtaWx5PSJJbnRlci1SZWd1bGFyLCBJbnRlciIgZm9udC1zaXplPSIxNiIgbGV0dGVyLXNwYWNpbmc9Ii0uMTIiPgogICAgICAgICAgICA8dHNwYW4geD0iNy4wMDMiIHk9IjE2LjUiPj88L3RzcGFuPgogICAgICAgIDwvdGV4dD4KICAgIDwvZz4KPC9zdmc+Cg==">
					</rui-icon>
					<rui-rich-text>
					<p> This is an info alert </p>
				</rui-rich-text>
			</rui-alert>
		</Fragment>
	))
	.add('Dismissible', () => (
		<rui-alert dismissible>
			<rui-rich-text>
				<p> This is a dismissable alert </p>
			</rui-rich-text>
			<rui-icon slot="dismissible" label="Dismiss alert" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CgogPGc+CiAgPHRpdGxlPmJhY2tncm91bmQ8L3RpdGxlPgogIDxyZWN0IGZpbGw9Im5vbmUiIGlkPSJjYW52YXNfYmFja2dyb3VuZCIgaGVpZ2h0PSI0MDIiIHdpZHRoPSI1ODIiIHk9Ii0xIiB4PSItMSIvPgogPC9nPgogPGc+CiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogIDxnIHRyYW5zZm9ybT0icm90YXRlKDQ1IDEyLjAwMDAwMDAwMDAwMDAwNSwxMS45OTk5OTk5OTk5OTk5OTYpICIgaWQ9InN2Z18xIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSJub25lIj4KICAgPHBhdGggaWQ9InN2Z18yIiBkPSJtMjAsMTJsLTE2LDBsMTYsMHptLTgsLThsMCwxNmwwLC0xNnoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPg==">
			</rui-icon>
		</rui-alert>
	))
	.add('Playground', () => {
		const dismissible = boolean('Dismissible', false);
		const type = radios('Type', {default: 'default', success: 'success', warning: 'warning', error: 'error', info: 'info'}, 'default');
		const withIcon = boolean('With Icon', true);
		const icon = text('Icon', 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMDAwIj4KICAgICAgICA8cGF0aCBkPSJNNi41IDEyLjI2OEw5LjYxOCAxNS41bDcuODgyLTciLz4KICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMC41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgIDwvZz4KPC9zdmc+Cg==');
		const content = text('Content', 'This is an alert');
		const closeLabel = text('Close Label', 'Dismiss alert');
		const closeIcon = text('Close Icon', 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CgogPGc+CiAgPHRpdGxlPmJhY2tncm91bmQ8L3RpdGxlPgogIDxyZWN0IGZpbGw9Im5vbmUiIGlkPSJjYW52YXNfYmFja2dyb3VuZCIgaGVpZ2h0PSI0MDIiIHdpZHRoPSI1ODIiIHk9Ii0xIiB4PSItMSIvPgogPC9nPgogPGc+CiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogIDxnIHRyYW5zZm9ybT0icm90YXRlKDQ1IDEyLjAwMDAwMDAwMDAwMDAwNSwxMS45OTk5OTk5OTk5OTk5OTYpICIgaWQ9InN2Z18xIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSJub25lIj4KICAgPHBhdGggaWQ9InN2Z18yIiBkPSJtMjAsMTJsLTE2LDBsMTYsMHptLTgsLThsMCwxNmwwLC0xNnoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPg==');

		// TODO: find a way to make `dismissible` an optional prop. Lit-element does not see `dismissible={false}` as a false value but as a true value as it ignores the `={false}` part
		return (
			<rui-alert dismissible={dismissible} type={type}>
				{withIcon && (
					<rui-icon slot="icon" src={icon}></rui-icon>
				)}
				<rui-rich-text>
					<p>{content}</p>
				</rui-rich-text>
				{dismissible && (
					<rui-icon slot="dismissible" label={closeLabel} src={closeIcon}></rui-icon>
				)}
			</rui-alert>
		)
	});
