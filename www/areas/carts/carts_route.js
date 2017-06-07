/**
 * Created by Administrator on 2017/6/7.
 */
angular.module('carts.route', ['carts.controller'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('tabs.carts', {
        url: '/carts',
        views:{
          'tab-carts': {
            templateUrl: 'areas/carts/carts.html',
            controller: 'CartsCtrl'
          }
        }
      })
  });
