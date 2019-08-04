import React from 'react';
import {storiesOf} from '@storybook/react';
import RuiModal from './src';
import Readme from './README.md';

storiesOf('RuiModal', module)
	.addParameters({
		readme: {
			sidebar: Readme,
		},
	})
	.add('Basic Usage', () => (
		<>
			<button type="button" onClick={(): void => {document.getElementById('modal').open = true; }}>Open Modal</button>
			<RuiModal id="modal">
				<RuiModal.Heading>Modal Heading</RuiModal.Heading>
				<RuiModal.Detail>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
				</RuiModal.Detail>
			</RuiModal>
		</>
	))
	.add('Sizes', () => (
		<>
			<button type="button" onClick={(): void => {document.getElementById('small').open = true; }}>Small (Default)</button>
			<RuiModal id="small" size={RuiModal.SIZE.SMALL}>
				<RuiModal.Heading>Modal Heading</RuiModal.Heading>
				<RuiModal.Detail>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
				</RuiModal.Detail>
			</RuiModal>
			<button type="button" onClick={(): void => {document.getElementById('medium').open = true; }}>Medium</button>
			<RuiModal id="medium" size={RuiModal.SIZE.MEDIUM}>
				<RuiModal.Heading>Modal Heading</RuiModal.Heading>
				<RuiModal.Detail>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
				</RuiModal.Detail>
			</RuiModal>
			<button type="button" onClick={(): void => {document.getElementById('fullscreen').open = true; }}>Fullscreen</button>
			<RuiModal id="fullscreen" size={RuiModal.SIZE.FULLSCREEN}>
				<RuiModal.Heading>Modal Heading</RuiModal.Heading>
				<RuiModal.Detail>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
				</RuiModal.Detail>
			</RuiModal>
		</>
	))
	.add('Custom Close Button', () => (
		<>
			<button type="button" onClick={(): void => {document.getElementById('modal').open = true; }}>Open Modal</button>
			<RuiModal id="modal" customClose={<button type="button">x</button>}>
				<RuiModal.Heading>Modal Heading</RuiModal.Heading>
				<RuiModal.Detail>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
				</RuiModal.Detail>
			</RuiModal>
		</>
	))
	.add('Custom Actions', () => (
		<>
			<button type="button" onClick={(): void => {document.getElementById('modal').open = true; }}>Open Modal</button>
			<RuiModal
				id="modal"
				size={RuiModal.SIZE.MEDIUM}
				confirmTrigger={<button type="button">Confirm</button>}
				cancelTrigger={<button type="button">Cancel</button>}
			>
				<RuiModal.Heading>Modal Heading</RuiModal.Heading>
				<RuiModal.Detail as="div">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. <a href="#">A focusable element</a></p>
					<p><a href="#">Test</a>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
					<p><a href="#">Test test</a>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
				</RuiModal.Detail>
			</RuiModal>
		</>
	))
	.add('Responding to Modal Actions', () => (
		<>
			<button type="button" onClick={(): void => {document.getElementById('modal').open = true; }}>Open Modal</button>
			<RuiModal
				id="modal"
				size={RuiModal.SIZE.MEDIUM}
				confirmTrigger={<button type="button">Confirm</button>}
				cancelTrigger={<button type="button">Cancel</button>}
				onConfirm={(): void => { alert('User confirmed'); }}
				onCancel={(): void => { alert('User canceled'); }}
			>
				<RuiModal.Heading>Modal Heading</RuiModal.Heading>
				<RuiModal.Detail>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
				</RuiModal.Detail>
			</RuiModal>
		</>
	))
	.add('Changing Close Conditions', () => (
		<>
			<button type="button" onClick={(): void => {document.getElementById('no-outside').open = true; }}>Click outside close disabled</button>
			<RuiModal id="no-outside" noClickOutsideClose>
				<RuiModal.Heading>Modal Heading</RuiModal.Heading>
				<RuiModal.Detail>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
				</RuiModal.Detail>
			</RuiModal>
			<button type="button" onClick={(): void => {document.getElementById('no-esc').open = true; }}>Esc press close disabled</button>
			<RuiModal id="no-esc" noEscBtnClose>
				<RuiModal.Heading>Modal Heading</RuiModal.Heading>
				<RuiModal.Detail>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
				</RuiModal.Detail>
			</RuiModal>
		</>
	))
	.add('Customising First Focused Element', () => (
		<>
			<button type="button" onClick={(): void => {document.getElementById('modal').open = true; }}>Open Modal</button>
			<RuiModal id="modal" initiallyFocused="#focus-here">
				<RuiModal.Heading>Modal Heading</RuiModal.Heading>
				<RuiModal.Detail as="div">
					<p>Lorem ipsum dolor sit amet, <a href="#" id="focus-here">Focus here</a>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
				</RuiModal.Detail>
			</RuiModal>
		</>
	));
