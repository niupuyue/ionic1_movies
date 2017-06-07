/**
 * Created by Administrator on 2017/6/7.
 */
angular.module('weekly.route', ['weekly.controller'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('tabs.home.weekly', {
        url: '/weekly',
        views:{
          'tabs-home-weekly': {
            templateUrl: 'areas/home/weeklymovies/weekly.html',
            controller: 'WeeklyCtrl'
          }
        }
      })
  });
