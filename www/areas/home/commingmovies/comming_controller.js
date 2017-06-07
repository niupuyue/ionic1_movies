/**
 * Created by Administrator on 2017/6/7.
 */
angular.module('comming.controller', ['comming.service'])
  .controller('CommingCtrl', function ($scope, $state, CommingFty, $http) {
    //这是tabs需要执行的操作
    getData();
    var movies = [];

    function getData() {
      $http.get('http://127.0.0.1:8080/moviecat/commingmovie')
        .success(function (newItems) {

          $scope.commingmovies = newItems.data.subjects;

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
