import React from 'react';
import {storiesOf} from '@storybook/react';
import {RuiLink} from './src';
import Readme from './README.md';

storiesOf('Link', module)
	.addParameters({
		readme: {
			sidebar: Readme,
		},
	})
	.add('your first story 🎉', () => (
		<RuiLink>Link</RuiLink>
	))
	.add('A link with an href defined 🎉', () => (
		<RuiLink href="/#"> Link with Href</RuiLink>
	))
	.add('Link with targets defined 🎉', () => (
		<React.Fragment>
			<p> No target defined. Will default to _self </p>
			<RuiLink href="/#"> No target </RuiLink>
			<p> Target _blank </p>
			<RuiLink href="/#" target="_blank"> _blank </RuiLink>
			<p> Target _parent </p>
			<RuiLink href="/#" target="_parent"> _parent</RuiLink>
			<p> Target _top </p>
			<RuiLink href="/#" target="_top"> _top</RuiLink>
		</React.Fragment>
	))
	.add('A link with different colours 🎉', () => (
		<React.Fragment>
			<p> Default colour or no colour defined </p>
			<RuiLink href="/#" > no color  </RuiLink>
			<RuiLink href="/#" color="default"> Default </RuiLink>
			<p> Primary color </p>
			<RuiLink href="/#" color="primary"> Primary </RuiLink>
			<p> Error color </p>
			<RuiLink href="/#" color="error"> Error </RuiLink>
			<p> Inherit from parent </p>
			<RuiLink href="/#" color="inherit"> Inherit </RuiLink>
		</React.Fragment>

	))
	.add('A link with different hover states 🎉', () => (
		<React.Fragment>
			<p> No underline specified will default to underlined on hover </p>
			<RuiLink href="/#" > default underlining </RuiLink>
			<p> No underline </p>
			<RuiLink href="/#" underline="none" > No underlining </RuiLink>
			<p> Underline on hover </p>
			<RuiLink href="/#" underline="hover"> on hover </RuiLink>
			<p> Always underline </p>
			<RuiLink href="/#" underline="always"> Always </RuiLink>
			<p> Invert underline on hover </p>
			<RuiLink href="/#" underline="invert"> Invert </RuiLink>
		</React.Fragment>

	))
	.add('A link with breadcrumbs 🎉', () => (
		<React.Fragment>
			<p> No underline specified will default to underlined on hover </p>
			<RuiLink href="/#" > default underlining </RuiLink>
			<p> No underline color error </p>
			<RuiLink href="/#" underline="none" color="error" > No underlining </RuiLink>
			<p> Underline on hover with primary color  </p>
			<RuiLink href="/#" underline="hover" color="primary"> on hover </RuiLink>
			<p> Always underline </p>
			<RuiLink href="/#" underline="always"> Always </RuiLink>
			<p> Invert underline on hover </p>
			<RuiLink href="/#" underline="invert"> Invert </RuiLink>
		</React.Fragment>
	));
