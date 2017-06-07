/**
 * Created by Administrator on 2017/6/7.
 */
angular.module('guidepage.service', [])
  .factory('GuidePageFty', function() {
    var name = "腾科togogo";
    return {
      getName:function () {
        return name;
      }
    };
  });
