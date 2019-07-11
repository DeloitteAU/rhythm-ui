import React from 'react';
import {Link} from 'gatsby';
import RuiGrid from '@rhythm-ui/grid-react';
import RuiButton from '@rhythm-ui/button-react';

import Layout from '../templates/Feature';

import particles from './particles';

class IndexPage extends React.Component {

	private _canvas: HTMLCanvasElement | null = null;

	public componentDidMount() {
		particles(this._canvas);
	}

	public render() {
		return (
			<Layout>
				<div className="hero">
					<canvas ref={ref => this._canvas = ref}></canvas>
					<RuiGrid>
						<div className="s-6 hero__content">
							<h1>The shortest pathway from idea to realisation</h1>
							<p>
								The <strong>Rhythm UI Design System</strong> is Deloitte&apos;s open-source white label design system for user interfaces and experiences.
								With Deloitte&apos;s foundations, the system consists of code, design tools and resources, human interface guidelines, and a vibrant
								community of contributors.
							</p>
							<Link to="/docs/components/rui-expand-collapse">
								<RuiButton size="large" type="primary">Get Started</RuiButton>
							</Link>
						</div>
					</RuiGrid>
				</div>
				<div className="feature">
					<RuiGrid>
						<div className="p-l-8 s-6">
							<h2>The right tool for building design systems</h2>
							<ul>
								<li>Ensure consistent UX and brand experiences, at scale</li>
								<li>Web components run on any platform or device</li>
								<li>Build a custom UI library that works across teams and projects</li>
							</ul>
						</div>
					</RuiGrid>
				</div>
				<div className="feature">
					<RuiGrid>
						<div className="s-6">
							<h2>One component library for all of your applications</h2>
							<p>Rhythm UI components are just Web Components, so they work with any major framework or no framework at all.</p>
							<ul>
								<li>React</li>
								<li>Vue</li>
								<li>Angular</li>
								<li>Sitecore JSS</li>
							</ul>
						</div>
					</RuiGrid>
				</div>
				<div className="feature">
					<RuiGrid>
						<div className="s-12">
							<h2>Why build with Rhythm UI?</h2>
							<p>Rhythm UI allows teams to build better web apps, faster.</p>
						</div>
					</RuiGrid>
					<RuiGrid>
						<div className="s-4">
							<h3>Future friendly</h3>
						</div>
						<div className="s-4">
							<h3>Open Web Standards</h3>
							<p>By using the web components standard, supported in all modern browsers, Rhythm UI components offer many distinct advantages for use in a design system, namely:</p>
							<ul>
								<li>They work on any platform or device</li>
								<li>They work with any front-end framework, so they can easily be used across teams and projects using different tech stacks</li>
								<li>They facilitate the creation of one company-wide code implementation instead of one per framework or platform</li>
							</ul>
						</div>
						<div className="s-4">
							<h3>Open Sourced</h3>
						</div>
					</RuiGrid>
				</div>
			</Layout>
		);
	}
}

export default IndexPage;
