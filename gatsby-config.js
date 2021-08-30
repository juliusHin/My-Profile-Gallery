require('dotenv').config()


module.exports = {
	siteMetadata: {
		siteUrl: "https://www.yourdomain.tld",
		title: "My Profile Gallery",
	},
	plugins: [
		"gatsby-plugin-image",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sitemap",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "src/images/icon.png",
			},
		},
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
		{
			// For development
			// resolve: `..`,
			resolve: "gatsby-source-instagram",
			options: {
				username: "julius_tanuwijaya",
				access_token: process.env.IG_ACCESS_TOKEN,
				instagram_id: process.env.ID_INSTAGRAM,
				paginate: 20,
				maxPosts: 50,
				hashtags: true,
			},
		},
		{
			// For development
			// resolve: `..`,
			resolve: "gatsby-source-instagram",
			options: {
				username: "37550933864",
			},
		},
	],
};
