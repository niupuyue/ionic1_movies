/**
 * Created by Administrator on 2017/6/7.
 */
angular.module('account.route', ['account.controller'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('tabs.account', {
        url: '/account',
        views:{
          'tab-account': {
            templateUrl: 'areas/account/account.html',
            controller: 'AccountCtrl'
          }
        }
      })
  });
