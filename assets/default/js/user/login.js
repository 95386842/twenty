/**
 * Created by jiamiu on 14-8-9.
 */
angular.module('user.login',[])
  .controller('login',function( $scope, $http ){

    $scope.email = ''
    $scope.password = ''

    $scope.login = function(){
      $http.post('/user/login',{
        email : $scope.email,
        password : $scope.password
      }).success(function(){
        window.location.href= '/page/node'
      })
    }
  })
  .controller('register',function( $scope, $http){
    $scope.name = ''
    $scope.password = ''
    $scope.email = ''

    $scope.register = function(){
      $http.post('/user/register',{
        name : $scope.name,
        email : $scope.email,
        password : $scope.password
      }).success(function(){
        window.location.href= '/page/node'
      })
    }
  })
