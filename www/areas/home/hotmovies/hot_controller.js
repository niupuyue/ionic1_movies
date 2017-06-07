/**
 * Created by Administrator on 2017/6/7.
 */
angular.module('hot.controller', ['hot.service'])
  .controller('HotCtrl', function ($scope, $state,HotFty,$http) {
    //这是tabs需要执行的操作
    getData();
    var movies = [];
    function getData() {
      $http.get('http://192.168.30.134:8080/moviecat/hotmovie')
        .success(function (newItems) {
          $scope.hotmovies = newItems.data.subjects;
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
