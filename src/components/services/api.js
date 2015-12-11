'use strict';
angular.module('edpanel')
.service('api', function($resource, $location) {
    var host = $location.host();
    var apiSuffix = '';
    var base = $location.protocol() + '://' + host;
    //Hack - if we're dealing with localhost, configure the call to run through browsersync
    if(host === 'localhost') {
      base += ':8443';
    }
    base += apiSuffix;
    return {
      contactUs: $resource(base + '/submitfeedback'),
      basePrefix: '/home'
    };
});
