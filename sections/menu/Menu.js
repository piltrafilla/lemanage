/*global $scope */
function Menu($scope, $location) {
	"use strict";

	$scope.menuItems = [
		{
			name: "Gantt Diagram",
			id: "gantt",
			// action: function () {
			// 	$location.path("/guide");
			// }
		},
		{
			name: "Dependencies",
			id: "dependencies",
			// action: function () {
			// 	$location.path("/guide");
			// }
		},
		{
			name: "Release Details",
			id: "release",
			// action: function () {
			// 	$location.path("/vod");
			// }
		},
		{
			name: "Change Requests",
			id: "cr",
			action: function () {
				
			}
		},
		{
			name: "Risks and Issues",
			id: "risks",
			action: function () {
				
			}
		},
		{
			name: "Forecast",
			id: "forecast",
			action: function () {
				
			}
		}
	];

	
}