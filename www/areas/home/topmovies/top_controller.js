/**
 * Created by Administrator on 2017/6/7.
 */
angular.module('top.controller', ['top.service'])
  .controller('TopCtrl', function ($scope, $state,TopFty,$http) {
    //这是tabs需要执行的操作
    getData();
    var movies = [];

    window.doubanMovieCallback = function (data) {
      if (data.msg) {
        //返回错误信息
        // $scope.message = data.msg;
        console.log(data.msg);
      } else {
        console.log(data);
        $scope.topmovies = data.subjects;
      }
    }
    function getData() {
      $http.jsonp('https://api.douban.com/v2/movie/top250?callback=doubanMovieCallback')
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
