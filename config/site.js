module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'OpenSTEMKids', // Navigation and Site Title
  titleAlt: 'OpenSTEMKids Science Technology Engineering Math for kids education', // Title for JSONLD
  description: 'Science Technology Engineering Math for kids',
  url: 'https://www.openstemkids.com', // Domain of your site. No trailing slash!
  siteUrl: 'https://www.openstemkids.com/openstemkids', // url + pathPrefix
  siteLanguage: 'en', // Language Tag on <html> element
  logo: 'static/logo/logo.png', // Used for SEO
  banner: 'static/logo/banner.png',
  // JSONLD / Manifest
  favicon: 'static/logo/favicon.png', // Used for manifest favicon generation
  shortName: 'OpenSTEM', // shortname for manifest. MUST be shorter than 12 characters
  author: '@stemopen', // Author for schemaORGJSONLD
  themeColor: '#3e7bf2',
  backgroundColor: '#d3e0ff',
  twitter: '@stemopen', // Twitter Username
};
