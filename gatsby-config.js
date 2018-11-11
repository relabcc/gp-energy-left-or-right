const gaId = 'UA-58674730-16';

module.exports = {
  siteMetadata: {
    title: '能源也能左右世界 - 一個關於現在、未來能源情報的網站',
    description: '當臺灣的能源能被你左右，你決定往左還是往右？',
    gaId,
    host: 'https://relabcc.github.io',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-gtag',
      options: {
        trackingId: gaId,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-facebook-pixel',
    //   options: {
    //     pixelId: 'pixel id here',
    //   },
    // },
  ],
  pathPrefix: '/gp-energy-left-or-right',
};
