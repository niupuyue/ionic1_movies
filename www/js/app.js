//项目开始的js文件
/**
 * 引入需要使用的js模块
 * route:路由
 * config:设置
 * global:全局参数
 * ionicLazyLoad:数据懒加载
 * indexdb:本地数据库
 * commonjs:本地其他配置
 * ngCordova:提供手机和当前代码的交互
 *
 * ,'indexdb','commonJs'
 */
angular.module('starter', ['ionic', 'route', 'config','global','ionicLazyLoad','ngCordova'])

  .run(function ($ionicPlatform,$location,$ionicHistory,$rootScope,$ionicPopup) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    })
    /**
     * 两次返回键退出应用
     */
    $ionicPlatform.registerBackButtonAction(function (e) {
      //阻止默认的行为
      e.preventDefault();
      // 退出提示框
      function showConfirm() {
        var servicePopup = $ionicPopup.show({
          title: '提示',
          subTitle: '你确定要退出应用吗？',
          scope: $rootScope,
          buttons: [
            {
              text: '取消',
              type: 'button-clear button-assertive',
              onTap: function () {
                return 'cancel';
              }
            },
            {
              text: '确认',
              type: 'button-clear button-assertive border-left',
              onTap: function (e) {
                return 'active';
              }
            },
          ]
        });
        servicePopup.then(function (res) {
          if (res == 'active') {
            // 退出app
            ionic.Platform.exitApp();
          }
        });
      }

      // 判断当前路由是否为各个导航栏的首页，是的话则显示提示框
      if ($location.path() == '/home' || $location.path() == '/likes' || $location.path() == '/carts' || $location.path() == '/account') {
        showConfirm();
      } else if ($ionicHistory.backView()) {
        $ionicHistory.goBack();
      } else {
        showConfirm();
      }
      return false;
    }, 101);
    ;
  })
