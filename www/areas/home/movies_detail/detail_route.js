/**
 * Created by Administrator on 2017/6/8.
 */
/**
 * 电影详情页
 */

angular.module('detail.route', ['detail.controller'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('detail/:movieId', {
      url: '/detail/:movieId',
      templateUrl: 'areas/home/movies_detail/detail.html',
      controller: 'DetailCtrl'
    })
  });
