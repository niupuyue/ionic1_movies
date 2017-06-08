/**
 * Created by Administrator on 2017/6/7.
 */
angular.module('top.service', [])
  .factory('TopFty', function ($http) {
    /**
     * 请求数据到service，然后执行响应的方法，返回给controller
     */
    var movies = [];

    return {
      getMovies:function () {
        /**
         * 返回所有的电影列表
         */
        return movies;
      },
      selectMovie:function (movieId) {
        //返回单独的一个电影信息
        var movie = null;//null undefined

        return movie;
      }

    };
  });
