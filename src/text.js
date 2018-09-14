exports.titles = [
  null,
  '能源的真實成本',
  '系統運作模式的比較',
  '民眾角色的轉變',
  '我們為何需要能源轉型',
  '再生能源的潛力',
  null,
];

const entrySite = 'https://relabcc.github.io/gp-monopoly/';
const think = 'https://relabcc.github.io/greenpeace-energy-petition/';

exports.links = [
  { label: '能源傳送門', href: entrySite },
  { label: '迷思懶人包', to: '/myth' },
  { label: '21道微想題', href: think },
];

exports.actionLinks = [
  { label: '能源\n傳送門', title: '一網打盡\n能源傳送門', href: entrySite },
  { label: '臺灣先生對\n綠電小姐的\n誤解與掙扎', title: '早就不該有的\n能源迷思', to: '/myth' },
  { label: '＿＿的時候\n想一想，\n21個微想題', title: '生活與能源\n的連結', href: think },
];

exports.myth = {
  title: '早該破解的綠電迷思',
  sub: '2018年你對綠電的誤解還停在2008嗎？'
};
