/**
 * config
 */

var path = require('path');

exports.config = {
  debug: false,
  name: '机神在线',
  description: '机神在线',
  version: '0.2.2',

  // site settings
  site_headers: [
    '<meta name="author" content="EDP@TAOBAO" />',
  ],
  host: 'localhost.cnodejs.org',
  site_logo: '', // default is `name`
  site_navs: [
    // [ path, title, [target=''] ],
    [ '/?q=苹果', '苹果专区'],
    [ '/?q=三星', '三星专区'],
    [ '/about', '关于' ],
  ],
  site_static_host: '', // 静态文件存储域名
  mini_assets: false, // 静态文件的合并压缩，详见视图中的Loader
  site_enable_search_preview: false, // 开启google search preview
  site_google_search_domain:  'jishen365.com',  // google search preview中要搜索的域名

  upload_dir: path.join(__dirname, 'public', 'user_data', 'images'),

  db: 'mongodb://127.0.0.1/node_club_dev',
  session_secret: 'node_club',
  auth_cookie_name: 'node_club',
  port: 3000,

  // 话题列表显示的话题数量
  list_topic_count: 20,

  // 限制发帖时间间隔，单位：毫秒
  post_interval: 10000,

  // RSS
  rss: {
    title: '机神：卖好玩的电子产品',
    link: 'http://jishen365.com',
    language: 'zh-cn',
    description: '机神：专注于好机器',

    //最多获取的RSS Item数量
    max_rss_items: 50
  },
 
  // site links
  site_links: [
    {
      'text': '京东',
      'url': 'http://jd.com'
    },
    {
      'text': '易迅',
      'url': 'http://51buy.com'
    }
  ],

  // sidebar ads
  side_ads: [
    {
      'url': 'http://www.upyun.com/?utm_source=nodejs&utm_medium=link&utm_campaign=upyun&md=nodejs',
      'image': 'http://site-cnode.b0.upaiyun.com/images/upyun_logo.png',
      'text': ''
    },
    {
      'url': 'http://adc.taobao.com/',
      'image': 'http://adc.taobao.com/bundles/devcarnival/images/d2_180x250.jpg',
      'text': ''
    }
  ],

  // mail SMTP
  mail_opts: {
    service: "Gmail",
    auth: {
      user: "philipp.xue@gmail.com",
      pass: "h1r1e5!#m@"
    }
  },

  //weibo app key
  weibo_key: 10000000,

  // admin 可删除话题，编辑标签，设某人为达人
  admins: { admin: true },

  // [ { name: 'plugin_name', options: { ... }, ... ]
  plugins: [
    // { name: 'onehost', options: { host: 'localhost.cnodejs.org' } },
    // { name: 'wordpress_redirect', options: {} }
  ]
};
