/**
 * Created by Administrator on 2017/6/8.
 */
/**
 * Created by Administrator on 2017/6/7.
 */
angular.module('detail.controller', ['detail.service'])
  .controller('DetailCtrl', function ($scope, $state,$stateParams, DetailFty, $http) {
    getData();
    var movies = [];

    console.log($stateParams.movieId);

    function getData() {
      window.doubanMovieDetailCallback = function (data) {
        if (data.msg) {
          //返回错误信息
          // $scope.message = data.msg;
          console.log(data.msg);
        } else {
          console.log(data);
          $scope.movie = data;

        }
      }

      $http.jsonp('https://api.douban.com/v2/movie/subject/' + $stateParams.movieId + '?callback=doubanMovieDetailCallback')
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
