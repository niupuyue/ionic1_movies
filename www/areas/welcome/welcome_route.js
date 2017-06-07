/**
 * Created by Administrator on 2017/6/7 0007.
 */
angular.module('welcome.route', ['welcome.controller'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('welcome', {
        url: '/welcome',
        templateUrl: 'areas/welcome/welcome.html',
        controller: 'WelcomeCtrl'
      })
  });
