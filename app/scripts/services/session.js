'use strict';

angular.module('testAngularFullStackApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
