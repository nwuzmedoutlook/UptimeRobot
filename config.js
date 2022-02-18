// 配置
window.Config = {

  // 站点名
  SiteName: 'DAC导航😎网站状态监控',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两种 Api Key
  ApiKeys: [
    'ur1634149-62b83908c10c2c9008462c3a',
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 30,

  // 导航栏菜单
  Navi: [
    {
      text: '📚资料共享',
      url: 'http://nwuzmed.ysepan.com/'
    },
    {
      text: '👋点我加群',
      url: 'http://nwu-zmed.mikecrm.com/p1sRvbB'
    }
  ]
};
