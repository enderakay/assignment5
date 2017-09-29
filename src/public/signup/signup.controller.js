(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignupController);

SignupController.$inject = ['$rootScope','MenuService', '$log'];
function SignupController( $rootScope, MenuService, $log,) {
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
  }

  $ctrl.signup = function()
  {
    $rootScope.mydata = {
      firstname: $ctrl.firstname,
      lastname: $ctrl.lastname,
      emailaddress: $ctrl.emailaddress,
      phonenumber: $ctrl.phonenumber,
      favouritedish: $ctrl.favouritedish.toUpperCase()
    };
    if($ctrl.favouritedish !== undefined){
      MenuService.getMenuItem($ctrl.favouritedish.toUpperCase()).then(function(response){
        $ctrl.menuItem = response;
        $ctrl.ismenuItem = true;
        $ctrl.noMenuItem = false;
      }).catch(function() {
        $ctrl.ismenuItem = false;
        $ctrl.noMenuItem = true;
      });

    }
  }
}

})();
