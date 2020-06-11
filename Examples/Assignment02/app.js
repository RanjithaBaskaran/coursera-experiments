(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])

.controller('ToBuyController', ToBuyController );
.controller('AlreadyBoughtController', AlreadyBoughtController );
LunchCheckController.$inject = ['$scope'];
function ToBuyController($scope) {
  $scope.item_name = "";
  $scope.item_quantity  = "";
}

function AlreadyBoughtController($scope) {
  $scope.item_name = "";
  $scope.item_quantity = "";
}


})();
