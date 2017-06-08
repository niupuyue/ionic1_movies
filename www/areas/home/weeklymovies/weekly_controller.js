/**
 * Created by Administrator on 2017/6/7.
 */
angular.module('weekly.controller', ['weekly.service'])
  .controller('WeeklyCtrl', function ($scope, $state, WeeklyFty, $http) {
    //这是tabs需要执行的操作
    getData();
    var movies = [];

    function getData() {
      window.doubanMovieCallback = function (data) {
        if (data.msg) {
          //返回错误信息
          console.log(data.msg);
        } else {
          // console.log(data.subjects[0].subject.id);
          $scope.weeklymovies = data.subjects;
        }
      }

      $http.jsonp('https://api.douban.com/v2/movie/us_box?callback=doubanMovieCallback')
        .finally(function () {
          $scope.$broadcast('scroll.refreshComplete');
          $ionicLoading.hide();
        });
    }

    /**
     * 刷新页面
     */
    $scope.dorefresh = function () {
      getData();
    }

  })
