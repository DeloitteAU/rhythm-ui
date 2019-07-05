

import React from 'react';
import {Link} from 'gatsby';
import RuiGrid from '@rhythm-ui/grid-react';

import Layout from '../templates/Feature';

//import Image from "../components/image"

const IndexPage = (): React.ReactNode => (
	<Layout>
		<div className="hero">
			<RuiGrid>
				<div className="s-6">
					<h1>Rhythm UI Design System</h1>
					<p>
						The <strong>Rhythm UI Design System</strong> is Deloitte&apos;s open-source white label design system for user interfaces and experiences.
						With Deloitte&apos;s foundations, the system consists of code, design tools and resources, human interface guidelines, and a vibrant
						community of contributors.
					</p>
					<Link to="/docs/components/rui-expand-collapse">
						<rui-button size="large" type="primary">Get Started</rui-button>
					</Link>
				</div>
			</RuiGrid>
		</div>
	</Layout>
);

export default IndexPage;
