/**
 * Created by Administrator on 2017/6/7.
 */
angular.module('likes.route', ['likes.controller'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('tabs.likes', {
        url: '/likes',
        views:{
          'tab-likes': {
            templateUrl: 'areas/likes/likes.html',
            controller: 'LikesCtrl'
          }
        }
      })
  });
