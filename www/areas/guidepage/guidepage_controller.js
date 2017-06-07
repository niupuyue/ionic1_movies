/**
 * Created by Administrator on 2017/6/7.
 */
/**
 * guidePage.controller:引导页面业务逻辑
 * guidepage.service:接受数据
 */
angular.module('guidepage.controller', ['guidepage.service'])
  .controller('GuidePageCtrl', function ($scope, $state,GuidePageFty) {
    //数据传递
    $scope.name = GuidePageFty.getName();

    //引导页slide初始化
    var guideSlide = new Swiper('#guideSlide', {
      pagination: '.swiper-pagination',
      onSlideChangeEnd: function (swiper) {
        var index = guideSlide.activeIndex + 1;
        if (index == 2 || index == 3) {
          var item = $("#tips-" + index);
          if (item.hasClass("hidden")) {
            item.removeClass("hidden");
            item.addClass("guide-show");
          }
        }
      }
    });

    // 跳转到主页方法
    $scope.func_goHome = function () {
      localStorage["isFirst"] = true;
      $state.go('tabs.home');
    }
  })

