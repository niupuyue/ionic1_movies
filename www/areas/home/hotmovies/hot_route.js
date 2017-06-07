/**
 * Created by Administrator on 2017/6/7.
 */
angular.module('hot.route', ['hot.controller'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('tabs.home.hot', {
        url: '/hot',
        views:{
          'tab-home-hot': {
            templateUrl: 'areas/home/hotmovies/hot.html',
            controller: 'HotCtrl'
          }
        }
      })
  });
