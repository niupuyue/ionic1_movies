/**
 * Created by Administrator on 2017/6/7.
 */
angular.module('weekly.controller', ['weekly.service'])
  .controller('WeeklyCtrl', function ($scope, $state, WeeklyFty, $http) {
    //这是tabs需要执行的操作
    getData();
    var movies = [];

    function getData() {
      $http.get('http://127.0.0.1:8080/moviecat/gzmovie')
        .success(function (newItems) {
          $scope.weeklymovies = newItems.data.subjects;
        })
        .error(function () {
          console.log("访问失败");
        })
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
