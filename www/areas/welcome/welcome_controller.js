/**
 * Created by Administrator on 2017/6/7 0007.
 */
angular.module('welcome.controller', ['welcome.service'])
  .controller('WelcomeCtrl', function ($scope, $state) {
    //此处检测当前网络环境
    $("#welcome_title").addClass("animated bounceInLeft");
    $('#welcome_subtitle').addClass('animated bounceInRight');
    setTimeout(function () {
      $("#welcome_title").removeClass("bounceInLeft");
      $('#welcome_subtitle').addClass('bounceInRight');
      $("#welcome_title").addClass("bounceOutRight");
      $('#welcome_subtitle').addClass('bounceOutLeft');
      $state.go('tabs.home');
    }, 2000);

  })
