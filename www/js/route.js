/**
 * Created by Administrator on 2017/6/7.
 */
/**
 * guidepage.route:引导页
 * tabs.route:切换
 * home.route:首页
 * likes.route:收藏
 * details.route:电影详情
 * cart.route:已经看过的电影
 * account.route:个人信息
 * 'details.route',
 */
angular.module('route', [
  'guidepage.route',
  'tabs.route',
  'home.route',
  'likes.route',
  'carts.route',
  'account.route',
])
  .config(function ($stateProvider, $urlRouterProvider) {

    // 当没有匹配到合适的路由之后默然跳转的url地址，还有就是项目默认启动的url地址
    if (localStorage["isFirst"]) {
      $urlRouterProvider.otherwise('/tabs/home/hot');
    }
    else {
      $urlRouterProvider.otherwise('/guidepage');
    }


  });
