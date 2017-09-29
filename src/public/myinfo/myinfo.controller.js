(function () {
"use strict";

angular.module('public')
.controller('MyinfoController', MyinfoController);

MyinfoController.$inject = ['$rootScope','MenuService', '$log'];
function MyinfoController( $rootScope, MenuService, $log,) {
  var $ctrl = this;
  $ctrl.firstname;
  $ctrl.lastname;
  $ctrl.emailaddress;
  $ctrl.phonenumber;
  $ctrl.favouritedish;
  $ctrl.menuItem;
  $ctrl.ismenuItem = false;
  $ctrl.noMenuItem = false;


    if($rootScope.mydata != undefined){
      $ctrl.firstname = $rootScope.mydata.firstname;
      $ctrl.lastname = $rootScope.mydata.lastname;
      $ctrl.emailaddress = $rootScope.mydata.emailaddress;
      $ctrl.phonenumber = $rootScope.mydata.phonenumber;
      $ctrl.favouritedish = $rootScope.mydata.favouritedish;
    } else{
      $ctrl.notSigned = true;
    }
    if($ctrl.favouritedish !== undefined){
      MenuService.getMenuItem($ctrl.favouritedish).then(function(response){
        $ctrl.menuItem = response;
        $ctrl.ismenuItem = true;
        $ctrl.noMenuItem = false;
      }).catch(function() {
        $ctrl.ismenuItem = false;
        $ctrl.noMenuItem = true;
      });

    }

}

})();
