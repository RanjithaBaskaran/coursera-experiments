(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.items = "";
  $scope.message = "";

  $scope.checkLunchItems = function () {
    var itemMessage = countItems($scope.items);
    $scope.message = itemMessage;
  };

  function countItems(string) {
    var count = 0;
    var itemMsg = "";
    if(string != " " && string !=""){
      count = string.trim().split(/\s*,\s*/).length;
      console.log(count);
      if(count <= 3){
        itemMsg = "sari sapdu";
      }else{
        itemMsg = "ootha pothum da thinathu";
      }
        return itemMsg;
    }else {
       return "Please Enter Items";
    }
  };

}

})();
