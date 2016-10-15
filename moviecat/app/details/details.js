(function(angular){
  'use strict';
  // 1.创建详情页模块
 var app = angular.module('moviecat.details',['ngRoute','moviecat.jsonp']);


  // 2. 配置路由规则
  app.config(['$routeProvider',function($routeProvider){
     $routeProvider.when('/details/:id',{
      templateUrl:'./details/view.html',
      controller:'detailsController'

     })


  }])

  // 3.创建详情页控制器
  app.controller('detailsController',[
    '$scope','$routeParams','MyService',function($scope,$routeParams,MyService){
      MyService.jsonp('https://api.douban.com/v2/movie/subject/'+$routeParams.id,null,function(data){
        // console.log(data);
        $scope.data=data;
        $scope.$apply();
      });
  }]);
})(angular);