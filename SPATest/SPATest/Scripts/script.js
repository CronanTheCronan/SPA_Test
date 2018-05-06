/// <reference path="vendor/angular.min.js" />

var app = angular.module("draftApp", ["ngRoute"])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/dashboard", {
                templateUrl: "Templates/dashboard.html",
                controller: "dashboardController"
            })
            .when("/draftboard", {
                templateUrl: "Templates/draftboard.html",
                controller: "draftboardController"
            })
            .when("/draftsetup", {
                templateUrl: "Templates/draftsetup.html",
                controller: "draftsetupController"
            })
            .when("/teamsetup", {
                templateUrl: "Templates/teamsetup.html",
                controller: "teamsetupController"
            })
            .when("/welcome", {
                templateUrl: "Templates/welcome.html",
                controller: "welcomeController"
            })
            .otherwise({
                redirectTo: "/welcome"
            })
        $locationProvider.html5Mode(true);
    })
    .controller("draftsetupController", function ($scope) {
        $scope.message = "This is a test";
    })
    .controller("teamsetupController", function ($scope) {
        $scope.message = "Rock On";
    })
    .controller("draftboardController", function ($scope) {

    })
    .controller("dashboardController", function ($scope) {

    })
    .controller("welcomeController", function ($scope) {

    })