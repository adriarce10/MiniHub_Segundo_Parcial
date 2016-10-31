'use strict';

angular.module('myApp')
        .controller('GifCtrl', function ($http, $scope, $q) {
            this.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];
            $scope.username = "";
            $scope.password = "";
            $scope.change = function () {
                if ($scope.user !== undefined) {
                    $scope.fetch();
                    $scope.fetchRepositories();
                }
            };
            $scope.fetchRepositories = function () {
                var deferred = $q.defer();
                var authToken = "Basic " + btoa($scope.username + ":" + $scope.password);
                var config = {
                    headers: {
                        'Authorization': authToken,
                        'Accept': 'application/json;odata=verbose'
                    }
                };
                $http.get('https://api.github.com/users/' + $scope.user + '/repos', config)
                        .then(function successCallback(response) {
                            deferred.resolve($scope.repositorios = angular.fromJson(response.data));
                        }, function errorCallback(error) {
                            console.log(error);
                            deferred.resolve($scope.gifs = angular.fromJson({}));
                        });
                return deferred.promise;

            };
            $scope.fetch = function () {
                var deferred = $q.defer();
                var authToken = "Basic " + btoa($scope.username + ":" + $scope.password);
                var config = {
                    headers: {
                        'Authorization': authToken,
                        'Accept': 'application/json;odata=verbose'
                    }
                };
                $http.get('https://api.github.com/users/' + $scope.user, config)
                        .then(function successCallback(response) {
                            alert("algo que mostrar");
                            deferred.resolve($scope.gifs = angular.fromJson(response.data));
                        }, function errorCallback(error) {
                            console.log(error);
                            deferred.resolve($scope.gifs = angular.fromJson({}));
                        });
                return deferred.promise;

            };

        });
