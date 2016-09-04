/**
 * Main App Controller for the Angular Material Starter App
 * @param UsersDataService
 * @param $mdSidenav
 * @constructor
 */
function AppController(UsersDataService, $mdSidenav) {
  var self = this;

  self.selected = null;
  self.users = [];
  self.selectUser = selectUser;
  self.toggleList = toggleUsersList;

  // Load all registered users

  UsersDataService
    .loadAllUsers()
    .then(function (users) {
      self.users = [].concat(users);
      self.selected = users[0];
    });

  onSignInPromise.then(function (googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
  });

  // *********************************
  // Internal methods
  // *********************************

  /**
   * Hide or Show the 'left' sideNav area
   */
  function toggleUsersList() {
    $mdSidenav('left').toggle();
  }

  /**
   * Select the current avatars
   * @param menuId
   */
  function selectUser(user) {
    self.selected = angular.isNumber(user) ? $scope.users[user] : user;
  }
}

export default ['UsersDataService', '$mdSidenav', AppController];
