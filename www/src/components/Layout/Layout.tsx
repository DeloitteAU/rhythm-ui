import React from 'react';
import RuiLayout from '@rhythm-ui/layout-react';
import RuiSkipLinks from '@rhythm-ui/skip-links-react';

import {Header} from '../../components/Header';
import {Footer} from '../../components/Footer';
import {Navigation} from '../../components/Navigation';

const Layout = ({children, nav}) => (
	<>
		<RuiSkipLinks />
		<RuiLayout type="rembrandt">
			<Header />
			<Navigation nodes={nav.nodes} />
			<main id="main">
				{children}
			</main>
			<Footer />
		</RuiLayout>
	</>
);

export default Layout;
