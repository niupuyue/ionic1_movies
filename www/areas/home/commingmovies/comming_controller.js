/**
 * Created by Administrator on 2017/6/7.
 */
angular.module('comming.controller', ['comming.service'])
  .controller('CommingCtrl', function ($scope, $state, CommingFty, $http) {
    //这是tabs需要执行的操作
    getData();
    var movies = [];
    window.doubanMovieCallback_comingsoon = function (data) {
      if (data.msg) {
        //返回错误信息
        // $scope.message = data.msg;
        console.log(data.msg);
      } else {
        console.log(data);
        $scope.commingmovies = data.subjects;
      }
    }
    function getData() {
      $http.jsonp('https://api.douban.com/v2/movie/coming_soon?callback=doubanMovieCallback_comingsoon')
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
