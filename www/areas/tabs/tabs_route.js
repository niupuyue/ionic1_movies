/**
 * Created by Administrator on 2017/6/7.
 */
/**
 * guidepage.route:引导页功能子路由
 * guidepage.controller:引导页的控制器，里面会执行一些操作，数据的暴露，数据的请求和接受
 */
angular.module('tabs.route', ['tabs.controller'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('tabs', {
        url: '/tabs',
        templateUrl: 'areas/tabs/tabs.html',
        controller: 'TabsCtrl'
      })
  });
