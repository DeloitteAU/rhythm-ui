import React from 'react';

const Page = () => (
	<>
		<rui-header>
			<rui-header-mobile slot="mobile">
				<rui-button slot="menu-open">open</rui-button>
				<div slot="main-center">center main area</div>
				<div slot="main-right">right main area</div>
				<rui-button slot="menu-close">close</rui-button>
				<div slot="menu-top">top main area</div>
				<div slot="menu-middle">middle main area</div>
				<div slot="menu-bottom">bottom main area</div>
			</rui-header-mobile>
			<rui-header-desktop slot="desktop">
				<div slot="utilities-left">left utility area</div>
				<div slot="utilities-center">center utility area</div>
				<div slot="utilities-right">right utility area</div>
				<div slot="main-left">left main area</div>
				<div slot="main-center">center main area</div>
				<div slot="main-right">right main area</div>
			</rui-header-desktop>
		</rui-header>
	</>
);

export default Page;
