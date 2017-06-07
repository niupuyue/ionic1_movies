/**
 * Created by Administrator on 2017/6/7.
 */
angular.module('comming.route', ['comming.controller'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('tabs.home.comming', {
        url: '/comming',
        views:{
          'tabs-home-comming': {
            templateUrl: 'areas/home/commingmovies/comming.html',
            controller: 'CommingCtrl'
          }
        }
      })
  });
