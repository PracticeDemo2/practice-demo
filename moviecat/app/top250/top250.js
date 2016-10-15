// (function(angular){
//   'use strict';
//   // 这里是正在热模块
//   var app = angular.module('moviecat.top250',['ngRoute']);

//   // 自己管理自己的路由
//   app.config(['$routeProvider',function($routeProvider){
//     $routeProvider.when('/top250',{
//       // 注意这时路径是相当app.js（主模块）所在目录
//       templateUrl:'./top250/view.html',
//       controller:'top250Controller'
//     })
//   }]);
//   // 创建控制器
//   app.controller('top250Controller',[
//     '$scope','$http',function($scope,$http){
     
//      $http.get('./top250/top250.json').then(function(response){
//       console.log(response.data);
//       $scope.data=response.data;
//      })
     
//   }]);
// })(angular)
// 

(function(angular){
  'use strict';
  // 这里是top250模块
  var app = angular.module('moviecat.top250',[
    'ngRoute',
    'moviecat.jsonp']);

  // 自己管理自己的路由
  app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/top250',{
      // 这时路径是相当app.js（主模块）所在目录
      templateUrl:'./top250/view.html',
      controller:'top250Controller'
    })

  }]);
  // 创建控制器
  app.controller('top250Controller',[
    '$scope','$http','$routeParams','$route','$window','MyService'
    ,function($scope,$http,$routeParams,$route,$window,MyService){
     $scope.loading=false;//这个值是用来表示动画是否显示的。

     var page = ($routeParams.page||'1')-0;//是字符串
     $scope.page=page; 
     var start = (page-1)*5;

      // MyService.jsonp('http://api.douban.com/v2/movie/movie_list',
      MyService.jsonp('https://api.douban.com/v2/movie/'+$routeParams.movieType+'?q='+$routeParams.q,
        {start:start,count:5},function(data){
          console.log(data);
          $scope.data=data;
          // 在异步中的对数据模型的更改，angular无法监视，
          $scope.total=data.total; // 总的数量， 
          $scope.totalPage= $window.Math.ceil($scope.total/data.count); // 总的页数
          $scope.loading=true;
          // setTimout,setInterval;
          $scope.$apply();//数据模型发生了改变。

        });



      // 下一页按钮的点击事件
      $scope.getPage=function(nowPage){
        
        if(nowPage<=1||nowPage>$scope.totalPage){
          return;
        }

        // 需要注入$route,updataParams用来更新url中锚点的参数，一旦改变，就会重新匹配规则。
        $route.updateParams({page:nowPage});
      }
  }]);
})(angular);


// (function(angular){
//   'use strict';
//   // 这里是top250模块
//   var app = angular.module('moviecat.top250',[
//     'ngRoute',
//     'moviecat.jsonp']);

//   // 自己管理自己的路由
//   app.config(['$routeProvider',function($routeProvider){
//     $routeProvider.when('/:movieType/:page?',{
//       // 这时路径是相当app.js（主模块）所在目录
//       templateUrl:'./top250/view.html',
//       controller:'top250Controller'
//     })

//   }]);
//   // 创建控制器
//   app.controller('top250Controller',[
//     '$scope','$http','$routeParams','$route','$window','MyService'
//     ,function($scope,$http,$routeParams,$route,$window,MyService){
//     console.log($routeParams);
//      $scope.loading=false;//这个值是用来表示动画是否显示的。

//      var page = ($routeParams.page||'1')-0;//是字符串
//      $scope.page=page; 
//      var start = (page-1)*5;

//       // MyService.jsonp('http://api.douban.com/v2/movie/movie_list',
//       MyService.jsonp('https://api.douban.com/v2/movie/'+$routeParams.movieType+'?q='+$routeParams.q,
//         {start:start,count:5},function(data){
//           // console.log(data);
//           $scope.data=data;
//           // 在异步中的对数据模型的更改，angular无法监视，
//           $scope.total=data.total; // 总的数量， 
//           $scope.totalPage= $window.Math.ceil($scope.total/data.count); // 总的页数
//           $scope.loading=true;
//           // setTimout,setInterval;
//           $scope.$apply();//数据模型发生了改变。

//         });



//       // 下一页按钮的点击事件
//       $scope.getPage=function(nowPage){
        
//         if(nowPage<=1||nowPage>$scope.totalPage){
//           return;
//         }

//         // 需要注入$route,updataParams用来更新url中锚点的参数，一旦改变，就会重新匹配规则。
//         $route.updateParams({page:nowPage});
//       }
//   }]);
// })(angular);