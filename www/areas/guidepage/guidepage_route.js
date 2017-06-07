/**
 * Created by Administrator on 2017/6/7.
 */
/**
 * guidepage.route:引导页功能子路由
 * guidepage.controller:引导页的控制器，里面会执行一些操作，数据的暴露，数据的请求和接受
 */
angular.module('guidepage.route', ['guidepage.controller'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('guidepage', {
        url: '/guidepage',
        templateUrl: 'areas/guidepage/guidepage.html',
        controller: 'GuidePageCtrl'
      })
  });
