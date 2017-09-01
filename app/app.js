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
          controller: function($scope, $stateParams) {
            $scope.issues = [
              {
                "PARENT_ISSUE" : "BOGUS-1234",
                "HOURS" : 6,
                "TASK_ISSUE" : "BOGUS-4321",
                "DESCRIPTION" : "This is a sample description.  It is very descriptive",
                "IN" : "PL"
              }
            ]


          }
        })
      .state('main.child1',
        {
          url: 'child1',
          templateUrl: 'partials/issue.html', 
          controller: function($scope, $stateParams) {
            $scope.TASK_ISSUE = "BOGUS-5432";
          }
 
    })
      .state('main.child2',
        {
          url: 'child2',
          templateUrl: 'partials/issue.html', 
          controller: function($scope, $stateParams) {

              $scope.issues = [
              {
                "PARENT_ISSUE" : "BOGUS-1234",
                "HOURS" : 6,
                "TASK_ISSUE" : "BOGUS-4321",
                "DESCRIPTION" : "This is a sample description.  It is very descriptive",
                "IN" : "PL"
              },             
              {
                "PARENT_ISSUE" : "BOGUS-1234",
                "HOURS" : 3,
                "TASK_ISSUE" : "BOGUS-5432",
                "DESCRIPTION" : "Test working feature.",
                "IN" : "PL"
              }
            ]


          }
        })
      .state('main.child3',
        {
          url: 'child3',
          templateUrl: 'partials/issue.html',
          controller: function($scope, $stateParams) {

              $scope.issues = [
              {
                "PARENT_ISSUE" : "BOGUS-1234",
                "HOURS" : 6,
                "TASK_ISSUE" : "BOGUS-4321",
                "DESCRIPTION" : "This is a sample description.  It is very descriptive",
                "IN" : "PL"
              },             
              {
                "PARENT_ISSUE" : "BOGUS-1234",
                "HOURS" : 3,
                "TASK_ISSUE" : "BOGUS-5432",
                "DESCRIPTION" : "Test working feature.",
                "IN" : "PL"
              },             
              {
                "PARENT_ISSUE" : "BOGUS-1234",
                "HOURS" : 6,
                "TASK_ISSUE" : "BOGUS-6543",
                "DESCRIPTION" : "Test broken feature.",
                "IN" : "PL"
              }
            ]

            $scope.DESCRIPTION = "Test something broken";
            $scope.TASK_ISSUE = "BOGUS-7654";
          }
        })
      .state('main.child12',
        {
          url: 'child12',
          templateUrl: 'partials/issue.html',
          controller: function($scope, $stateParams) {

              $scope.issues = [
              {
                "PARENT_ISSUE" : "BOGUS-1234",
                "HOURS" : 6,
                "TASK_ISSUE" : "BOGUS-4321",
                "DESCRIPTION" : "This is a sample description.  It is very descriptive",
                "IN" : "PL"
              },             
              {
                "PARENT_ISSUE" : "BOGUS-1234",
                "HOURS" : 3,
                "TASK_ISSUE" : "BOGUS-5432",
                "DESCRIPTION" : "Test working feature.",
                "IN" : "PL"
              },             
              {
                "PARENT_ISSUE" : "BOGUS-1234",
                "HOURS" : 6,
                "TASK_ISSUE" : "BOGUS-6543",
                "DESCRIPTION" : "Test broken feature.",
                "IN" : "PL"
              },
              {
                "PARENT_ISSUE" : "BOGUS-1234",
                "HOURS" : 6,
                "TASK_ISSUE" : "BOGUS-4321",
                "DESCRIPTION" : "This is a sample description.  It is very descriptive",
                "IN" : "PL"
              },             
              {
                "PARENT_ISSUE" : "BOGUS-1234",
                "HOURS" : 3,
                "TASK_ISSUE" : "BOGUS-5432",
                "DESCRIPTION" : "Test working feature.",
                "IN" : "PL"
              },             
              {
                "PARENT_ISSUE" : "BOGUS-1234",
                "HOURS" : 6,
                "TASK_ISSUE" : "BOGUS-6543",
                "DESCRIPTION" : "Test broken feature.",
                "IN" : "PL"
              },
              {
                "PARENT_ISSUE" : "BOGUS-1234",
                "HOURS" : 6,
                "TASK_ISSUE" : "BOGUS-4321",
                "DESCRIPTION" : "This is a sample description.  It is very descriptive",
                "IN" : "PL"
              },             
              {
                "PARENT_ISSUE" : "BOGUS-1234",
                "HOURS" : 3,
                "TASK_ISSUE" : "BOGUS-5432",
                "DESCRIPTION" : "Test working feature.",
                "IN" : "PL"
              },             
              {
                "PARENT_ISSUE" : "BOGUS-1234",
                "HOURS" : 6,
                "TASK_ISSUE" : "BOGUS-6543",
                "DESCRIPTION" : "Test broken feature.",
                "IN" : "PL"
              },
              {
                "PARENT_ISSUE" : "BOGUS-1234",
                "HOURS" : 6,
                "TASK_ISSUE" : "BOGUS-4321",
                "DESCRIPTION" : "This is a sample description.  It is very descriptive",
                "IN" : "PL"
              },             
              {
                "PARENT_ISSUE" : "BOGUS-1234",
                "HOURS" : 3,
                "TASK_ISSUE" : "BOGUS-5432",
                "DESCRIPTION" : "Test working feature.",
                "IN" : "PL"
              },             
              {
                "PARENT_ISSUE" : "BOGUS-1234",
                "HOURS" : 6,
                "TASK_ISSUE" : "BOGUS-6543",
                "DESCRIPTION" : "Test broken feature.",
                "IN" : "PL"
              }
            ]

            $scope.DESCRIPTION = "Test something broken";
            $scope.TASK_ISSUE = "BOGUS-7654";
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
