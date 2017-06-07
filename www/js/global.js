/**
 * Created by Administrator on 2017/6/7.
 */
// 全局变量模块
angular.module('global', [])
  .constant("GlobalVariable",{
    'SERVER_PATH':'127.0.0.1:8080/',
    'PORT':'8080',
    'HTTP':'http://',
    'VERSION':"1.0.1"
  })
