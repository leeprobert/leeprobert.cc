(function(){
    
    var app = angular.module('main',[]);
    
    app.controller('AppController', function(){
        
        
    });
    
    app.controller('HeaderController', ['$scope', function($scope){
     
        console.log($scope.header);
        
        // Instantiate HeadsUp behaviour for the Header element
        // TODO : DOM manipulaiton in Controller is BAD!! Do this using directive.
        new headsUp( '.main-header' );
    }]);
    
})();