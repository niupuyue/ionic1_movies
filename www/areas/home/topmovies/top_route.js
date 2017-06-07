/**
 * Created by Administrator on 2017/6/7.
 */
angular.module('top.route', ['top.controller'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('tabs.home.top', {
        url: '/top',
        views:{
          'tabs-home-top': {
            templateUrl: 'areas/home/topmovies/top.html',
            controller: 'TopCtrl'
          }
        }
      })
  });
