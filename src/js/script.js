'use strict';
var app = angular.module("myMiniHub", []);
app.controller("minihub-controller", function ($http, $scope, ContactService) {

    $scope.cargarUser = function () {
        MiniHubService.getUser().then(function (response) {
            $scope.usuario = response.data;
            if (response == 0) {
                alert("No se encontraron resultados");
            }
        });
    };

    $scope.cargarRepositorios = function () {
        MiniHubService.getRepositorios().then(function (response) {
            $scope.repos = response.data;
            if (response == 0) {
                alert("No se encontraron resultados");
            }
        });
    };

    $scope.UserModel = {
        "login": "",
        "id": 0,
        "avatar_url": "",
        "gravatar_id": "",
        "url": "",
        "html_url": "",
        "followers_url": "",
        "following_url": "",
        "gists_url": "",
        "starred_url": "",
        "subscriptions_url": "",
        "organizations_url": "",
        "repos_url": "",
        "events_url": "",
        "received_events_url": "",
        "type": "",
        "site_admin": false,
        "name": null,
        "company": null,
        "blog": null,
        "location": null,
        "email": null,
        "hireable": null,
        "bio": null,
        "public_repos": 3,
        "public_gists": 0,
        "followers": 0,
        "following": 0,
        "created_at": "",
        "updated_at": ""
    };

});


