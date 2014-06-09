//script.js

  //create module with app name
  var itsmarcusApp = angular.module('itsmarcusApp', ['slick']);

  //create controller and inject scope
  itsmarcusApp.controller('mainController', function($scope){
    $scope.message = "Hello world!";
  });

  itsmarcusApp.controller('aboutController', function($scope){
    $scope.courses = ['Geog 190', 'Geog 128', 'CS40'];
    $scope.jobs = 
        [{
          'title': 'Software Engineer Intern',
          'employer': 'Procore Technologies',
          'description': 'Rails developer intern.'
        },
        {
          'title': 'Computing Assistant',
          'employer': 'Kavli Institute for Theoretical Physics',
          'description': 'Did stuff.'
        }];
  });

  itsmarcusApp.controller('projectsController', function($scope){
    $scope.projects =
        [{
          'title': 'TeemUp Mobile',
          'languages': [{'name': 'Obj-C', 'color': ''}],
          'description': 'The iOS mobile interface for teemup.'
        },
        {
          'title': 'TeemUp',
          'languages': [{'name':'Rails','color': 'success'},
                        {'name': 'PostgreSQL', 'color': 'success'},
                        {'name': 'PostGIS', 'color': 'success'}],
          'description': 'TeemUp backend web server.'
        },
        {
          'title': 'Safewalk Mobile',
          'languages': [{'name':'Obj-C','color': ''}],
          'description': 'Gaucho Safewalk mobile interface.'
        },
        {
          'title': 'Safewalk',
          'languages': [{'name':'Node','color': 'alert'},
                        {'name': 'Angular', 'color': 'alert'},
                        {'name': 'Mongodb', 'color': 'alert'}],
          'description': 'Gaucho Safewalk backend web server.'
        },
        {
          'title': 'blicket',
          'languages': [{'name':'Obj-C','color': ''},
                        {'name': 'BLE', 'color': 'alert'}],
          'description': 'A completely hands free ticketing app. Proof of concept built upon Qualcomm BLE beacons and iOS. Built for LAHacks 2014'
        },
        {
          'title': 'itsmarc.us',
          'languages': [{'name':'Node','color': 'alert'},
                        {'name': 'Angular', 'color': 'alert'},
                        {'name': 'Mongodb', 'color': 'alert'}],
          'description': 'TeemUp backend web server.'
        },
        {
          'title': 'CarCompare',
          'languages': [{'name':'Rails','color': 'success'}],
          'description': 'Used car comparison shopper. Factors in maintenance schedules and graphs cost over time. Built for mhacks 2013.'
        }];
  });

