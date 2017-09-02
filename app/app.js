angular.module('App', ['ui.router'])
  .config(function($logProvider) {
    $logProvider.debugEnabled(true);
  })
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('main',
        {
          url: '/',
          templateUrl: 'partials/main.html', 
          controller: function($scope, $stateParams, $http) {
            $http.get('data/test1.json')
                .then(function(res) {
              $scope.issues = res.data
            })            
          }
        })
      .state('main.child1',
        {
          url: 'child1',
          templateUrl: 'partials/issue.html', 
          controller: function($scope, $stateParams, $http) {
            $http.get('data/test1.json')
                .then(function(res) {
              $scope.issues = res.data
            })
          }
        })
      .state('main.child2',
        {
          url: 'child2',
          templateUrl: 'partials/issue.html', 
          controller: function($scope, $stateParams, $http) {
            $http.get('data/test2.json')
                .then(function(res) {
              $scope.issues = res.data
            })
          }
        })
      .state('main.child3',
        {
          url: 'child3',
          templateUrl: 'partials/issue.html',
          controller: function($scope, $stateParams, $http) {
            $http.get('data/test3.json')
                .then(function(res) {
              $scope.issues = res.data
            })
          }
        })
      .state('main.child12',
        {
          url: 'child12',
          templateUrl: 'partials/issue.html',
          controller: function($scope, $stateParams, $http) {

            $http.get('data/test12.json')
              .then(function(res) {
                $scope.issues = res.data;
            })
          }
        })

      ;



  })
.run(function($rootScope, $log) {
    $rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams) {
      $log.error(event, unfoundState);
    });
    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
      $log.error(event, toState.name, error);
    });
  });
  
$(document).ready(function() {
  console.log("document loaded");
});
