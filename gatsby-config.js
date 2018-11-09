module.exports = {
  siteMetadata: {
    title: '能源也能左右世界 - 一個關於現在、未來能源情報的網站',
    description: '當臺灣的能源能被你左右，你決定往左還是往右？',
    link: 'https://relab.cc',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-gtag',
      options: {
        // your google analytics tracking id
        trackingId: 'UA-58674730-16',
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
