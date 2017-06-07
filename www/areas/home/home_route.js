/**
 * Created by Administrator on 2017/6/7.
 */
angular.module('home.route', ['hot.route','comming.route','top.route','weekly.route'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('tabs.home', {
        url: '/home',
        views: {
          'tab-home': {
            templateUrl: 'areas/home/home.html',
          }
        }
      })
  });
