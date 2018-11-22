const find = require('lodash/find');

exports.titles = [
  null,
  '能源的真實成本',
  '系統運作模式的比較',
  '民眾角色的轉變',
  '我們為何需要能源轉型',
  '再生能源的潛力',
  null,
];

const entrySite = find(document.getElementsByTagName('META'), (meta) => meta.getAttribute('name') === 'monopoly').getAttribute('content');

exports.links = [
  { label: '能源傳送門', href: entrySite },
  { label: '迷思懶人包', to: '/myth' },
  { label: '能源線索大蒐集', to: '/clues' },
];

const withPrefix = (link) => window.location.pathname.replace(window.location.hash, '#' + link);

exports.actionLinks = [
  { label: '能源\n傳送門', title: '一網打盡\n能源傳送門', href: entrySite },
  { label: '臺灣先生對\n綠電小姐的\n誤解與掙扎', title: '早就不該有的\n能源迷思', href: withPrefix('/myth') },
  { label: '能源線索\n大蒐集', title: '生活與能源\n的連結', href: withPrefix('/clues') },
  { label: '屋頂的\n小太陽', title: '太陽能板\n能省多少電', href: 'https://act.gp/2ytDMi3' },
];

exports.myth = {
  title: '早該破解的綠電迷思',
  sub: '2018年你對綠電的誤解還停在2008嗎？'
};
