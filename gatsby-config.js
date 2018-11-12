const gaId = 'UA-36627671-1';

module.exports = {
  siteMetadata: {
    title: '能源也能左右世界 - 一個關於現在、未來能源情報的網站',
    description: '當臺灣的能源能被你左右，你決定往左還是往右？',
    gaId,
    // host: 'https://relab.cc',
    // remote: '//relabcc.github.io/gp-energy-left-or-right',
    // prefix: '/gp-lr-test',
    host: 'https://www.greenpeace.org',
    remote: '//www.plasticfreelife.org/wp-content/uploads/2018/RE-comparison',
    prefix: '/taiwan/RE-comparison',
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
    {
      resolve: 'gatsby-plugin-facebook-pixel',
      options: {
        pixelId: '1534311166840921',
      },
    },
  ],
};
