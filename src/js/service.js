'use strict';
 
app.factory( 'ServiceMiniHub', ['$http', function($http){
	return {
		recuperarUser:function(user)
     	{
         	return $http.get('https://api.github.com/'+user); 
     	},
     	recuperarDatosUser:function(username)
     	{
     		return $http.get('https://api.github.com/users/{'+username+'}'); 
     	},
     	recuperarReposUser:function(username)
     	{
     		return $http.get('https://api.github.com/users/{'+username+'}/repos'); 
     	}

	}
}]);
