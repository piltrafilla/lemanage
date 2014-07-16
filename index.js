/*global Menu,angular, ngRoute */
angular.module("Le Manage Tool", ["ngRoute"]).config(function ($routeProvider) {
	"use strict";
	$routeProvider.
	when('/', {controller: Menu, templateUrl: 'sections/menu/menu.html'}).
	otherwise({redirectTo: '/'});
});
