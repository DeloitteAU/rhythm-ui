module.exports = {
	siteMetadata: {
		title: 'Gatsby Default Starter',
		description: 'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
		author: '@gatsbyjs',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`,
			},
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'components',
				path: `${__dirname}/../packages`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'docs',
				path: `${__dirname}/src/docs`,
			},
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
			  plugins: [
				{
				  resolve: 'gatsby-remark-autolink-headers',
				  options: {
					icon: false,
				  },
				},
				{
				  // For including gif files
				  resolve: 'gatsby-remark-copy-linked-files',
				}
			  ],
			},
		  },
		{
			resolve: 'gatsby-mdx',
			options: {
			  extensions: ['.md', '.mdx'],
			  gatsbyRemarkPlugins: [
				{ resolve: 'gatsby-remark-autolink-headers' },
				// gatsby-remark-relative-images must
				// go before gatsby-remark-images
				{ resolve: 'gatsby-remark-relative-images' },
				{
				  resolve: 'gatsby-remark-images',
				  options: {
					// It's important to specify the maxWidth (in pixels) of
					// the content container as this plugin uses this as the
					// base for generating different widths of each image.
					// Note: we also set the max width in the Content of the Layout component
					linkImagesToOriginal: false,
					maxWidth: 960,
					quality: 80,
					wrapperStyle: '',
				  },
				},
				{ resolve: 'gatsby-remark-copy-linked-files' }
			  ]
			},
		  },
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'gatsby-starter-default',
				short_name: 'starter',
				start_url: '/',
				background_color: '#663399',
				theme_color: '#663399',
				display: 'minimal-ui',
				icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
			},
		},
		//   },
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// 'gatsby-plugin-offline',


	],
};
