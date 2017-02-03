(function (){
  'use strict';
  angular.module('LunchApp',[])
    .controller('LunchController',LunchController);

    LunchController.$inject = ['$scope'];
    function LunchController($scope){
        //$scope.list = "Tomato,Cheese, Bread";

        // Set Items
        $scope.CountItems = function () {
        $scope.ShowMessage = '';
        var items = $scope.lstItems;
          // check for empty entry
          if (items == "" || items == undefined)
          {
               $scope.msgClass = "text-warning";
               $scope.ShowMessage = 'Please Enter Items';
          }
          // let's start process if the data is available
          else {
            var arrayOfStrings = items.split(",");
            // remove blank entries
            for (var i = 0; i < arrayOfStrings.length; i++) {
              if (arrayOfStrings[i].trim() == "" ) {
                arrayOfStrings.splice(i, 1);
                i = i-1;
              }
            }

            // console.log (arrayOfStrings);
            //console.log (arrayOfStrings.length);

             if (arrayOfStrings.length>0)
             {
                 if (arrayOfStrings.length <= 3){
                   $scope.msgClass = "text-success";
                   $scope.ShowMessage = 'Enjoy!';
                 }
                else{
                  $scope.msgClass = "text-success";
                   $scope.ShowMessage = 'Too many items!';
                }

            }
            // if user enters only coma's
            else{
              $scope.msgClass = "text-warning";
              $scope.ShowMessage = 'Please Enter Items, remember we ignore blanks !';
            }
            }
        };



    }
})();
