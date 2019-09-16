import React from 'react';

const TestPage = () => (
	<>
		<rui-header>
			<rui-header-mobile slot="mobile">
				<rui-button slot="menu-open">open menu</rui-button>
				<div slot="main-center">center main area</div>
				<div slot="main-right">right main area</div>
				<rui-button slot="menu-close" tabindex="0">close menu</rui-button>
				<rui-button slot="menu-top" >nav button bottom</rui-button>
				<rui-button slot="menu-middle" >nav button bottom</rui-button>
				<rui-button slot="menu-bottom" >nav button bottom</rui-button>
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
		<rui-button>Page Button</rui-button>
	</>
);

export default TestPage;
