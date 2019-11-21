import React, {Fragment} from 'react';
import {storiesOf} from '@storybook/react';
import {text, boolean, radios} from '@storybook/addon-knobs';
import {register} from './src';
import Readme from './readme.md';

register();

storiesOf('RuiAccordion', module)
	.addParameters({
		readme: {
			sidebar: Readme,
		},
	})
	.add('Default', () => (
		<Fragment>
			<rui-accordion>
				<rui-accordion-item>
					<span slot="summary-content">
						Expander summary
						<svg width="8px" height="5px" viewBox="0 0 8 5" slot="icon" className="icon">
							<g stroke="none" stroke-width="1" fill-rule="evenodd">
								<g transform="translate(-4.000000, -6.000000)" fill-rule="nonzero">
									<path d="M7.99975,10.74975 C7.80775,10.74975 7.61575,10.67675 7.46975,10.52975 L4.21975,7.27975 C3.92675,6.98675 3.92675,6.51275 4.21975,6.21975 C4.51275,5.92675 4.98675,5.92675 5.27975,6.21975 L7.99975,8.93875 L10.71975,6.21975 C11.01275,5.92675 11.48675,5.92675 11.77975,6.21975 C12.07275,6.51275 12.07275,6.98675 11.77975,7.27975 L8.52975,10.52975 C8.38375,10.67675 8.19175,10.74975 7.99975,10.74975" fill="currentColor"></path>
								</g>
							</g>
						</svg>
					</span>
					<p slot="details-content">Expanded content</p>
				</rui-accordion-item>
				<rui-accordion-item>
					<span slot="summary-content">
						Expander summary
						<svg width="8px" height="5px" viewBox="0 0 8 5" slot="icon" className="icon">
							<g stroke="none" stroke-width="1" fill-rule="evenodd">
								<g transform="translate(-4.000000, -6.000000)" fill-rule="nonzero">
									<path d="M7.99975,10.74975 C7.80775,10.74975 7.61575,10.67675 7.46975,10.52975 L4.21975,7.27975 C3.92675,6.98675 3.92675,6.51275 4.21975,6.21975 C4.51275,5.92675 4.98675,5.92675 5.27975,6.21975 L7.99975,8.93875 L10.71975,6.21975 C11.01275,5.92675 11.48675,5.92675 11.77975,6.21975 C12.07275,6.51275 12.07275,6.98675 11.77975,7.27975 L8.52975,10.52975 C8.38375,10.67675 8.19175,10.74975 7.99975,10.74975" fill="currentColor"></path>
								</g>
							</g>
						</svg>
					</span>
					<p slot="details-content">Expanded content</p>
				</rui-accordion-item>
				<rui-accordion-item>
					<span slot="summary-content">
						Expander summary
						<svg width="8px" height="5px" viewBox="0 0 8 5" slot="icon" className="icon">
							<g stroke="none" stroke-width="1" fill-rule="evenodd">
								<g transform="translate(-4.000000, -6.000000)" fill-rule="nonzero">
									<path d="M7.99975,10.74975 C7.80775,10.74975 7.61575,10.67675 7.46975,10.52975 L4.21975,7.27975 C3.92675,6.98675 3.92675,6.51275 4.21975,6.21975 C4.51275,5.92675 4.98675,5.92675 5.27975,6.21975 L7.99975,8.93875 L10.71975,6.21975 C11.01275,5.92675 11.48675,5.92675 11.77975,6.21975 C12.07275,6.51275 12.07275,6.98675 11.77975,7.27975 L8.52975,10.52975 C8.38375,10.67675 8.19175,10.74975 7.99975,10.74975" fill="currentColor"></path>
								</g>
							</g>
						</svg>
					</span>
					<p slot="details-content">Expanded content</p>
				</rui-accordion-item>
				<rui-accordion-item>
					<span slot="summary-content">
						Expander summary
						<svg width="8px" height="5px" viewBox="0 0 8 5" slot="icon" className="icon">
							<g stroke="none" stroke-width="1" fill-rule="evenodd">
								<g transform="translate(-4.000000, -6.000000)" fill-rule="nonzero">
									<path d="M7.99975,10.74975 C7.80775,10.74975 7.61575,10.67675 7.46975,10.52975 L4.21975,7.27975 C3.92675,6.98675 3.92675,6.51275 4.21975,6.21975 C4.51275,5.92675 4.98675,5.92675 5.27975,6.21975 L7.99975,8.93875 L10.71975,6.21975 C11.01275,5.92675 11.48675,5.92675 11.77975,6.21975 C12.07275,6.51275 12.07275,6.98675 11.77975,7.27975 L8.52975,10.52975 C8.38375,10.67675 8.19175,10.74975 7.99975,10.74975" fill="currentColor"></path>
								</g>
							</g>
						</svg>
					</span>
					<p slot="details-content">Expanded content</p>
				</rui-accordion-item>
			</rui-accordion>
		</Fragment>
	))
	.add('Single', () => (
		<Fragment>
			<rui-accordion behaviour="single">
				<rui-accordion-item>
					<span slot="summary-content">
						Expander summary
						<svg width="8px" height="5px" viewBox="0 0 8 5" slot="icon" className="icon">
							<g stroke="none" stroke-width="1" fill-rule="evenodd">
								<g transform="translate(-4.000000, -6.000000)" fill-rule="nonzero">
									<path d="M7.99975,10.74975 C7.80775,10.74975 7.61575,10.67675 7.46975,10.52975 L4.21975,7.27975 C3.92675,6.98675 3.92675,6.51275 4.21975,6.21975 C4.51275,5.92675 4.98675,5.92675 5.27975,6.21975 L7.99975,8.93875 L10.71975,6.21975 C11.01275,5.92675 11.48675,5.92675 11.77975,6.21975 C12.07275,6.51275 12.07275,6.98675 11.77975,7.27975 L8.52975,10.52975 C8.38375,10.67675 8.19175,10.74975 7.99975,10.74975" fill="currentColor"></path>
								</g>
							</g>
						</svg>
					</span>
					<p slot="details-content">Expanded content</p>
				</rui-accordion-item>
				<rui-accordion-item>
					<span slot="summary-content">
						Expander summary
						<svg width="8px" height="5px" viewBox="0 0 8 5" slot="icon" className="icon">
							<g stroke="none" stroke-width="1" fill-rule="evenodd">
								<g transform="translate(-4.000000, -6.000000)" fill-rule="nonzero">
									<path d="M7.99975,10.74975 C7.80775,10.74975 7.61575,10.67675 7.46975,10.52975 L4.21975,7.27975 C3.92675,6.98675 3.92675,6.51275 4.21975,6.21975 C4.51275,5.92675 4.98675,5.92675 5.27975,6.21975 L7.99975,8.93875 L10.71975,6.21975 C11.01275,5.92675 11.48675,5.92675 11.77975,6.21975 C12.07275,6.51275 12.07275,6.98675 11.77975,7.27975 L8.52975,10.52975 C8.38375,10.67675 8.19175,10.74975 7.99975,10.74975" fill="currentColor"></path>
								</g>
							</g>
						</svg>
					</span>
					<p slot="details-content">Expanded content</p>
				</rui-accordion-item>
				<rui-accordion-item>
					<span slot="summary-content">
						Expander summary
						<svg width="8px" height="5px" viewBox="0 0 8 5" slot="icon" className="icon">
							<g stroke="none" stroke-width="1" fill-rule="evenodd">
								<g transform="translate(-4.000000, -6.000000)" fill-rule="nonzero">
									<path d="M7.99975,10.74975 C7.80775,10.74975 7.61575,10.67675 7.46975,10.52975 L4.21975,7.27975 C3.92675,6.98675 3.92675,6.51275 4.21975,6.21975 C4.51275,5.92675 4.98675,5.92675 5.27975,6.21975 L7.99975,8.93875 L10.71975,6.21975 C11.01275,5.92675 11.48675,5.92675 11.77975,6.21975 C12.07275,6.51275 12.07275,6.98675 11.77975,7.27975 L8.52975,10.52975 C8.38375,10.67675 8.19175,10.74975 7.99975,10.74975" fill="currentColor"></path>
								</g>
							</g>
						</svg>
					</span>
					<p slot="details-content">Expanded content</p>
				</rui-accordion-item>
				<rui-accordion-item>
					<span slot="summary-content">
						Expander summary
						<svg width="8px" height="5px" viewBox="0 0 8 5" slot="icon" className="icon">
							<g stroke="none" stroke-width="1" fill-rule="evenodd">
								<g transform="translate(-4.000000, -6.000000)" fill-rule="nonzero">
									<path d="M7.99975,10.74975 C7.80775,10.74975 7.61575,10.67675 7.46975,10.52975 L4.21975,7.27975 C3.92675,6.98675 3.92675,6.51275 4.21975,6.21975 C4.51275,5.92675 4.98675,5.92675 5.27975,6.21975 L7.99975,8.93875 L10.71975,6.21975 C11.01275,5.92675 11.48675,5.92675 11.77975,6.21975 C12.07275,6.51275 12.07275,6.98675 11.77975,7.27975 L8.52975,10.52975 C8.38375,10.67675 8.19175,10.74975 7.99975,10.74975" fill="currentColor"></path>
								</g>
							</g>
						</svg>
					</span>
					<p slot="details-content">Expanded content</p>
				</rui-accordion-item>
			</rui-accordion>
		</Fragment>
	))
	.add('Multiple with heading and  expand/collapse button', () => (
		<Fragment>
			<rui-accordion behaviour="multiple">
				<h2 slot="heading">
					Accordion heading
				</h2>
				<rui-button behaviour="button" className="button" slot="button-toggle">
					Expand/Collapse all
					<svg width="8px" height="5px" viewBox="0 0 8 5" slot="icon" className="icon">
						<g stroke="none" stroke-width="1" fill-rule="evenodd">
							<g transform="translate(-4.000000, -6.000000)" fill-rule="nonzero">
								<path d="M7.99975,10.74975 C7.80775,10.74975 7.61575,10.67675 7.46975,10.52975 L4.21975,7.27975 C3.92675,6.98675 3.92675,6.51275 4.21975,6.21975 C4.51275,5.92675 4.98675,5.92675 5.27975,6.21975 L7.99975,8.93875 L10.71975,6.21975 C11.01275,5.92675 11.48675,5.92675 11.77975,6.21975 C12.07275,6.51275 12.07275,6.98675 11.77975,7.27975 L8.52975,10.52975 C8.38375,10.67675 8.19175,10.74975 7.99975,10.74975" fill="currentColor"></path>
							</g>
						</g>
					</svg>
				</rui-button>
				<rui-accordion-item>
					<span slot="summary-content">
						Expander summary
						<svg width="8px" height="5px" viewBox="0 0 8 5" slot="icon" className="icon">
							<g stroke="none" stroke-width="1" fill-rule="evenodd">
								<g transform="translate(-4.000000, -6.000000)" fill-rule="nonzero">
									<path d="M7.99975,10.74975 C7.80775,10.74975 7.61575,10.67675 7.46975,10.52975 L4.21975,7.27975 C3.92675,6.98675 3.92675,6.51275 4.21975,6.21975 C4.51275,5.92675 4.98675,5.92675 5.27975,6.21975 L7.99975,8.93875 L10.71975,6.21975 C11.01275,5.92675 11.48675,5.92675 11.77975,6.21975 C12.07275,6.51275 12.07275,6.98675 11.77975,7.27975 L8.52975,10.52975 C8.38375,10.67675 8.19175,10.74975 7.99975,10.74975" fill="currentColor"></path>
								</g>
							</g>
						</svg>
					</span>
					<p slot="details-content">Expanded content</p>
				</rui-accordion-item>
				<rui-accordion-item>
					<span slot="summary-content">
						Expander summary
						<svg width="8px" height="5px" viewBox="0 0 8 5" slot="icon" className="icon">
							<g stroke="none" stroke-width="1" fill-rule="evenodd">
								<g transform="translate(-4.000000, -6.000000)" fill-rule="nonzero">
									<path d="M7.99975,10.74975 C7.80775,10.74975 7.61575,10.67675 7.46975,10.52975 L4.21975,7.27975 C3.92675,6.98675 3.92675,6.51275 4.21975,6.21975 C4.51275,5.92675 4.98675,5.92675 5.27975,6.21975 L7.99975,8.93875 L10.71975,6.21975 C11.01275,5.92675 11.48675,5.92675 11.77975,6.21975 C12.07275,6.51275 12.07275,6.98675 11.77975,7.27975 L8.52975,10.52975 C8.38375,10.67675 8.19175,10.74975 7.99975,10.74975" fill="currentColor"></path>
								</g>
							</g>
						</svg>
					</span>
					<p slot="details-content">Expanded content</p>
				</rui-accordion-item>
				<rui-accordion-item>
					<span slot="summary-content">
						Expander summary
						<svg width="8px" height="5px" viewBox="0 0 8 5" slot="icon" className="icon">
							<g stroke="none" stroke-width="1" fill-rule="evenodd">
								<g transform="translate(-4.000000, -6.000000)" fill-rule="nonzero">
									<path d="M7.99975,10.74975 C7.80775,10.74975 7.61575,10.67675 7.46975,10.52975 L4.21975,7.27975 C3.92675,6.98675 3.92675,6.51275 4.21975,6.21975 C4.51275,5.92675 4.98675,5.92675 5.27975,6.21975 L7.99975,8.93875 L10.71975,6.21975 C11.01275,5.92675 11.48675,5.92675 11.77975,6.21975 C12.07275,6.51275 12.07275,6.98675 11.77975,7.27975 L8.52975,10.52975 C8.38375,10.67675 8.19175,10.74975 7.99975,10.74975" fill="currentColor"></path>
								</g>
							</g>
						</svg>
					</span>
					<p slot="details-content">Expanded content</p>
				</rui-accordion-item>
				<rui-accordion-item>
					<span slot="summary-content">
						Expander summary
						<svg width="8px" height="5px" viewBox="0 0 8 5" slot="icon" className="icon">
							<g stroke="none" stroke-width="1" fill-rule="evenodd">
								<g transform="translate(-4.000000, -6.000000)" fill-rule="nonzero">
									<path d="M7.99975,10.74975 C7.80775,10.74975 7.61575,10.67675 7.46975,10.52975 L4.21975,7.27975 C3.92675,6.98675 3.92675,6.51275 4.21975,6.21975 C4.51275,5.92675 4.98675,5.92675 5.27975,6.21975 L7.99975,8.93875 L10.71975,6.21975 C11.01275,5.92675 11.48675,5.92675 11.77975,6.21975 C12.07275,6.51275 12.07275,6.98675 11.77975,7.27975 L8.52975,10.52975 C8.38375,10.67675 8.19175,10.74975 7.99975,10.74975" fill="currentColor"></path>
								</g>
							</g>
						</svg>
					</span>
					<p slot="details-content">Expanded content</p>
				</rui-accordion-item>
			</rui-accordion>
		</Fragment>
	));
