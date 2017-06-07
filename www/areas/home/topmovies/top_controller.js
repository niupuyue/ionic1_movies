/**
 * Created by Administrator on 2017/6/7.
 */
angular.module('top.controller', ['top.service'])
  .controller('TopCtrl', function ($scope, $state,TopFty,$http) {
    //这是tabs需要执行的操作
    getData();
    var movies = [];
    function getData() {
      $http.get('http://127.0.0.1:8080/moviecat/topmovie')
        .success(function (newItems) {

          $scope.topmovies = newItems.data.subjects;

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
